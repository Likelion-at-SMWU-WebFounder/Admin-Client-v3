import styled from "styled-components";

export const PartText = styled.div`
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 10px;
`;

export const Imgg = styled.img`
  height: 80px;
  margin-left: 10px;
  transform-origin: left top;

  &:hover {
    transform: scale(3.5);
  }
`;

export const ProgrammersFormContainer = styled.div`
  display: flex;
  padding: 6px 0px;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding: 6px 0px;
  border-bottom: solid 1px #adadad;
`;

export const Row = styled.div`
  display: flex;
`;

export const Text = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;

export const Div = styled.div`
  font-size: 15px;
  margin-left: 15px;
`;

export const DownloadButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff; /* 원하는 색상으로 변경 */
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;