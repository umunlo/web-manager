import styled from "styled-components";

const DetailBox = styled.div`
  margin-top: 16px;
  width: 75%;
  height: 200px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  font-size: 1.2rem;

  div {
    margin-top: 2%;
    margin-left: 4%;
    font-size: 1rem;
    white-space: "pre-wrap";
  }
`;

const TextArea = styled.textarea`
  width: 94%;
  min-height: 100px;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

export const S = {
  DetailBox,
  TextArea,
};
