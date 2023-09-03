import { UserRef } from "./User";

export interface BoardMetadata {
    id: BoardRef,
    title: string,
    description: string,
    splash: string,
    created?: DateRef,
    updated?: DateRef,
}

export interface Board {
    id: BoardRef,
    createdBy: UserRef,
    cards: Card[]
}

export interface Card {
    id: CardRef,
    editedBy: UserRef,
    content: string
}


type DateRef = string;
type BoardRef = string;
type CardRef = string;
