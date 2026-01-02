import styled from "styled-components";

export const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  background: ${({ color }) => color};

  .logo {
    width: 200px;
    margin: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 380px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;

export const Div = styled.div`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.515px;
`;

export const StyledInput = styled.input`
  width: 270px;
  height: 40px;
  border-radius: 10px;
  border: 0.5px solid grey;
  background: rgba(254, 254, 254, 0);
  color: #fff;
  font-size: 18px;
  line-height: normal;
  outline: none;
  padding-left: 10px;
  &:focus {
    outline: none;
    border: 1px solid #eb9537;
  }
`;

export const LoginButton = styled.button`
  margin-top: 30px;
  width: 120px;
  height: 45px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #eb9537 5.52%, #ecc08f 96.15%);
  border-radius: 10px;
  border: none;
  text-align: center;

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.263px;
`;

export const WarnText = styled.div`
  color: white;
  font-size: 14px;
  letter-spacing: -0.7px;
  margin-top: 40px;
`;
