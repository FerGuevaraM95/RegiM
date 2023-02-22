import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 4px 12px 24px rgba(28, 44, 64, 0.08);
    border-radius: 100px;   

    @media (min-width: 768px) {
        width: 80px;
    height: 80px;
    }
`;
