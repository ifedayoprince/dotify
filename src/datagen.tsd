import { writeFileSync } from 'fs';
import { faker } from '@faker-js/faker';
import { BoardMetadata, Card } from './models/Board';
import User from './models/User';

const NUMBER_OF_USERS = 10;
const NUMBER_OF_BOARDS = 12;
const MAX_NUMBER_OF_CARDS_PER_BOARD = 30;
const MAX_LENGTH_OF_WORDS_IN_A_CARD = 40;

let boardsMetadata: BoardMetadata[] = [];
let boards: any = {};
let users: User[] = [];
let cardDeck: [Card[]?] = [];


startGenerator();

function startGenerator() {
    generateBoardsMetadata();
    generateUsers();
    generateCards();
    generateAndFillBoardsWithCards();
}

function pickRandom(array: any[]): any {
    return array[Math.floor(Math.random() * array.length)];
}
function generateUsers() {
    for (let i = 0; i < NUMBER_OF_USERS; i++) {
        const [firstName, lastName] = [faker.person.firstName(), faker.person.lastName()];

        users.push({
            id: faker.string.uuid(),
            middleName: faker.person.middleName(),
            displayName: faker.internet.displayName({ firstName, lastName }),
            firstName, lastName
        })
    }

    writeFileSync("./src/data/users.json", JSON.stringify(users))
}

function generateText(modifier = 1) {
    const MAX_WORDS_IN_TEXT = Math.round(Math.floor(Math.random() * MAX_LENGTH_OF_WORDS_IN_A_CARD) * modifier);

    return faker.word.words(MAX_WORDS_IN_TEXT);
}
function generateCards() {
    for (let i = 0; i < NUMBER_OF_BOARDS; i++) {
        const NUMBER_OF_CARDS_IN_BOARD = Math.max(10, Math.floor(Math.random() * MAX_NUMBER_OF_CARDS_PER_BOARD));
        let cards: Card[] = [];

        for (let j = 0; j < NUMBER_OF_CARDS_IN_BOARD; j++) {
            cards.push({
                id: faker.string.uuid(),
                editedBy: (pickRandom(users) as User).id,
                content: generateText(1.3)
            })
        }
        cardDeck.push(cards);
    }
}
function generateAndFillBoardsWithCards() {
    for (let i = 0; i < NUMBER_OF_BOARDS; i++) {
        var boardId = faker.string.uuid()

        boards[boardId] = {
            boardId,
            createdBy: (pickRandom(users) as User).id,
            cards: (pickRandom(cardDeck) as Card[])
        };
    }

    writeFileSync("./src/data/boards.json", JSON.stringify(boardsMetadata))
}

function generateBoardsMetadata() {
    for (let i = 0; i < NUMBER_OF_BOARDS; i++) {
        boardsMetadata.push({
            id: faker.string.uuid(),
            title: generateText(0.5),
            description: generateText(1.5),
            created: faker.date.past().toDateString(),
            updated: faker.date.anytime().toDateString(),
            splash: "/images/img20.jpg"
        });
    }

    writeFileSync("./src/data/boards_metadata.json", JSON.stringify(boardsMetadata))
}
