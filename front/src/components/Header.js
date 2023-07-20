import React from "react";
import { HeaderStyled } from "../styles/ComponentsStyled";
import { Link } from 'react-router-dom';

export default function Header() {
  const handleLogout = () => {
    localStorage.removeItem("email");
    document.location.href = '/'
  }

    return (
      <HeaderStyled>
        <Link to ="/">
          <div className = "header-left">
            <img src = "images/logo.png" alt="NDGD"/>
          </div>
        </Link>
        
        <div className = "header-right">
          <div className = "header-right-items">
            {/* <div>공지사항</div> */}
            <Link to = "/community">
              <div>커뮤니티</div>
            </Link>
            <Link to = "/review">
              <div>사용 후기</div>
            </Link>
            {localStorage.length
            ?
            <button onClick = {handleLogout}>
              로그아웃
            </button>
            :
            <Link to="/login">
              <div>로그인/회원가입</div>
            </Link>
            }
          </div>
        </div>
      </HeaderStyled>
    );
}