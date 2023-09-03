import { Actions, ActionsButton, ActionsGroup, ActionsLabel, Fab, FabButton, FabButtons, Icon, Link, List, ListItem, NavLeft, NavRight, NavTitle, NavTitleLarge, Navbar, Page, Searchbar, f7 } from "framework7-react";

import BoardContent from '../data/board_content.json';
import Users from '../data/users.json';
import { useRef, useState, useEffect } from "react";

interface BoardProps {
    id: string
}

const Board: React.FunctionComponent<BoardProps> = ({ id }) => {
    const actionsToPopover = useRef(null);
    useEffect(() => {
        return () => {
            if (actionsToPopover.current) {
                (actionsToPopover.current as any).destroy();
            }
        };
    }, []);


    return (
        <Page>
            <Navbar large sliding={false} >
                <NavTitle sliding>Board {id}</NavTitle>
                <NavRight>
                    <Link
                        searchbarEnable=".board-searchbar"
                        iconMaterial="search"
                    />
                    <Link
                        iconMaterial="share"
                    />
                </NavRight>
                <NavTitleLarge>Boards {id}</NavTitleLarge>
                <Searchbar
                    className="board-searchbar"
                    searchContainer=".board"
                    searchIn=".item-text,.item-title"
                    expandable
                />
            </Navbar>

            <List sortable sortableOpposite>
                {
                    ((BoardContent as any)[id] as Board).cards.map((card: Card, i) => {
                        return (
                            <ListItem
                                key={i}
                                after="17:00"
                                title="Card"
                                text={card.content}
                            />
                        )
                    })
                }
            </List>

            <Fab position="right-bottom" slot="fixed">
                <Icon ios="f7:plus" md="material:add" />
                <Icon ios="f7:xmark" md="material:close" />
                <FabButtons position="top">
                    <FabButton label="Summarize"><Icon ios="f7:xmark" md="material:book" /></FabButton>
                    <FabButton label="Sort Card"><Link sortableToggle=".sortable" iconMaterial="sort" /></FabButton>
                    <FabButton label="Add Card"><Icon ios="f7:xmark" md="material:add_circle" /></FabButton>
                </FabButtons>
            </Fab>
            <Actions
                id="actions-groups">
                <ActionsGroup>
                    <ActionsLabel>Actions</ActionsLabel>
                    <ActionsButton>Sort Cards</ActionsButton>
                    <ActionsButton>Summarize</ActionsButton>
                    <ActionsButton color="red">Cancel</ActionsButton>
                </ActionsGroup>
            </Actions>

        </Page>
    )
}

export default Board;