import { FETCH_MAP } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_MAP:
            return [action.payload.data, ];
		default:
			return [];
    }
}