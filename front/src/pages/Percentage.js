import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { CalculatorStyled } from "../styles/CalculatorStyled";
import { Link } from 'react-router-dom';

export default function Percentage() {
    const [formData, setFormData] = useState({
        workType:'',
        illness: '',
        scale: '',
        special:''
    });
    
    const [percentage, setPercentage] = useState(''); // 수령 가능 보험료 상태 추가

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
        
        axios.post('http://127.0.0.1:8000/per_predictions/api/', data, config)
            .then(response => {
                // 성공적으로 요청을 처리한 후 수행할 작업
                console.log(response.data);
                setPercentage(response.data.result); // 수령 가능 보험료 상태 업데이트
            })
            .catch(error => {
                // 요청 실패에 대한 처리
                console.error(error);
                
            });
    };

    return(
        <CalculatorStyled>
            <Header />
            <PageTitle title="AI Possibility Prediction" txt = "4대 보험금 모의 계산기입니다."/>
            <form className="calc-wrapper" onSubmit={handleSubmit}>
                <div className="calc-txt">재해 발생 당시 정보와 현재 본인의 상황을 입력해주세요.</div>
                <div className="calc-contents" >
                    <div className="calc-items">
                        <div className="calc-items-name">업종</div>
                        <select name="workType" value={formData.workType} onChange={handleChange}>
                            <option value="금융및보험엄">금융및보험업</option>
                            <option value="광업">광업</option>
                            <option value="제조업">제조업</option>
                            <option value="전기·가스및상수도사업">전기·가스및상수도사업</option>
                            <option value="건설업">건설업</option>
                            <option value="운수·창고및통신업">운수·창고및통신업</option>
                            <option value="임업">임업</option>
                            <option value="어업">어업</option>
                            <option value="농업">농업</option>
                            <option value="기타의사업">기타의사업</option>
                            <option value="구분없음">구분없음</option>
                            
                        </select>
                    </div>
                    <div className="calc-items">
                        <div className="calc-items-name">질병 분류</div>
                        <select name="illness" value={formData.illness} onChange={handleChange}>
                            <option value="뇌심혈관질병">뇌심혈관질병</option>
                            <option value="근골격계질병">근골격계질병</option>
                            <option value="COPD">COPD</option>
                            <option value="레이노증후군">레이노증후군</option>
                            <option value="직업성암">직업성암</option>
                            <option value="정신질병">정신질병</option>
                            <option value="세균성질병">세균성질병</option>
                            <option value="간질병">간질병</option>
                            <option value="기타">기타</option>
                        </select>
                    </div>
                    <div className="calc-items">
                        <div className="calc-items-name">특수형태 근로 종사자 여부</div>
                        <select name="special" value={formData.special} onChange={handleChange}>
                            <option value="보험설계사">보험설계사</option>
                            <option value="건설기계조종사">건설기계조종사</option>
                            <option value="학습지교사">학습지교사</option>
                            <option value="골프장캐디">골프장캐디</option>
                            <option value="택배기사">택배기사</option>
                            <option value="퀵서비스기사">퀵서비스기사</option>
                            <option value="대출모집인">대출모집인</option>
                            <option value="신용카드모집인">신용카드모집인</option>
                            <option value="대리운전기사">대리운전기사</option>
                            <option value="방문판매원">방문판매원</option>
                            <option value="대여제품점검원">대여제품점검원</option>
                            <option value="가전제품설치원">가전제품설치원</option>
                            <option value="화물차주">화물차주</option>
                            <option value="소프트웨어프리랜서">소프트웨어프리랜서</option>
                            <option value="해당사항 없음">해당사항 없음</option>
                        </select>
                    </div>

                    <div className="calc-items">
                        <div className="calc-items-name">업장 인력 규모</div>
                        <select name="scale" value={formData.scale} onChange={handleChange}>
                            <option value="5인미만">5인미만</option>
                            <option value="5~30인 미만">5~30인 미만</option>
                            <option value="30~50인 미만">30~50인 미만</option>
                            <option value="50~100인 미만">50~100인 미만</option>
                            <option value="100~300인 미만">100~300인 미만</option>
                            <option value="300~500인 미만">300~500인 미만</option>
                            <option value="500~1000인 미만">500~1000인 미만</option>
                            <option value="1,000인 이상">1,000인 이상</option>
                        </select>
                    </div>
                </div>
                
                { percentage ?
                <div className="calc-result">
                    <h2>승인 확률</h2>
                    <div className="calc-price">{percentage} %</div>
                    <button className = "calc-rebtn" type="submit">다시 계산하기</button>
                </div>
                :
                <button className = "calc-btn" type="submit">확률 계산하기</button>
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

