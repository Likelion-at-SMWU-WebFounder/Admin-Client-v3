import styled from "styled-components";

export const Text = styled.div`
  width: 1000px;
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  line-height: 25px;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;

export const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

export const Textarea = styled.div`
  font-size: 14px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 10px;
  width: 1000px;
  min-height: 100px;
  height: fit-content;
  resize: vertical;
  line-height: 1.5rem;
  margin-top: 5px;
`;

export const QuestionLength = styled.div`
  margin-top: 5px;
  color: #eb9537;
`;
