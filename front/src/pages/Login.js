import React,{useEffect, useState} from 'react'

import { useNavigate } from 'react-router-dom';
import { ModalOverlayStyle, LoginStyle } from "../styles/LoginStyled";
import axios from "axios";

window.Axios = axios.create({  //서버와 통신할 axios객체 전역으로 선언
	baseURL : "http://127.0.0.1:8000/"
})

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [signup, setSignup] = useState(false);
  
  const [emailValid, setEmailValid] = useState(false);

  const [phoneNumber, setphoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')

  // 동의 checkbox
  const [allCheck, setAllCheck] = useState(false);
  const [infoCheck, setInfoCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  let localStorage = window.localStorage;

  const allBtnEvent = () => {
    if(allCheck === false) {
      setAllCheck(true);
      setInfoCheck(true);
      setMarketingCheck(true);
    }else {
      setAllCheck(false);
      setInfoCheck(false);
      setMarketingCheck(false);
    }
  };

  const infoBtnEvent = () => {
    if(infoCheck === false) {
      setInfoCheck(true)
    } else {
      setInfoCheck(false)
    }
  };

  const marketingBtnEvent = () => {
    if(marketingCheck === false) {
      setMarketingCheck(true)
    } else{
      setMarketingCheck(false)
    }
  }

  useEffect(() => {
    if(infoCheck === true && marketingCheck === true) {
      setAllCheck(true)
    } else {
      setAllCheck(false)
    }
  },[infoCheck, marketingCheck])

  const navigate = useNavigate();

  //회원가입
  const ClickSignup = (e) => {
    if(!infoCheck) {
      alert("개인정보 수집 및 이용 동의(필수)를 확인해주세요")
    }
    else {
      window.Axios.post("accounts/registration/",{
        email: email,
        password1: password,
        password2: confirmPassword,
      })
      .then((res) => {
        alert("회원가입 성공!");
        setSignup(false);
      })
      .catch((error) => {
        const key = Object.keys(error.response.data);
        if (key=='email'){
          alert('중복된 아이디가 존재합니다.')
        }
        else if (key=='non_field_errors'){
          alert('두 비밀번호가 일치하지 않습니다.')
        }
      })
    }
  //   const userData = {  //value부분에 user가 입력한 값 들어가야 함(test 데이터임)
  //     email: email,
  //     password1: password,
  //     password2: confirmPassword,
  // };
  //   window.Axios.post("accounts/registration/", userData)
  //   .then(function(response){
  //     console.log(response);
  //   });
  }

  // 로그인
  const onClickLogin = (e) => {
    e.preventDefault();

    window.Axios.post("accounts/login/", {
      email : email,
      password : password,
    })
    .then((res) => {
      window.Axios.defaults.headers.common['Authorization'] = `Token ${res.data["key"]}`
      console.log(res)
      console.log(res.data)
      localStorage.setItem("email", email);

      alert(email + "님 반갑습니다.")
      navigate("/", {replace: true});
    })
    .catch((error) => {
      const key = Object.keys(error.response.data);
        if (key=='non_field_errors'){
          alert('입력하신 정보로 가입된 사용자가 존재하지않습니다. 아이디 혹은 비밀번호를 확인해주세요')
        }
    })

  //   alert("이메일 확인")
  //   const userData = {  //value부분에 user가 입력한 값 들어가야 함(test 데이터임)
  //     email: "test10@naver.com",
  //     password: "1q2w3e4r!"
  // };
  // window.Axios.post("accounts/login/", userData)
  //   .then(function(response){
  //     window.Axios.defaults.headers.common['Authorization'] = `Token ${response.data["key"]}`
  //     alert(response.data["key"]);  //key잘 넘어오나 test 삭제해도 됨
  //   });
  };

  //이메일 형식
  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if(regex.test(email)) {
      setEmailValid(true);
    } else{
      setEmailValid(false);
    }
  }

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <LoginStyle>
    {!signup ?
    <ModalOverlayStyle>
      <div className="modal-wrapper">
        <div className="modal-icon">
          <img src = "images/logo.png" alt="NDGD"/>
        </div>

        <div className="modal-container">
          <div className="modal-title">
            <div>피고용인을 위한 <br/> 산재관리 플랫폼 "NDGD"</div>
            <div id="subTxt">산업재해의 모든 것<br/>지금 NDGD에서 시작하세요.</div>
          </div>
          
          <div className="modal-items">
            <label>이메일</label>
            <input 
              type="text" 
              placeholder="이메일을 입력해 주세요." 
              value={email} 
              onChange={handleEmail}
              />
            <div className="error-message">
              { !emailValid && email.length > 0 && (
              <div>올바른 이메일 형식을 입력해주세요.</div>
              )}
            </div>
          </div>  

          <div className="modal-items">
            <label>비밀번호 입력</label>
            <input 
              type="password" 
              placeholder="비밀번호" 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
            
          <button id="emailBtn" onClick={onClickLogin}>로그인</button>
          <button id="SignupBtn" onClick={() => {
            setSignup(true)
            setEmail("")
            setPassword("")
          }}>회원가입</button>

          <div className="agree-text">
            걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다. <br/>
            회원가입 시 개인정보 처리방침과 이용약관을 확인하였으며, 동의합니다.
          </div>
        </div>
      </div>
    </ModalOverlayStyle>
    :
    <ModalOverlayStyle paddingBottom={22}>
      <div className="modal-wrapper">
        <div className="signup-title">
          <div>회원가입</div>
        </div>
        
        <div className="modal-container">
          <div className="modal-items">
            <label>이메일</label>
            <input 
              type="text" 
              placeholder="이메일을 입력해 주세요." 
              value={email}
              onChange={handleEmail}
            />
            <div className="error-message">
              { !emailValid && email.length > 0 && (
              <div>올바른 이메일 형식을 입력해주세요.</div>
              )}
            </div>
          </div>

          {/* <div className="modal-items">
            <label>휴대폰 번호</label>
            <select defaultValue='한국'>
              <option value='한국'>대한민국 +82</option>
              <option value='일본'>Japan +81</option>
              <option value='태국'>Taiwan +886</option>
              <option value='일본'>United States +1</option>
            </select>
            <div className="number-certif">
              <input 
                type="text" 
                placeholder="(예시)010-3456-7890" 
                value={phoneNumber}
                onChange={(e) => {
                  setphoneNumber(e.target.value)
                }}
              />
            </div>
          </div> */}

          <div className="modal-items">
            <label>비밀번호</label>
            <input 
              type="password" 
              placeholder="비밀번호를 입력해 주세요."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }} 
            />
            <div id="pwTxt">영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상 입력해 주세요.</div>
          </div>  

          <div className="modal-items">
            <label>비밀번호 확인</label>
            <input 
              type="password" 
              placeholder="비밀번호를 다시 한번 입력해 주세요." 
              value={confirmPassword}
              onChange={(e) => {
                setconfirmPassword(e.target.value)
              }} 
            />  
          </div>
          
          <div className="agree-items">
            <input type="checkbox" checked={allCheck} onChange={allBtnEvent} />
            <span>전체 동의</span>
          </div>

          <div className="agree-subitems">
            <input type="checkbox"  checked={infoCheck} onChange={infoBtnEvent} />
            <span>개인정보 수집 빛 이용 동의(필수)</span>
          </div>

          <div className="agree-subitems">
            <input type="checkbox"  checked={marketingCheck} onChange={marketingBtnEvent} />
            <span>이벤트 소식 등 알림 정보 받기</span>
          </div>

          <button id="signupBtn" onClick={()=>{ClickSignup()}}>회원가입하기</button>
        </div>
      </div>
    </ModalOverlayStyle>
    }
    </LoginStyle>
  );
};