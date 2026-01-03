import styled from "styled-components";

export const StyledInput = styled.input`
  position: relative;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  top: 4px;
  width: 20px;
  height: 20px;
  border: 1.5px solid gainsboro;
  border-radius: 5px;
  background-color: white;
  transition: background-color 0.3s, border-color 0.3s;

  &:checked {
    border-color: transparent;
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #eb9537;

    &::before {
      content: "✔";
      font-size: 14px;
      color: black;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const Table = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
`;

export const ContentWrap = styled.div`
  display: table-row-group;
`;

export const ContentTitle = styled.div`
  background-color: rgba(217, 217, 217, 0.3);
  display: table-row;
  height: 35px;
  border-bottom: 0.5px solid grey;
  border-top: 0.5px solid grey;
`;

export const TableCell = styled.div`
  display: table-cell;
  white-space: nowrap;
  vertical-align: middle;

  font-size: 20px;
  font-weight: 600;
  letter-spacing: -1.263px;
`;

export const Cell = styled.div`
  display: table-cell;
  vertical-align: middle;
  white-space: nowrap;
  font-size: 20px;
`;

export const Button = styled.button`
  display: table-cell;
  border-radius: 15px;
  border: none;
  background: #d9d9d9;

  padding-left: 10px;
  padding-right: 10px;
`;

export const ButtonText = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.01px;
`;

export const Content = styled.div`
  display: table-row;
  align-items: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.263px;
  border-bottom: 0.5px solid grey;
`;

export const ImageWrap = styled.div``;
