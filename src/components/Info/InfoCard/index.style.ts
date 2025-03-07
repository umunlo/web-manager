import styled from "styled-components";

const Container = styled.div`
  width: 320px;
  min-height: 200px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
`;

const Title = styled.h2`
  margin: 0 0 8px 0;
  font-size: 1.2rem;
`;

const Description = styled.p`
  margin: 0 0 16px 0;
  color: #555;
`;

export const S = {
  Container,
  Title,
  Description,
};
