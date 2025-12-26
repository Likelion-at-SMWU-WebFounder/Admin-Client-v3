import styled from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  align-items: top;
  gap: 15px;
`;

export const QuestionDiv = styled.div`
  padding: 10px 10px;
  min-width: 800px;
  height: fit-content;
  min-height: 100px;
  margin-bottom: 3px;

  border-radius: 10px;
  border: 1px solid grey;
  background: rgba(217, 217, 217, 0);

  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.263px;
`;

export const QuestionInput = styled.textarea`
  padding: 10px 10px;
  width: 800px;
  min-width: 800px;
  min-height: 100px;
  margin-bottom: 3px;

  border-radius: 10px;
  border: 1px solid grey;
  background: rgba(217, 217, 217, 0);

  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.263px;
  resize: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Div = styled.div`
  height: 30px;
`;

export const VLine = styled.div`
  border-left: 1px solid white;
  min-height: 100vh;
`;
