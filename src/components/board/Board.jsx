import React, { useState, useEffect } from "react";
import * as L from "../../style/LayoutStyle";
import * as S from "./style/Board.style";
import * as B from "../button/Button.style";
import DocsList from "./DocsList";
import BoardWithTime from "./BoardWithTime";
import Pagination from "./Pagination";

const Board = ({ pass, type, onAdd, onDelete }) => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const [selectTrack, setSelectTrack] = useState({
    value: "all",
    label: "전체트랙",
  });

  const offset = (page - 1) * limit;

  const postsData = (posts) => {
    let filteredPosts = [];
    if (posts && posts.length > 0) {
      switch (selectTrack.value) {
        case "all":
          filteredPosts = posts[0];
          break;
        case "pm":
          filteredPosts = posts[1];
          break;
        case "fe":
          filteredPosts = posts[2];
          break;
        case "be":
          filteredPosts = posts[3];
          break;
        default:
          filteredPosts = [];
      }
    }
    let result = filteredPosts.slice(offset, offset + limit);

    return { filteredPosts: result, filteredPostsLength: filteredPosts.length };
  };

  const { filteredPosts, filteredPostsLength } = postsData(pass);
  const handleSelectTrackChange = (e) => {
    if (e) {
      setSelectTrack(e);
      setPage(1);
    } else {
      setSelectTrack("");
    }
  };

  const tracks = [
    { value: "all", label: "전체트랙" },
    { value: "pm", label: "기획 · 디자인" },
    { value: "fe", label: "프론트엔드" },
    { value: "be", label: "백엔드" },
  ];

  const [checkedItems, setCheckedItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  const handleDeleteButtonClick = () => {
    if (checkedItems.length === 0) {
      alert("선택된 지원자가 없습니다.");
    } else {
      if (
        window.confirm("선택한 지원자를 합격자 테이블에서 삭제하시겠습니까?")
      ) {
        onDelete(checkedItems);
        setCheckedItems([]);
        alert("선택한 지원자가 합격자 테이블에서 삭제되었습니다.");
      }
    }
  };

  const handleFirstAddButtonClick = () => {
    if (checkedItems.length === 0) {
      alert("선택된 지원자가 없습니다.");
    } else {
      if (
        window.confirm("선택한 지원자를 서류 합격자 테이블에 추가하시겠습니까?")
      ) {
        onAdd(checkedItems);
        setCheckedItems([]);
        alert(
          "선택한 지원자가 서류 합격자 테이블에 추가되었습니다. \n합격자 테이블은 [신규모집관리 - 서류 합격자 선정] 탭에서 확인 가능합니다. "
        );
      }
    }
  };

  const handleAddButtonClick = () => {
    if (checkedItems.length === 0) {
      alert("선택된 지원자가 없습니다.");
    } else {
      if (
        window.confirm("선택한 지원자를 최종합격자 테이블에 추가하시겠습니까?")
      ) {
        onAdd(checkedItems);
        setCheckedItems([]);
        alert(
          "선택한 지원자가 최종 합격자 테이블에 추가되었습니다. \n합격자 테이블은 [신규모집관리 - 최종 합격자 선정] 탭에서 확인 가능합니다. "
        );
      }
    }
  };

  const handleRestoreButtonClick = () => {
    if (checkedItems.length === 0) {
      alert("선택된 지원자가 없습니다.");
    } else {
      if (window.confirm("선택한 지원자를 복구하시겠습니까?")) {
        onDelete(checkedItems);
        setCheckedItems([]);
        alert("선택한 지원자가 복구되었습니다.");
      }
    }
  };

  return (
    <S.BoardContainer>
      <S.Wrapper>
        <L.SubTitle>지원 서류</L.SubTitle>
        <S.StyledSelect
          options={tracks}
          onChange={handleSelectTrackChange}
          defaultValue={tracks[0]}
          styles={S.customStyles}
          isSearchable={false}
        ></S.StyledSelect>
      </S.Wrapper>
      {type === "type3" && (
        <BoardWithTime
          list={filteredPosts}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      {(type === "type1" || type === "type2" || type === "type4") && (
        <DocsList
          list={filteredPosts}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />
      )}
      {!showPopup && (
        <Pagination
          limit={limit}
          page={page}
          totalPosts={filteredPostsLength}
          setPage={setPage}
        />
      )}
      {type === "type1" && (
        <B.ButtonContainer>
          <B.ButtonSet>
            <B.Button color="#8fe088" onClick={handleFirstAddButtonClick}>
              <B.ButtonText>합격자 테이블에 추가 +</B.ButtonText>
            </B.Button>
            <B.Button color="#e08888" onClick={handleDeleteButtonClick}>
              <B.ButtonText>삭제</B.ButtonText>
            </B.Button>
          </B.ButtonSet>
        </B.ButtonContainer>
      )}
      {type === "type2" && (
        <B.ButtonContainer>
          <B.ButtonSet>
            <B.Button color="#e08888" onClick={handleDeleteButtonClick}>
              <B.ButtonText>삭제</B.ButtonText>
            </B.Button>
          </B.ButtonSet>
        </B.ButtonContainer>
      )}
      {type === "type3" && !showPopup && (
        <B.ButtonContainer>
          <B.ButtonSet>
            <B.Button color="#8fe088" onClick={handleAddButtonClick}>
              <B.ButtonText>최종합격자 테이블에 추가 +</B.ButtonText>
            </B.Button>
            <B.Button color="#e08888" onClick={handleDeleteButtonClick}>
              <B.ButtonText>삭제</B.ButtonText>
            </B.Button>
          </B.ButtonSet>
        </B.ButtonContainer>
      )}
      {type === "type4" && (
        <B.ButtonContainer>
          <B.ButtonSet>
            <B.Button color="#e08888" onClick={handleRestoreButtonClick}>
              <B.ButtonText>복구</B.ButtonText>
            </B.Button>
          </B.ButtonSet>
        </B.ButtonContainer>
      )}
    </S.BoardContainer>
  );
};

export default Board;
