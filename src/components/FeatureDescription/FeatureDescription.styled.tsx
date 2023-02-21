import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 8px;
    margin: 24px 0;
`;

export const Title = styled.h3`
    margin: 8px 0;
    text-align: left;
    color: #111827;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
`;

export const Description = styled.p`
    text-align: left;
    color: #374151;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
`;

export const IconContainer = styled.div`
    box-sizing: border-box;
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6px;
    padding: 12px;
    border: 8px solid ${props => props.color === 'dark' ? '#E0F2FE' : '#CFFAFE'};
    border-radius: 50%;
`;
