import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  padding: 10px;
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
