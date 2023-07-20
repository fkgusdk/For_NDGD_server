import styled from "styled-components";

export const LoginStyle = styled.div `
    background : #f7f7f7;
    width: 100vw;
    height: 100vh;
`

export const SnsLoginStyle = styled.div`
  display: flex;

  .sns-items{
    width: 25%;
    text-align: center;
  }

  button{
    width: 56px;
    height: 56px;
    margin: 0 auto 8px;
    color: #737373;
    border-radius: 28px;
    border: none;
    position:relative;
  }

  .sns-name{
    position: absolute;
    top: 62px;
    font-size: 13px;
    font-weight: 500;
    color: #666;
    text-align: center;
    font-family: pretendard;

    left: 0;
    width: 100%;
  }

  #login-kakao{
    background-color: #fee500;
  }

  #login-facebook{
    background-color: #156ad9;
  }

  #login-google{
    background-color: #f5f5f5;
    border: 1px solid #e1e2e3;
  }
  
  #login-apple{
    background-color: #000;
  }
`

export const ModalOverlayStyle = styled.div`
  z-index: 999;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.5);

  input:focus{
    outline-color: #36f;
  }
  .modal-wrapper::-webkit-scrollbar{
    display:none;
  }
  .modal-wrapper {
    -ms-overflow-style: none;
    background-color:white;
    width: 435px;
    height: calc(100vh - 150px);
    overflow-y: auto;
    border-radius: 5px;

    .modal-icon {
      width: 100%;
      text-align: center;

      img{
        margin: 40px auto 0;
        width: 250px;
        border-radius: 50%;
      }
  
    }
  }

  .modal-container {
    padding: 20px;

    .modal-title{
        margin-bottom: 25px;      
        text-align: center;
        font-size: 26px;
        line-height: 1.5;

        #subTxt{
            font-size: 16px;
            margin-top: 16px;
            color: #666666;
        }
    }

    .modal-items{ 
      padding-bottom: ${(props) => props.paddingBottom}px;
      margin-top: 15px;

      .error-message{
        color: #fe415c;
        font-size: 12px;
        margin-top: 6px;
      }

      label{
        font-size: 14px;
        color: #757676;
      }

      input,
      select{
        margin-top: 11px;
        height: 50px;
        width: 100%;
        box-sizing: border-box;
        padding: 1px 15px;
        border-radius: 5px;
        border: 1px solid #e1e2e3;
      }
      
    }

    #emailBtn{
      width: 100%;
      height: 54px;
      border-radius: 27px;
      border: none;
      background-color: #36f;
      font-family: 'Pretendard';
      color: white;
      font-size: 16px;
      margin-top: 14px;
    }

    #SignupBtn {
        width: 100%;
        height: 54px;
        border-radius: 27px;
        border: none;
        background-color: rgb(204 204 204);
        font-family: Pretendard;
        color: white;
        font-size: 16px;
        margin-top: 14px;
    }

    .agree-text{
      margin-top: 26px;
      text-align: center;
      font-size: 12px;
      line-height: 18px;
      color: #999;
      margin-top: 40px;
    }

    #modalOr{
      font-size: 14px;
      color: #767676;
      margin: 13px 0;
      text-align: center;
    }

    #modalNext{
      font-size: 14px;
      color: #767676;
      margin-bottom:17px;
      text-align: center;
    }
  }

  .signup-title{
    padding: 16px 24px;
    text-align: center;
  }

  #pwTxt{
    font-size: 12px;
    color: #767676;
    margin-top: 6px;
  }

  .number-certif{
    display: flex;
    justify-content: space-between;

    button{
      width: 117px;
      padding: 16px 15px 14px;
      border: none;
      border-radius: 5px;
      background-color: #f2f4f7;
      color: #ccc;
      height: 50px;
      margin-top: 11px;
    }

    input{
      width: 233px !important;
    }
  }

  .agree-items{
    font-size: 15px;
    height: auto;
    padding-bottom: 14px;
    border-bottom: 1px solid #ececec;
    margin-bottom: 15px;

    input{
      margin-right: 10px;
    }
  }

  .agree-subitems{
    font-size: 15px;
    color:#939393;
    margin-bottom: 7px;

    input{
      margin-right: 10px;
    }
  }

  #signinBtn{
    width: 100%;
    height: 54px;
    border-radius: 27px;
    border: none;
    font-family: 'Pretendard';
    font-size: 16px;
    margin-top: 14px;
    background-color: #36f;
    color: white;
  }
  
  #signupBtn{
    width: 100%;
    height: 54px;
    border-radius: 27px;
    border: none;
    font-family: 'Pretendard';
    font-size: 16px;
    margin-top: 14px;
    background-color: #f2f4f7;
    color: #cacaca;

    position: sticky;
    bottom: 20px;
    left: 0;
    right: 0;
    z-index: 3;
  }

  .password-modal-wrapper{
    background-color: white;
    width: 400px;
    overflow-y: auto;
    border-radius: 5px;
  }

  #passwordChange {
    font-size: 14px;
    color: #36f;
    width: 100%;
    height: 54px;
    cursor: pointer;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
  }
`