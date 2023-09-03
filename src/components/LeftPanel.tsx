import { Block, Button, Card, CardContent, CardHeader, Icon, List, ListItem, NavTitle, Navbar, Panel, SkeletonAvatar } from "framework7-react";

const LeftPanel = () => {
    return (
        <Panel left>
            <Navbar transparent>
                {/* <NavTitle>Teem</NavTitle> */}
            </Navbar>
            <Card>
                <CardContent>
                    <div style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <SkeletonAvatar
                            tag={"ds"}
                            size={70}
                            color={""}
                            showIcon={true}
                            iconColor="" borderRadius="50%" effect="pulse" />
                        <CardHeader>Barry Allen</CardHeader>
                        <Button outline round small style={{ width: "max-content" }}>Edit</Button>
                    </div>
                </CardContent>
            </Card>

            <List menuList outlineIos strongIos>
                <ListItem
                    link
                    title="Home" >
                    <Icon md="material:home" ios="f7:house_fill" slot="media" />
                </ListItem>
                <ListItem
                    link
                    title="Profile" >
                    <Icon md="material:person" ios="f7:person_fill" slot="media" />
                </ListItem>
                <ListItem
                    link
                    title="Settings" >
                    <Icon md="material:settings" ios="f7:gear_alt_fill" slot="media" />
                </ListItem>
            </List>
        </Panel>
    )
}

export default LeftPanel;