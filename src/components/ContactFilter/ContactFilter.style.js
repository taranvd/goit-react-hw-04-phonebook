import styled from 'styled-components';

export const FilterContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
