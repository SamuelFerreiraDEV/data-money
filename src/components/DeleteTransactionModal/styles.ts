import { darken, transparentize } from "polished";
import styled from "styled-components";

interface OptionButtonProps {
  bgColor: 'green' | 'red',
}

const colors = {
  green: '#33cc95',
  red: '#E52E4D'
}

export const OptionButton = styled.button<OptionButtonProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${({ bgColor }) => transparentize(0.2, colors[bgColor])};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.2, '#d7d7d7')};
    filter: brightness(1.1);
  }

  span {
    padding: 1rem;
    font-size: 1rem;
    color: #FFF;
    font-weight: 600;
  }
`