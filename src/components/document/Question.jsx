import React, { useEffect, useState } from "react";
import apiModule from "../../api/apiModule";
import * as S from "./Question.style";
import * as L from "../../style/LayoutStyle";

const Question = ({ documentData }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const data = await apiModule.fetchQuestions();
        setQuestions(data);

        /* 트랙 문항 임시 제거
          (2025 기준 트랙 문항 X) 
        if (documentData.studentInfo) {
          switch (documentData.studentInfo.track) {
            case "pm":
              setTrackQuestions(data[1]?.map((item) => item.content) || []);
              break;
            case "fe":
              setTrackQuestions(data[2]?.map((item) => item.content) || []);
              break;
            case "be":
              setTrackQuestions(data[3]?.map((item) => item.content) || []);
              break;
            default:
              setTrackQuestions(data[0]?.map((item) => item.content) || []);
          }
        } 
        */

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchDocuments();
  }, [documentData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <>
        {questions[0]?.map((question, index) => (
          <S.QuestionContainer key={index}>
            <S.Text fontSize="18px">
              {`${index + 1}: `}
              &nbsp;
              {question.content}
              <S.QuestionLength>
                {documentData && documentData.answerList
                  ? documentData.answerList[index].length
                  : ""}
                자
              </S.QuestionLength>
            </S.Text>
            <S.Textarea>
              {documentData && documentData.answerList
                ? documentData.answerList[index]
                : ""}
            </S.Textarea>
          </S.QuestionContainer>
        ))}

        {/* <Hr marginTop="30px" />

        {trackQuestions?.map((question, index) => (
          <QuestionContainer key={index}>
            <Text fontSize="18px" marginTop="30px" marginLeft="30px">
              {`${index + 1}: `}
              &nbsp;
              {question}
            </Text>
            <Textarea fontSize="14px" marginLeft="30px">
              {documentData.answerList &&
                documentData.answerList[index + questions[0].length]}
            </Textarea>
          </QuestionContainer>
        ))}
        */}
      </>

      <S.QuestionContainer>
        <S.Text fontSize="18px" marginTop="15px">
          면접 가능 시간
        </S.Text>
        {documentData &&
          documentData.interviewTime &&
          documentData.interviewTime.map((item, i) => (
            <S.Text key={i} fontSize="14px" marginTop="5px">
              - {item}
            </S.Text>
          ))}
      </S.QuestionContainer>
    </>
  );
};

export default Question;
