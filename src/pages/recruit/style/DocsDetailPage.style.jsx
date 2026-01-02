import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const ContetnContainer = styled.div`
  min-width: ${({ width }) => width};
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-top: 10px;
  img {
    width: 150px;
  }
  background-color: black;
`;

export const Divider = styled.div`
  width: 2px;
  background-color: #c1c1c1;
  margin-right: 20px;
`;
