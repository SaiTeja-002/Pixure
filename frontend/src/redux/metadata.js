import { UPDATE_METADATA } from '../constants.js';

export default (metadata = { name: '', photo: '', bio: ' ' }, action) => {
    switch (action.type) {
        case UPDATE_METADATA:
            return {
                ...metadata,
                ...action.payload
            };
        default:
            return metadata;
    }
}