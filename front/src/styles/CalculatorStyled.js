import styled from "styled-components";

export const CalculatorStyled = styled.div `    
    .calc-wrapper {
        width: 55%;
        border: 2px solid rgb(187, 187, 187);
        border-radius: 83px;
        margin: 30px auto 60px;        
        padding: 20px 60px;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
    }
    
    .calc-txt {
        text-align: center;
        font-size: 20px;
        padding: 20px 0;
    }

    .calc-contents {
        display: flex;
        gap: 30px;
        flex-direction: column;
        padding: 20px 0;
    }

    .calc-items {
        display: flex;
        gap: 15px;
        font-size: 21px;
        align-items: center;

        .calc-items-name {
            width: 155px;
        }

        input, select {
            font-size: 18px;
            padding: 15px;
            width: 100%;
            border: none;
            background: rgb(248, 248, 248);
            box-shadow: rgba(0, 0, 0, 0.21) 0px 4px 10px;
            border-radius: 80px;
        }
    }

    .calc-gap {
        text-align: center;
        font-size: 40px;
        padding: 20px 0;
    }


    .calc-btn {
        border: 2px solid rgb(255 135 0);
        border-radius: 80px;
        width: 40%;
        padding: 28px 20px;
        margin: 25px auto;
        text-align: center;
        position: relative;
        font-size: 20px;
        color: rgb(225 135 0);
        font-weight: bold;
        box-shadow: 5px 5px 10px #808080b5;
    }

    .calc-result {
        border: 2px solid rgb(187, 187, 187);
        border-radius: 80px;
        width: 40%;
        padding: 35px 20px;
        margin: 25px auto auto;
        text-align: center;
        position: relative;

        .calc-rebtn {
            font-size: 16px;
            padding: 8px 30px;
            border-radius: 25px;
            color: #ff8700;
            font-weight: bold;
            border: 1px solid #ff8700;
        }

        h2 {
            font-weight: bolder;
            position: absolute;
            top: -10px;
            left: 27%;
            font-size: 20px;
            background: white;
            padding: 0 10px;
            margin: 0;
            width: 140px;
        }

        .calc-price {
            font-size: 40px;
            padding: 15px;
        }
        .calc-unit {
            font-size: 20px;
        }
    }

    .calc-button-ways {
        font-size: 18px;
        background: #ff8700;
        color: white;
        padding: 15px;
        border-radius: 15px;
        box-shadow: 2px 2px 2px 2px #0000003b;
    }

    .calc-button-apply {
        font-size: 18px;
        border: 1px solid #ff8700 ;
        color: #ff8700;
        padding: 15px;
        border-radius: 15px;
        box-shadow: 2px 2px 2px 2px #0000003b;
    }

    .calc-buttons {
        width: 55%;
        margin: auto;
        display: flex;
        gap: 100px;
        justify-content: center;
        margin-bottom: 60px;
    }
`