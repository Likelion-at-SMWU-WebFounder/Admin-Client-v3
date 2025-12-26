import styled from "styled-components";

export const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .logo {
    width: 311px;
    margin-bottom: 90px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: space-between;
  margin-bottom: 45px;
`;

export const Div = styled.div`
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.515px;
`;

export const StyledInput = styled.input`
  width: 306px;
  height: 45px;
  border-radius: 15px;
  border: 1px solid #fefefe;
  background: rgba(254, 254, 254, 0);
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  /* letter-spacing: -1.212px; */
  outline: none;
  padding-left: 10px;
  &:focus {
    outline: none;
    border: 1px solid #eb9537;
  }
`;

export const LoginButton = styled.button`
  margin-top: 70px;
  width: 190px;
  height: 57.881px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #eb9537 5.52%, #ecc08f 96.15%);
  border-radius: 10px;
  border: none;
  color: #000;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.263px;
`;
