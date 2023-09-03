import { List, ListItem } from "framework7-react";

import BoardData from './../data/boards.json';

const Boards = () => {
    return (
        <List className='boards' sortable mediaList>
            {
                BoardData.map((n: BoardMetadata, i) => {
                    return (
                        <ListItem
                            key={i}
                            noChevron
                            link={`/board/${n.id}`}
                            title={n.title}
                            after="17:50"
                            text={n.description} >
                            <div className="media" slot='media' style={{
                                backgroundImage: `url(${n.splash})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                borderRadius: '8px',
                                width: "80px",
                                height: "80px"
                            }} />
                        </ListItem>
                    )
                })
            }
        </List>
    )
}

export default Boards;