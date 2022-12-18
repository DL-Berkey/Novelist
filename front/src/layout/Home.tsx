import { HomeContainer } from "@/style/layout/homeStyle";

interface Props {
    children: React.ReactNode;
}

const Home = ({ children }: Props) => {
    return <HomeContainer>{children}</HomeContainer>;
};

export default Home;
