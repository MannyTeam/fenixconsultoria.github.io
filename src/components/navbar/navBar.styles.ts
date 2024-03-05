import styled from "styled-components";
import { Nav, NavDropdown, Row } from "react-bootstrap";

export const InformationRow = styled(Row)`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
  }
`;

export const TitleStyled = styled.h1`
    margin: 0;
    font-size: 30px;
    font-weight: 700;
    line-height: 56px;
    color: #563167;
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: .7rem;
  i {
    color: #1977cc;
  }
  @media (max-width: 768px)
  {
    flex-direction: column;
    padding-left: 0px;
  }
  a {
    color: #444444;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-bottom: 20px;
  i {
    color: #437099;
  }
  @media (max-width: 768px)
  {
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;
    padding-right: 0px;
  }
`;

export const NavLinkStyled = styled(Nav.Link)`
  color: #2c4964;
  padding: 0.5rem 0.5rem 0 0.5rem;
  border-bottom: 2px solid #fff;
  &.active {
    color: #2c4964;
    font-weight: 700;
    background-color: #f1f7fd;
    @media (min-width: 1200px) {
      color: #1977cc;
      border-color: #1977cc;
      background-color: transparent;
    }
    
  }
`;

export const NavDropdownStyled = styled(NavDropdown)`

  .dropdown-menu.show {
    display: grid;
    a {
      &.active {
        color: #2c4964;
        font-weight: 700;
        background-color: #f1f7fd;
        @media (min-width: 1200px) {
          color: #1977cc;
          border-color: #1977cc;
        }
      }
  }
`