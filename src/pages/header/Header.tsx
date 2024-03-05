import { Information } from "../../components/navbar/Information";
import { NavBar } from "../../components/navbar/NavBar"
import { HeaderContainer } from "./header.styles";

export const Header = () => {
    return (
        <HeaderContainer>
          <Information />
          <NavBar />
        </HeaderContainer>
    )
};