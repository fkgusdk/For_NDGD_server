import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import MapContainer from "../components/MapContainer";
import jobData from "../data/JobInstitutionData.json"

import { TrainingStyled } from "../styles/AgencyStyled";

// import jobData from "../data/JobInstitutionData.json"

const { kakao } = window;

export default function VocationalTraining() {
    const [state, setState] = useState({
        center: {lat : 36.3, lng: 127.5},
        isPanto: false,
        level: 12,
    })

    return(
        <TrainingStyled>
            <Header />
            <PageTitle title="Institution (기관)" txt = "직업훈련 우수 기관입니다."/>
            <div className="training-wrapper">
                <MapContainer 
                    center = {state.center}
                    isPanto = {state.isPanto}
                    level={state.level}
                />
                <div className = "training-list">
                    {jobData.job.map((job) => (
                        <button 
                            onClick={() => 
                                setState({
                                    center: {lat : `${job.lat}`, lng : `${job.lng}`}, 
                                    isPanto: false,
                                    level: 2,
                                })
                            } 
                            className = "training-list-items" key = {job.id}>
                            <div className = "job-best">
                                {job.best === "최우수"
                                ?
                                <img src = "images/goldmedal.png" alt="최우수"/> 
                                :
                                <img src = "images/silvermedal.png" alt="우수"/> 
                                }
                            </div>
                            <div className = "job-txt">
                                <div className = "job-name">{job.name}</div>
                                <div className = "job-address">{job.address}</div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </TrainingStyled>
    )
}