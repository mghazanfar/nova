import styled from 'styled-components';

export const FiftyBetween = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  margin-top: 28px;
`;

export const Flex = styled.div`
  display: flex;
`;
export const Flex1 = styled.div`
  flex: 1;
`;

export const SpaceBetween = styled(Flex)`
  justify-content: space-between;
`;

export const Center = styled(Flex)`
  justify-content: center;
  align-items: center;
`;
