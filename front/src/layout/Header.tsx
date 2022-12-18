import { FaUserAlt } from "react-icons/fa";

import Menu from "@/component/Menu";
import TabList from "@/component/TabList";

import { HeaderContainer, LogoContainer, Logo } from "@/style/layout/headerStyle";

const Header = () => {
    return (
        <HeaderContainer>
            <Menu />
            <LogoContainer>
                <Logo>BlueNote</Logo>
                <FaUserAlt />
            </LogoContainer>
            <TabList />
        </HeaderContainer>
    );
};

export default Header;
