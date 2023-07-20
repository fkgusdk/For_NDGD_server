import styled from "styled-components";

export const CommunityStyled = styled.div `
    
    .ci-txt {
        width: 280px;
    }

    .community-btn {
        position: absolute;
        top: 17%;
        right: 21%;
        font-size: 17px;
        padding: 8px 27px;
        background: #ff8700;
        color: white;
        border-radius: 13px;
    }

    .community-img {
        width: 140px;
        height: 140px;
        background: #e9e9e9;
    }

    .community-items {
        display: flex;
        padding: 25px 30px;
        border-bottom: 1px solid #BDBDBD;
        height: 240px;
        box-sizing: border-box;

        span {
            padding-right: 10px;
        }
    }

    .community-wrapper {
        display: grid;
        place-content: center;
        margin: 20px 0px;
        padding: 0px 320px;
        grid-template-columns: 1fr 1fr;
    }

    .ci-contents {
        font-size: 18px;
        color: gray;
        height: 130px;
        display: flex;
        align-items: center;
    }

    .ci-title {
        font-size: 22px;
    }

    .review-percent {
        width: 140px;
        height: 140px;
        background: #ff8700;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        border-radius: 50%;
    }
`