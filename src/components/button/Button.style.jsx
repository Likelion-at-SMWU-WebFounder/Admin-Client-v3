import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: relative;
`;

export const ButtonSet = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  margin-bottom: 80px;
  gap: 10px;

  @media (max-width: 500px) {
    position: absolute;
    right: 0;
    bottom: auto;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: center;
  background: ${({ color }) => color};
  color: ${({ fontColor }) => fontColor};
  width: fit-content;
`;

export const ButtonText = styled.span`
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -1.414px;
`;
