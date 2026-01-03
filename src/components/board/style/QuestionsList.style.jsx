import styled from "styled-components";

export const Table = styled.div`
  display: table;
  border-collapse: collapse;
  width: 100%;
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
  vertical-align: middle;
  padding: 0px 5px;

  text-align: ${({ align }) => align || "left"};
  white-space: nowrap;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -1.263px;
`;

export const Cell = styled.div`
  display: table-cell;
  vertical-align: middle;
  font-size: 18px;
  min-width: ${({ width }) => width};
  text-align: ${({ align }) => align || "left"};
  padding: 3px 5px;
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
