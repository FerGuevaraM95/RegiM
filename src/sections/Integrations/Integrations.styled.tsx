import styled from 'styled-components';


export const Section = styled.section`
    display: flex;
    flex-direction: column;
    margin: 48px 0 72px;
    text-align: center;

    @media (min-width: 1440px) {
       flex-direction: row;
       margin: 70px 90px 220px;
    }
`;

export const Title = styled.h2`
    font-size: 36px;
    font-weight: 600;
    line-height: 48px;
    color: #111827;

     @media (min-width: 768px) {
        font-size: 48px;
        line-height: 60px;
    }

    @media (min-width: 1440px) {
        text-align: left;
        font-size: 56px;
        line-height: 72px;
    }
`;

export const Subtitle = styled.p`
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 24px;
    color: #374151;

    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 28px;
    }
`;

export const Logos = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;

    @media (min-width: 768px) {
        gap: 80px;
        margin: 0 80px;
    }
`;