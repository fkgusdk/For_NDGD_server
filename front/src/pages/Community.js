import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { CommunityStyled } from "../styles/CommunityStyled";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Community() {
    const [contentList, setContentList] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/board/blog/")
        .then((res) => {
            setContentList(res.data.reverse());
        })
        .catch((error) => {
            alert(error);
        })
      },[])    
      
      return(
        <CommunityStyled>
            <Header />
            <PageTitle title="Community (커뮤니티)" txt = "다양한 정보를 공유해요!"/>
            {localStorage.length ?
            <Link to = "/post"><button className = "community-btn">글쓰기</button></Link>
            : <Link to = "/post"><button className = "community-btn">글쓰기</button></Link>
            }
            <div className = "community-wrapper">
                {contentList.map((content) => (
                    <div className = "community-items" key = {content.id}>
                        <div className = "ci-txt">
                            <div className = "ci-title">
                                {content.title}
                            </div>
                            <div className = "ci-contents">
                                {content.body}
                            </div>

                            <div className = "ci-comment">
                                <span>{content.user}</span>
                            </div>   
                            <span>{content.created_at.slice(0,10)}</span>
                        </div>
                    </div>
                ))}
                {/* <button id="postBtn" onClick={onPost}>포스팅하기(test)</button>     //임시 포스팅 버튼 */}
            </div>

        </CommunityStyled>
    )
}