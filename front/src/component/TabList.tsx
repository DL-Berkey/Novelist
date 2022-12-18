import { TabContainer, Tab, TabTitle, TabCloseButton } from "@/style/component/tabListStyle";

const TabList = () => {
    return (
        <TabContainer>
            <Tab active={true}>
                <TabTitle>대따대따 긴글!!?!!!!!인뎅!어떡하지!?</TabTitle>
                <TabCloseButton>X</TabCloseButton>
            </Tab>
            <Tab active={false}>
                <TabTitle>대따대따 긴글!!?!!!!!인뎅!어떡하지!?</TabTitle>
                <TabCloseButton>X</TabCloseButton>
            </Tab>
            <Tab active={false}>
                <TabTitle>대따대따 긴글!!?!!!!!인뎅!어떡하지!?</TabTitle>
                <TabCloseButton>X</TabCloseButton>
            </Tab>
            <Tab active={false}>
                <TabTitle>대따대따 긴글!!?!!!!!인뎅!어떡하지!?</TabTitle>
                <TabCloseButton>X</TabCloseButton>
            </Tab>
            <Tab active={false}>
                <TabTitle>대따대따 긴글!!?!!!!!인뎅!어떡하지!?</TabTitle>
                <TabCloseButton>X</TabCloseButton>
            </Tab>
        </TabContainer>
    );
};

export default TabList;
