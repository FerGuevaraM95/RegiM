import styled from 'styled-components';

export const Section = styled.section`
    position: relative;

    &::after {
        content: '';
        position: absolute;
        z-index: -100;
        width: 400px;
        height: 400px;
        right: -80px;
        top: 340px;
        border-radius: 50%;
        background: #CFFAFE;

        @media (min-width: 768px) {
            width: 700px;
            height: 700px;
            top: 290px;
            right: -130px;
        }

        @media (min-width: 1440px) {
            right: -200px;
            top: -260px;
        }
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1440px) {
        flex-direction: row;
        margin: 0 112px;
    }
`;

export const Title = styled.h1`
    margin-top: 48px;
    margin-bottom: 16px;
    font-size: 36px;
    font-weight: 600;
    line-height: 48px;
    color: #111827;

    @media (min-width: 768px) {
        font-size: 64px;
        line-height: 80px;
    }
`;

export const SubTitle = styled.p`
    margin-bottom: 40px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #374151;

    @media (min-width: 768px) {
        max-width: 75%;
        font-size: 18px;
        line-height: 28px;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 60px 0;

    @media (min-width: 768px) {
        margin: 80px 0;
    }
`;

export const Image = styled.img`
    max-width: 100%
`;