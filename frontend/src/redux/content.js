import { ADD_CONTENT, FETCH_CONTENT, REMOVE_CONTENT } from "../constants";

export default (state = { content: [] }, action) => {
    switch (action.type) {
        case FETCH_CONTENT:
            return {
                ...state,
                content: action.payload
            };

        case ADD_CONTENT:
            return {
                ...state,
                content: [...state.content, action.payload]
            };

        case REMOVE_CONTENT:
            const updatedContent = state.content.filter(item => item !== action.payload);
            return {
                ...state,
                content: updatedContent
            };

        default:
            return state;
    }
}