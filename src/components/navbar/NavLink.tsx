import { NavLink } from 'react-router-dom';
import { NavLinkStyled } from './navBar.styles';

type NavLinkProps = {
    text?: string;
    route?: string;
    closeNavbar: () => void;
}
export const NavLinkComponent = ({ text, route, closeNavbar }:NavLinkProps) => {
    return (
        <NavLinkStyled
          as={NavLink}
          to={`/${route ?? ''}`}
          href='#'
          onClick={closeNavbar}
        >
            {text}
        </NavLinkStyled>
    )
};