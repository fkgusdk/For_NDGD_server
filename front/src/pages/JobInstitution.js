import React from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { AgencyStyled } from "../styles/AgencyStyled";

export default function JobInstitution() {
    return(
        <AgencyStyled>
            <Header />
            <PageTitle title="Institution (기관)" txt = "직업재활 기관 현황입니다."/>
            <div className="agency-wrapper">
                <div className = "agency-search">
                    <div>검색</div>
                    <input type="text" />
                </div>
                <div className = "agency-list">
                <table>
                    <thead>
                        <tr>
                            <th className="agency-list-name">기관명</th>
                            <th className="agency-list-address">소재지</th>
                            <th className="agency-list-num">전화번호</th>
                            <th className="agency-list-kinds">종별</th>
                            <th className="agency-list-etc">부가기능</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(무등의료재단)일산현대요양병원</td>
                            <td>경기 고양시 일산동구 무궁화로 346(풍동)</td>
                            <td>031-922-7757</td>
                            <td>요양병원</td>
                            <td></td>
                        </tr>
                    <tr>
                        <td>(사)삼성생명공익재단삼성서울병원</td>
                        <td>서울 강남구 일원로81 (일원동)</td>
                        <td>02-3410-3274</td>
                        <td>상급종합병원</td>
                        <td>진폐요양</td>
                    </tr>
                    <tr>
                        <td>(의)백제병원</td>
                        <td>충남 논산시 취암동 21-14번지</td>
                        <td>031-922-7757</td>
                        <td>종합병원</td>
                        <td>진폐요양</td>
                    </tr>
                    <tr>
                        <td>(무등의료재단)일산현대요양병원</td>
                        <td>경기 고양시 일산동구 무궁화로 346(풍동)</td>
                        <td>031-922-7757</td>
                        <td>요양병원</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>(사)삼성생명공익재단삼성서울병원</td>
                        <td>서울 강남구 일원로81 (일원동)</td>
                        <td>02-3410-3274</td>
                        <td>상급종합병원</td>
                        <td>진폐요양</td>
                    </tr>
                    </tbody>
                </table> 
                </div>
            </div>
        </AgencyStyled>
    )
}