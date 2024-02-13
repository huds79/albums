import { User, Album, State, Actions } from '../Types';

const initialState: State = {
    users: [],
    photos: [],
};

const reducer = (state = initialState, action: { type: Actions; payload: User[] | Album[] | number }) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload,
            };
        case 'ADD_ALBUMS':
            return {
                ...state,
                users: state.users.map((user) => {
                    if (Array.isArray(action.payload) && action.payload.length > 0 && 'userId' in action.payload[0] && user.id === action.payload[0].userId) {
                        return {
                            ...user,
                            albums: action.payload,
                        };
                    }
                    return user;
                }),
            };
        case 'SET_PHOTOS':
            return {
                ...state,
                photos: action.payload,
            };
        case 'DELETE_ALBUM':
            return {
                ...state,
                users: state.users.map((user) => {
                    return {
                        ...user,
                        albums: user.albums ? user.albums.filter((album) => album.id !== action.payload) : [],
                    };
                }),
            };
        default:
            return state;
    }
};

export default reducer;