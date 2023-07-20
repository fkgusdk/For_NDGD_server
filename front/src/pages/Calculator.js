import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { CalculatorStyled } from "../styles/CalculatorStyled";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Procedure() {
    const [formData, setFormData] = useState({
        paidType:'',
        occurrenceType: '',
        local: '',
        workname: '',
        illness: '',
        scale: ''
    });
    
    const [calcPrice, setCalcPrice] = useState(''); // 수령 가능 보험료 상태 추가

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        const data = new URLSearchParams(formData).toString();
        
        axios.post('http://127.0.0.1:8000/receipt_predictions/api/', data, config)
            .then(response => {
                // 성공적으로 요청을 처리한 후 수행할 작업
                console.log(response.data);
                setCalcPrice(response.data.result); // 수령 가능 보험료 상태 업데이트
            })
            .catch(error => {
                // 요청 실패에 대한 처리
                console.error(error);
            });
    };

    return(
        <CalculatorStyled>
            <Header />
            <PageTitle title="AI Calculator" txt = "4대 보험금 모의 계산기입니다."/>
            <form className="calc-wrapper" onSubmit={handleSubmit}>
                <div className="calc-txt">재해 발생 당시 정보와 현재 본인의 상황을 입력해주세요.</div>
                <div className="calc-contents">
                    <div className="calc-items">
                        <div className="calc-items-name">급여 종류</div>
                        <select name="paidType" value={formData.paidType} onChange={handleChange}>
                            <option value="요양급여">요양급여</option>
                            <option value="휴업급여">휴업급여</option>
                            <option value="상병보상연금">상병보상연금</option>
                            <option value="장해급여">장해급여</option>
                            <option value="유족급여">유족급여</option>
                            <option value="장의비">장의비</option>
                            <option value="간병급여">간병급여</option>
                            <option value="재활급여">재활급여</option>
                        </select>
                    </div>
                    <div className="calc-items">
                        <div className="calc-items-name">근무 지역</div>
                        <select name="local" value={formData.local} onChange={handleChange}>
                            <option value="수도권">수도권</option>
                            <option value="강원">강원</option>
                            <option value="부산">부산</option>
                            <option value="경남">경남</option>
                            <option value="울산">울산</option>
                            <option value="대구">대구</option>
                            <option value="경북">경북</option>
                            <option value="광주">광주</option>
                            <option value="전북">전북</option>
                            <option value="전남">전남</option>
                            <option value="제주">제주</option>
                            <option value="대전">대전</option>
                            <option value="충북">충북</option>
                            <option value="충남">충남</option>
                        </select>
                    </div>
                    <div className="calc-items">
                        <div className="calc-items-name">발생 형태</div>
        
                        <input
                          type="text"
                          name="occurrenceType"
                          value={formData.occurrenceType}
                          onChange={handleChange}
                          placeholder="발생 형태를 입력해주세요."
                        />

                    </div>
                    <div className="calc-items">
                        <div className="calc-items-name">업종명</div>

                        <input
                          type="text"
                          name="workname"
                          value={formData.workname}
                          onChange={handleChange}
                          placeholder="업종명을 입력해주세요."
                        />
                    </div>
                    <div className="calc-items">
                        <div className="calc-items-name">병명</div>
                        <input
                          type="text"
                          name="illness"
                          value={formData.illness}
                          onChange={handleChange}
                          placeholder="병명을 입력해주세요."
                        />

                    </div>
                    <div className="calc-items">
                        <div className="calc-items-name">업장 인력 규모</div>
                        <select name="scale" value={formData.scale} onChange={handleChange}>
                            <option value="건 설 업">건 설 업</option>
                            <option value="5인미만">5인미만</option>
                            <option value="5 ~ 29인">5 ~ 29인</option>
                            <option value="30 ~ 49인">30 ~ 49인</option>
                            <option value="50 ~ 99인">50 ~ 99인</option>
                            <option value="100 ~ 299인">100 ~ 299인</option>
                            <option value="300 ~ 499인">300 ~ 499인</option>
                            <option value="500 ~ 999인">500 ~ 999인</option>
                            <option value="1,000인 이상">1,000인 이상</option>
                        </select>
                    </div>
                </div>
                
                {calcPrice ?
                <div className="calc-result">
                    <h2>수령 가능 보험료</h2>
                    <span className="calc-price">{calcPrice} 원</span>
                    <span className="calc-unit"> 원</span>
                    <button className = "calc-rebtn" type="submit">다시 계산하기</button>
                </div>
                :
                <button className = "calc-btn" type="submit">수령 가능 보험료 계산하기</button>
                }
            </form>

            <div className="calc-buttons">
                <Link to="/procedure">
                    <button className="calc-button-ways">
                        산재보험 절차/신청방법<br/>보러가기
                    </button>
                </Link>
                <a href="https://total.comwel.or.kr/" 
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="calc-button-apply">
                        고용/산재보험 토탈서비스<br/> 바로가기
                    </button>
                </a>
            </div>
        </CalculatorStyled>
    );
}
