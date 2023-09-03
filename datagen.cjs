System.register("models/User", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("models/Board", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("datagen", ["fs", "@faker-js/faker"], function (exports_3, context_3) {
    "use strict";
    var fs_1, faker_1, NUMBER_OF_USERS, NUMBER_OF_BOARDS, MAX_NUMBER_OF_CARDS_PER_BOARD, MAX_LENGTH_OF_WORDS_IN_A_CARD, boardsMetadata, boards, users, cardDeck;
    var __moduleName = context_3 && context_3.id;
    function startGenerator() {
        generateBoardsMetadata();
        generateUsers();
        generateCards();
        generateAndFillBoardsWithCards();
    }
    function pickRandom(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    function generateUsers() {
        for (var i = 0; i < NUMBER_OF_USERS; i++) {
            var _a = [faker_1.faker.person.firstName(), faker_1.faker.person.lastName()], firstName = _a[0], lastName = _a[1];
            users.push({
                id: faker_1.faker.string.uuid(),
                middleName: faker_1.faker.person.middleName(),
                displayName: faker_1.faker.internet.displayName({ firstName: firstName, lastName: lastName }),
                firstName: firstName,
                lastName: lastName
            });
        }
        fs_1.writeFileSync("./src/data/users.json", JSON.stringify(users));
    }
    function generateText(modifier) {
        if (modifier === void 0) { modifier = 1; }
        var MAX_WORDS_IN_TEXT = Math.round(Math.floor(Math.random() * MAX_LENGTH_OF_WORDS_IN_A_CARD) * modifier);
        return faker_1.faker.word.words(MAX_WORDS_IN_TEXT);
    }
    function generateCards() {
        for (var i = 0; i < NUMBER_OF_BOARDS; i++) {
            var NUMBER_OF_CARDS_IN_BOARD = Math.max(10, Math.floor(Math.random() * MAX_NUMBER_OF_CARDS_PER_BOARD));
            var cards = [];
            for (var j = 0; j < NUMBER_OF_CARDS_IN_BOARD; j++) {
                cards.push({
                    id: faker_1.faker.string.uuid(),
                    editedBy: pickRandom(users).id,
                    content: generateText(1.3)
                });
            }
            cardDeck.push(cards);
        }
    }
    function generateAndFillBoardsWithCards() {
        for (var i = 0; i < NUMBER_OF_BOARDS; i++) {
            var boardId = faker_1.faker.string.uuid();
            boards[boardId] = {
                boardId: boardId,
                createdBy: pickRandom(users).id,
                cards: pickRandom(cardDeck)
            };
        }
        fs_1.writeFileSync("./src/data/boards.json", JSON.stringify(boardsMetadata));
    }
    function generateBoardsMetadata() {
        for (var i = 0; i < NUMBER_OF_BOARDS; i++) {
            boardsMetadata.push({
                id: faker_1.faker.string.uuid(),
                title: generateText(0.5),
                description: generateText(1.5),
                created: faker_1.faker.date.past().toDateString(),
                updated: faker_1.faker.date.anytime().toDateString(),
                splash: "/images/img20.jpg"
            });
        }
        fs_1.writeFileSync("./src/data/boards_metadata.json", JSON.stringify(boardsMetadata));
    }
    return {
        setters: [
            function (fs_1_1) {
                fs_1 = fs_1_1;
            },
            function (faker_1_1) {
                faker_1 = faker_1_1;
            }
        ],
        execute: function () {
            NUMBER_OF_USERS = 10;
            NUMBER_OF_BOARDS = 12;
            MAX_NUMBER_OF_CARDS_PER_BOARD = 30;
            MAX_LENGTH_OF_WORDS_IN_A_CARD = 40;
            boardsMetadata = [];
            boards = {};
            users = [];
            cardDeck = [];
            startGenerator();
        }
    };
});
