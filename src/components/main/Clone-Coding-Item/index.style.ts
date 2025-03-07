import styled from "styled-components";

export const S = {
  CardGrid: styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1rem;
  `,

  Card: styled.div`
    position: relative;
    background-color: #fafafa;
    border-radius: 8px;
    padding: 1rem;
    min-height: 80px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  StarIcon: styled.img`
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    width: 40px;
    height: 40px;
  `,

  CardTitle: styled.div`
    font-size: 0.95rem;
    font-weight: 600;
  `,

  CardSubtitle: styled.div`
    font-size: 0.8rem;
    color: #666;
  `,
};
