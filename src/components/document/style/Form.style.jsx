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
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
`;

export const Text = styled.div`
  font-size: 17px;
  font-weight: 700;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;

export const Div = styled.div`
  font-size: 17px;
  margin-left: 20px;
`;
