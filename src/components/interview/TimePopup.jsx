import React, { useState, useEffect } from "react";
import * as S from "./TimePopup.style";
import * as B from "../button/Button.style";
import apiModule from "../../api/apiModule";
import splitDatetime from "../../utils/splitDatetime";

const TimePopup = ({ track, aname, joinerId, onClose }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedInterview, setSelectedInterview] = useState();

  const handleSave = async () => {
    try {
      await apiModule.saveInterviewTime({
        interviewDate: selectedDate,
        interviewTime: selectedTime,
        joinerId: joinerId,
      });
      onClose();
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchInterviewTime = async () => {
      try {
        if (joinerId) {
          const data = await apiModule.fetchInterviewTime(joinerId);
          setSelectedInterview(splitDatetime(data));
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchInterviewTime();
  }, [joinerId]);

  return (
    <S.PopupOverlay>
      <S.PopupContent>
        <S.CancelButton onClick={onClose}>x</S.CancelButton>
        <S.HopeTimeContainer>
          <div>
            <S.Bold>{track}</S.Bold> 트랙 서류합격자 <S.Bold>{aname}</S.Bold>
            님의
          </div>
          {/* <UlDiv>
            {Object.keys(selectedInterview).map((key, idx) => (
              <Ul key={idx}>
                <TimeDiv> {selectedInterview[key]}</TimeDiv>
              </Ul>
            ))}
          </UlDiv> */}
          <h2 style={{ fontSize: "30px", margin: "30px auto" }}>
            면접 확정 시간을 입력해주세요
          </h2>
          <S.Select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            <option value="">날짜 선택</option>
            {selectedInterview &&
              Object.keys(selectedInterview).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
          </S.Select>
          <S.Select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="">시간 선택</option>
            {selectedInterview &&
              selectedDate &&
              selectedInterview[selectedDate].map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
          </S.Select>
        </S.HopeTimeContainer>
        <B.Button color="#15cf2a" onClick={handleSave}>
          저장
        </B.Button>
      </S.PopupContent>
    </S.PopupOverlay>
  );
};

export default TimePopup;
