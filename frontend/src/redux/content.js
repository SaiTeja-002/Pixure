import { ADD_CONTENT, FETCH_CONTENT, REMOVE_CONTENT } from "../constants";

export default (content = [], action) => {
    switch (action.type) {
        case FETCH_CONTENT:
            return action.payload

        case ADD_CONTENT:
            return [...content, action.payload];

        case REMOVE_CONTENT:
            return content.filter(item => item !== action.payload);

        default:
            return content;
    }
}