import styled from "styled-components";

export const WritingPostStyled = styled.div `
    .post-wrapper {
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        padding: 40px 0px;
        gap: 18px;
    }

    .post-contents {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .post-items {
        display: flex;
        gap: 15px;
        align-items: center;

        span {
            width: 50px;
        }

        input, textarea{
            width: 600px;
            font-size: 16px;
            padding: 10px;
            box-sizing: border-box;
            border: none;
            background: rgb(245, 245, 245);
            font-family: 'Pretendard-Thin';
        }
    }

    .pi-contents {
        height: 400px;
    }

    .post-btn {
        background: orange;
        width: 200px;
        height: 40px;
        font-size: 16px;
        color: white;
        border-radius: 5px;
    }
`