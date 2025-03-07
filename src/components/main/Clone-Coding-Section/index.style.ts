import styled from "styled-components";

export const S = {
  PageContainer: styled.div`
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    margin-left: 80px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
  `,

  SectionContainer: styled.div`
    height: 30vh;
    width: 74%;
    background-color: #fff;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  `,

  SectionTitle: styled.h2`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    position: sticky;
  `,

  BadgeWrapper: styled.div`
    margin-top: 0.5rem;
    display: flex;
    gap: 0.5rem;
    position: sticky;
  `,

  CloneCodingItemBox: styled.div`
    overflow-y: auto;
    max-height: 24vh;
  `,

  Badge: styled.span`
    background-color: #e7e7e7;
    color: #333;
    padding: 0.3rem 0.6rem;
    border-radius: 20px;
    font-size: 0.85rem;
  `,

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
