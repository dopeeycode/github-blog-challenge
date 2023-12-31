import { styled } from 'styled-components'

export const ExternalLinkContainer = styled.a`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors['brand-blue']};
  font-size: ${({ theme }) => theme.textSizes['components-link']};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-weight: 700;
  gap: 0.5rem;
  border-bottom: 1px solid transparent;
  transition: 0.4s;
  height: 19px;
  line-height: 19px;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors['brand-blue']};
  }
`
