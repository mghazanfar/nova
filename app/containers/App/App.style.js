import styled from 'styled-components';

const AppWrapper = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ fullScreen }) => (fullScreen ? 'white' : '#fafbfd')};
`;

export { AppWrapper };
