import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
  padding: 20px;
  color: ${({ theme }) => theme.colors.textParagraph};
`;

export default Wrapper;
