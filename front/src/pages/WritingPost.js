import React, {useState} from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { WritingPostStyled } from "../styles/WritingPostStyled";
import { useNavigate } from 'react-router-dom';

export default function Community() {
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const navigate = useNavigate();

    const onClickPost = () => {  //현재 버튼누르면 바로 data가 포스트 되도록 되어있는데 user한테 내용 입력받아서 이 버튼 누르면 포스트 되도록 수정 해야할 듯
        window.Axios.post("board/blog/",{
            title: title,
            body: contents,
        })
        .then((res) => {
            alert("작성 완료");
            navigate("/community", {replace: true});
        })
        .catch((error) => {
            const key = Object.keys(error.response.data);
            if (key=='detail'){
                alert("로그인을 하신뒤 게시물을 작성해주세요.")
            }
            else if (key=='title,body'){
                alert("제목과 내용을 입력해주세요.")
            }
            else if (key=='title'){
                alert("제목을 입력해주세요.")
            }
            else if (key=='body'){
                alert("내용을 입력해주세요.")
            }
        })
        // alert("게시 완료!")
        // const userData = {
        //   title: "testpost2",
        //   body: "testpost2"
        // };
        // window.Axios.post("board/blog/", userData)
        //     .then(function(response){
        //     alert("포스트완료");
        // });
        };

    return(
        <WritingPostStyled>
            <Header />
            <PageTitle title="Writing Post (게시물 작성하기)" txt = "다양한 정보를 공유해요!"/>
            <div className = "post-wrapper">
                <div className = "post-contents">
                    <div className = "post-items">
                        <span>제목</span>
                        <input 
                            placeholder="제목을 입력해 주세요."
                            type = "text"
                            value = {title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                        />
                    </div>
                    <div className = "post-items">
                        <span>등록자</span>
                        <span>{localStorage.getItem("email")}</span>
                    </div>
                    <div className = "post-items">
                        <span>내용</span>
                        <textarea 
                            className = "pi-contents"
                            placeholder="내용을 입력하세요."
                            type = "text"
                            value = {contents}
                            onChange={(e) => {
                                setContents(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <button className = "post-btn" onClick={onClickPost}>완료</button>
            </div>
        </WritingPostStyled>
    )
}