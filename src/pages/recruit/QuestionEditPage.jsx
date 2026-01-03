import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../../style/LayoutStyle";
import * as B from "../../components/button/Button.style";
import * as S from "./style/QuestionPage.style";
import Navbar from "../../components/common/Navbar";
import apiModule from "../../api/apiModule";

const QuestionEditPage = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const data = await apiModule.fetchQuestions();
      setQuestions(data);
      setLoading(false);
    } catch (err) {
      console.error("error:", err);
    }
  };

  const editQuestions = async (questionsData) => {
    try {
      await apiModule.updateQuestions(questionsData);
      alert("수정된 문항이 정상적으로 반영되었습니다.");
      navigate("/document");
    } catch (error) {
      console.error("error:", error);
    }
  };

  const handleQuestionChange = (sectionIndex, index, event) => {
    const newQuestions = [...questions];
    newQuestions[sectionIndex][index].content = event.target.value;
    setQuestions(newQuestions);
  };

  if (loading || questions === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <L.Layout>
        <Navbar />
        <S.VLine />
        <L.Container>
          <L.Title>서류 문항 수정</L.Title>
          <L.About>지원 서류 문항을 수정합니다.</L.About>

          <>
            <S.TrackTitle>공통 문항</S.TrackTitle>
            <S.QuestionContainer>
              {questions[0]?.map((question, index) => (
                <S.QuestionInputContainer key={index}>
                  <S.QuestionInput
                    placeholder="문항 질문을 작성해주세요 ..."
                    value={question.content}
                    onChange={(event) => handleQuestionChange(0, index, event)}
                  />
                </S.QuestionInputContainer>
              ))}
            </S.QuestionContainer>
          </>

          <>
            <S.TrackTitle>기획·디자인 트랙 문항</S.TrackTitle>
            <S.QuestionContainer>
              {questions[1]?.map((question, index) => (
                <S.QuestionInputContainer key={index}>
                  <S.QuestionInput
                    placeholder="문항 질문을 작성해주세요 ..."
                    value={question.content}
                    onChange={(event) => handleQuestionChange(1, index, event)}
                  />
                </S.QuestionInputContainer>
              ))}
            </S.QuestionContainer>
          </>

          <>
            <S.TrackTitle>프론트엔드 트랙 문항</S.TrackTitle>
            <S.QuestionContainer>
              {questions[2]?.map((question, index) => (
                <S.QuestionInputContainer key={index}>
                  <S.QuestionInput
                    placeholder="문항 질문을 작성해주세요 ..."
                    value={question.content}
                    onChange={(event) => handleQuestionChange(2, index, event)}
                  />
                </S.QuestionInputContainer>
              ))}
            </S.QuestionContainer>
          </>

          <>
            <S.TrackTitle>백엔드 트랙 문항</S.TrackTitle>
            <S.QuestionContainer>
              {questions[3]?.map((question, index) => (
                <S.QuestionInputContainer key={index}>
                  <S.QuestionInput
                    placeholder="문항 질문을 작성해주세요 ..."
                    value={question.content}
                    onChange={(event) => handleQuestionChange(3, index, event)}
                  />
                </S.QuestionInputContainer>
              ))}
            </S.QuestionContainer>
          </>

          <S.Div></S.Div>
          <S.Div></S.Div>
          <S.Div></S.Div>
          <S.Div></S.Div>
          <B.ButtonContainer>
            <B.ButtonSet>
              <B.Button
                color="#8fe088"
                onClick={() => {
                  editQuestions(questions.flat());
                }}
              >
                <B.ButtonText>변경 사항 저장</B.ButtonText>
              </B.Button>
            </B.ButtonSet>
          </B.ButtonContainer>
        </L.Container>
      </L.Layout>
    </>
  );
};

export default QuestionEditPage;
