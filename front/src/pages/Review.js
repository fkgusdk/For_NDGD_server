import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { CommunityStyled } from "../styles/CommunityStyled";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Review() {
    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/review/review/")
        .then((res) => {
            setReviewList(res.data.reverse());
        })
        .catch((error) => {
            alert(error);
        })
    },[])   

    return(
        <CommunityStyled>
            <Header />
            <PageTitle title="Review (사용 후기)" txt = "다양한 후기를 통해 NDGD의 정확도를 확인해보세요!"/>
            {localStorage.length ?
            <Link to = "/writing"><button className = "community-btn">글쓰기</button></Link>
            : <Link to = "/login"><button className = "community-btn">글쓰기</button></Link>
            }
            <div className = "community-wrapper">
                {reviewList.map((review) => (
                <div className = "community-items" key = {review.id}>
                    <div className = "ci-txt">
                        <div className = "ci-title">
                                {review.title}
                        </div>
                        <div className = "ci-contents">
                            {review.title}
                        </div>

                        <div className = "ci-comment">
                            <span>{review.user}</span>
                        </div>   
                        <span>{review.created_at.slice(0,10)}</span>
                    </div>
                    <div className = "review-percent">
                        {review.percentage}%
                    </div>
                </div>
                ))}
            </div>
        </CommunityStyled>
    )
}