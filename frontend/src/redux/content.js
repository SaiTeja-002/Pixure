import { ADD_CONTENT, EDIT_POST, FETCH_CONTENT, REMOVE_CONTENT } from "../constants";

export default (content = [], action) => {
    switch (action.type) {
        case FETCH_CONTENT:
            return action.payload

        case ADD_CONTENT:
            return [...content, action.payload];

        case REMOVE_CONTENT:
            return content.filter((item, index) => content.length - 1 - index !== action.payload.index);

        case EDIT_POST:
            return content.map((item, index) => {
                if (content.length-1-index === action.payload.index) {
                    return { ...item, title: action.payload.title };
                }
                return item;
            });

        default:
            return content;
    }
}