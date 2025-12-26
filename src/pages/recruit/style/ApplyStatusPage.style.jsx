import styled from "styled-components";

export const StateContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const StateBox = styled.div`
  position: relative;
  width: 180px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 15px;
  background: rgba(217, 217, 217, 0.6);
  margin-right: 1.5vw;
`;

export const StateItem = styled.div`
  position: absolute;
  left: 15px;
  top: 17px;
  color: #111;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.263px;
`;

export const StateNum = styled.div`
  position: absolute;
  right: 15px;
  bottom: 17px;
  color: #111;
  text-align: right;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -2.273px;
`;

export const VLine = styled.div`
  border-left: 1px solid white;
  min-height: 100vh;
`;
