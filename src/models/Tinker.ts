import { createStore } from "redux";

type TinkerSettings = {
    enableSeachbarInBoardsPage: boolean
}

const TinkerDefaults : TinkerSettings = {
    enableSeachbarInBoardsPage: false
}

function tinkerReducer(state = {}, action: any) {
    
}

// let Tinker = createStore(tinkerReducer);
export default TinkerDefaults;