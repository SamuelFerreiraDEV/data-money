import styled from "styled-components";

interface ContainerProps {
  bgColor: 'green' | 'red',
}

const colors = {
  green: '#33cc95',
  red: '#E52E4D'
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: ${({bgColor}) => colors[bgColor]};
      color: #fff;
    }
  }
`;