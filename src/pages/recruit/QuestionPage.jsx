import React, { useState, useEffect } from "react";
import apiModule from "../../api/apiModule";
import { useNavigate } from "react-router-dom";
import * as L from "../../style/LayoutStyle";
import * as S from "./style/QuestionPage.style";
import * as B from "../../components/button/Button.style";
import Navbar from "../../components/common/Navbar";

const QuestionPage = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [inputContents, setInputContents] = useState({
    common: "",
    pm: "",
    fe: "",
    be: "",
  });
  const [updateFlag, setUpdateFlag] = useState(false);

  const fetchDataAndUpdateQuestions = async () => {
    try {
      const data = await apiModule.fetchQuestions();
      setUpdateFlag(false);
      setQuestions(data);
    } catch (err) {
      console.error("error:", err);
    }
  };

  useEffect(() => {
    fetchDataAndUpdateQuestions();
  }, [updateFlag]);

  const handleChange = (event, track) => {
    setInputContents({
      ...inputContents,
      [track]: event.target.value,
    });
  };

  const onSubmit = (track, idx) => {
    if (window.confirm("작성한 문항을 추가하시겠습니까?")) {
      handleSubmit(track, idx);
      alert("문항이 추가되었습니다.");
    }
  };

  const handleSubmit = async (track, idx) => {
    try {
      await apiModule.postQuestions({
        year: 2026, // 매년 바꿔줘야함
        track: track,
        number: questions[idx].length + 1,
        content: inputContents[track],
        maxLength: 600,
      });
      setUpdateFlag(true);
      setInputContents({ ...inputContents, [track]: "" });
    } catch (error) {
      console.error("error", error);
    }
  };

  const onDelete = (id) => {
    if (window.confirm("문항을 삭제하시겠습니까?")) {
      handleDelete(id);
      alert("문항이 삭제되었습니다.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiModule.deleteQuestion(id);
      setUpdateFlag(true);
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <>
      <L.Layout>
        <Navbar />
        <L.Container>
          <L.Title>서류 문항 관리</L.Title>
          <L.About>지원 서류 문항을 관리합니다.</L.About>

          <L.RowDiv>
            <L.Title>공통 문항</L.Title>
          </L.RowDiv>
          <>
            <S.QuestionContainer>
              <S.QuestionInput
                type="text"
                value={inputContents.common}
                placeholder="새로운 공통 문항을 입력하세요."
                onChange={(e) => handleChange(e, "common")}
              />
              <B.Button color="#8fe088" onClick={() => onSubmit("common", 0)}>
                <B.ButtonText>저장</B.ButtonText>
              </B.Button>
            </S.QuestionContainer>
            {questions[0]?.map((data) => (
              <S.QuestionContainer key={data.id}>
                <S.QuestionDiv>{data.content}</S.QuestionDiv>
                <B.Button color="#ff6347" onClick={() => onDelete(data.id)}>
                  <B.ButtonText>삭제</B.ButtonText>
                </B.Button>
              </S.QuestionContainer>
            ))}
          </>
          <S.Div></S.Div>
          <L.RowDiv>
            <L.Title>기획 · 디자인 트랙 문항</L.Title>
          </L.RowDiv>
          <>
            <S.QuestionContainer>
              <S.QuestionInput
                type="text"
                value={inputContents.pm}
                placeholder="새로운 기획 · 디자인 문항을 입력하세요."
                onChange={(e) => handleChange(e, "pm")}
              />
              <B.Button color="#8fe088" onClick={() => onSubmit("pm", 1)}>
                {" "}
                <B.ButtonText>저장</B.ButtonText>
              </B.Button>
            </S.QuestionContainer>
            {questions[1]?.map((data) => (
              <S.QuestionContainer key={data.id}>
                <S.QuestionDiv>{data.content}</S.QuestionDiv>
                <B.Button color="#ff6347" onClick={() => onDelete(data.id)}>
                  <B.ButtonText>삭제</B.ButtonText>
                </B.Button>
              </S.QuestionContainer>
            ))}
          </>
          <S.Div></S.Div>
          <L.RowDiv>
            <L.Title>프론트엔드 트랙 문항</L.Title>
          </L.RowDiv>
          <>
            <S.QuestionContainer>
              <S.QuestionInput
                type="text"
                value={inputContents.fe}
                placeholder="새로운 프론트엔드 문항을 입력하세요."
                onChange={(e) => handleChange(e, "fe")}
              />
              <B.Button color="#8fe088" onClick={() => onSubmit("fe", 2)}>
                <B.ButtonText>저장</B.ButtonText>
              </B.Button>
            </S.QuestionContainer>
            {questions[2]?.map((data) => (
              <S.QuestionContainer key={data.id}>
                <S.QuestionDiv>{data.content}</S.QuestionDiv>
                <B.Button color="#ff6347" onClick={() => onDelete(data.id)}>
                  <B.ButtonText>삭제</B.ButtonText>
                </B.Button>
              </S.QuestionContainer>
            ))}
          </>
          <S.Div></S.Div>
          <L.RowDiv>
            <L.Title>백엔드 트랙 문항</L.Title>
          </L.RowDiv>
          <>
            <S.QuestionContainer>
              <S.QuestionInput
                type="text"
                value={inputContents.be}
                placeholder="새로운 백엔드 문항을 입력하세요."
                onChange={(e) => handleChange(e, "be")}
              />
              <B.Button color="#8fe088" onClick={() => onSubmit("be", 3)}>
                <B.ButtonText>
                  {" "}
                  <B.ButtonText>저장</B.ButtonText>
                </B.ButtonText>
              </B.Button>
            </S.QuestionContainer>
            {questions[3]?.map((data) => (
              <S.QuestionContainer key={data.id}>
                <S.QuestionDiv>{data.content}</S.QuestionDiv>
                <B.Button color="#ff6347" onClick={() => onDelete(data.id)}>
                  <B.ButtonText>삭제</B.ButtonText>
                </B.Button>
              </S.QuestionContainer>
            ))}
          </>
          <S.Div></S.Div>
          <B.Button
            color="#8891e0"
            onClick={() => {
              navigate("/editdocument");
            }}
          >
            <B.ButtonText>문항 수정하기</B.ButtonText>
          </B.Button>
        </L.Container>
      </L.Layout>
    </>
  );
};

export default QuestionPage;
