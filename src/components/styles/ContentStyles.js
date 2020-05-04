import styled from 'styled-components';

const ContentStyles = styled.div`
  width: 100%;
  padding-left: var(--gap);
  padding-right: var(--gap);
  ${props => props.grow ? 'flex-grow: 1' : ''}
`;

export default ContentStyles;
