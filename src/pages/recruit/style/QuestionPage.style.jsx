import styled from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin: 10px 0px;
  margin-bottom: 40px;
`;

export const QuestionInputContainer = styled.div`
  display: flex;
  align-items: top;
  gap: 10px;
  margin-right: 5px;
`;

export const QuestionInput = styled.textarea`
  padding: 10px 10px;
  width: 100%;
  min-height: 70px;

  border-radius: 10px;
  border-bottom: 0.5px solid grey;
  background-color: rgba(217, 217, 217, 0.3);

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

export const TrackTitle = styled.div`
  font-size: 21px;
  font-weight: 700;
`;
