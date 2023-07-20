import styled from "styled-components";

export const PageTitleStyled = styled.div `
    width: 896px;
    margin: auto;
    height: 93px;
    border-bottom: 2px solid #FF8700;
    margin-top: 15px;
    
    .pt-title {
        font-size: 18px;
        color: #ff8700;
    }

    .pt-txt {
        font-size: 24px;
    }
`

export const HeaderStyled = styled.div `
    width: 80%;
    margin: 15px auto 10px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: center;

    .header-left img {
        border-radius: 50%;
        height: 55px;
    }

    .header-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5px;
    }

    .header-right-items {
        display: flex;
        gap: 40px;
        font-size: 18px;

        button {
            font-size : 18px;
        }
    }
`