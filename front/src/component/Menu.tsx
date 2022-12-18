import { MenuContainer, Hr } from "@/style/component/menuStyle";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImSearch } from "react-icons/im";

const Menu = () => {
    return (
        <MenuContainer>
            <GiHamburgerMenu />
            <Hr />
            <ImSearch />
        </MenuContainer>
    );
};

export default Menu;
