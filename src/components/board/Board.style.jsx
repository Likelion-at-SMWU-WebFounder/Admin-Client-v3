import styled from "styled-components";
import Select from "react-select";

export const BoardContainer = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledSelect = styled(Select)`
  width: auto;
`;

export const customStyles = {
  control: (provided) => ({
    ...provided,
    fontSize: "13px",
    outline: "none",
    backgroundColor: "black",
    borderColor: "white",
    borderRadius: "10px",
    boxShadow: "none",
    "&:hover": {
      borderColor: "white",
    },
  }),

  option: (provided, state) => ({
    ...provided,
    outline: "none",
    fontWeight: state.isSelected ? "bold" : "normal",
    color: "black",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#d2d2d2",
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "white",
    backgroundColor: "black",
  }),
};
