import styled from "styled-components";

export const MainStyled = styled.div `    
    .main-banner {
        margin: 20px 0;

        .swiper-slide {
            height: 300px;
        }

        img {
            width: 100%;
            height: 100%;
            border-radius : 10px;
        }

        .swiper-button-prev {
            left: 17%;
            color: white;
        }

        .swiper-button-next {
            right: 17%;
            color: white;
        }
    }

    .main-services{
        width: 80%;
        text-align-last: center;
        margin: 3% auto 7%;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .main-service-btn{
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        justify-content: center;
    }

    .main-service-items {
        font-size: 20px;
        background: #F8F8F8;
        width: 270px;
        height: 180px;
        text-align: center;
        padding: 20px;
        box-sizing: border-box;
        box-shadow: 10px 10px 20px #00000030;
        display: flex;
        flex-direction: column;
        align-items: center;
        place-content: center;
        gap: 15px;
        font-family: "Pretendard";
        border-radius: 10px;

        img {
            width: 80px;
        }
    }
`