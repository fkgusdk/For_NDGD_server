import React from "react";
import { Link } from 'react-router-dom';

import Header from "../components/Header";
import PageTitle from "../components/PageTitle";

import { ProcedureStyled } from "../styles/ProcedureStyled";

import ProcedureData from "../data/ProcedureData.json"
// style={{"background" : "#F5F5F5"}}
export default function Procedure() {


    return(
        <ProcedureStyled>
            <Header />
            <PageTitle title="Procedure (절차)" txt = "산재 보상 절차/신청 방법입니다."/>

            <div className = "procedure-wrapper">
            {ProcedureData.procedure.map((procedure) => ( // map 함수를 이용해 ProcedureData.procedure 안의 원소를 검색
                <div key = {procedure.id}> 
                {procedure.id % 2 !== 0 ?  // 홀수 step
                <div className = "procedure-contents">
                    {procedure.img && 
                    <div className="procedure-img">
                        <img src={procedure.img} alt=""/>
                    </div>
                    }
                    {procedure.step &&
                    <div className = "procedure-txt"> 
                        <span className = "procedure-txt-step">{procedure.step} : </span>
                        <span>{procedure.title}</span>
                        <div className = "procedure-txt-sub">
                        {procedure.description && procedure.description.split("\n").map(line => {
                            return (
                                <div key={line.id} className="procedure-txt-subtxt">{line}</div>
                            )
                        })}
                        </div>
                        { procedure.click && 
                        <Link to = {procedure.click.link}>
                            <button>{procedure.click.name}</button>
                        </Link>
                        }
                    </div>
                    }

                    {procedure.whether && 
                        <div className="procedure-step5">
                            <div className="procedure-txt-center">
                                <span className = "procedure-txt-step">{procedure.num} : </span>
                                <span>{procedure.numtitle}</span>
                            </div>
                            <div className="procedure-whether">
                                <div className="pw-items approval">
                                    <div className="pw-items-title">{procedure.whether.yes.title}</div>
                                    <div className="pw-items-description">{procedure.whether.yes.description}</div>
                                </div>
                                <div className="pw-items disapproval">
                                    <div className="pw-items-title">{procedure.whether.no.title}</div>
                                    {procedure.whether.no.description.split("\n").map(line => {
                                        return(
                                            <div key = {line.id} className="pw-items-description">{line}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        }
                </div>
                    : // 짝수 step
                <div className = "procedure-contents" style={{"background" : "#F5F5F5"}}>
                    <div className = "procedure-txt"> 
                        <span className = "procedure-txt-step">{procedure.step} : </span>
                        <span>{procedure.title}</span>
                        <div className = "procedure-txt-sub">
                        {procedure.description && procedure.description.split("\n").map(line => {
                            return (
                                <div key={line.id} className="procedure-txt-subtxt">{line}</div>
                            )
                        })}
                        </div>
                        { procedure.click && 
                        <Link to = {procedure.click.link}>
                            <button>{procedure.click.name}</button>
                        </Link>}                    
                    </div>
                    {procedure.img && 
                    <div className="procedure-img">
                        <img src={procedure.img} alt=""/>
                    </div>
                    }
                </div>
                }
            </div>
            )
        )}
        </div>
    </ProcedureStyled>
    )
}