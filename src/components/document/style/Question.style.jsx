import styled from "styled-components";

export const Text = styled.div`
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
  width: auto;
`;

export const Textarea = styled.div`
  font-size: 14px;
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 8px;
  min-height: 100px;
  height: fit-content;
  resize: vertical;
  line-height: 1.5rem;
  margin-top: 5px;
`;

export const QuestionLength = styled.span`
  margin-top: 5px;
  color: #eb9537;
`;
