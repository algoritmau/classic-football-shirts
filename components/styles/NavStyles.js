import styled from "styled-components"

const NavStyles = styled.nav`
  width: 100%;
  max-width: 96rem;
  height: 5.6rem;
  margin: 0 auto;
  padding: 0;
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;

  a {
    padding: 0.8rem 1.2rem;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: var(--colorPrimaryGreen, green);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover,
    &:focus {
      color: var(--colorPrimaryGreenMedium, green);
      text-underline-offset: 0.8rem;
    }
  }
`

export default NavStyles
