import { RouteProp } from '@react-navigation/native';

export type StackParamList = {
    Photos: { album: Album } | undefined;
};

export type PhotosRouteProp = RouteProp<StackParamList, 'Photos'>;

export type State = {
    users: User[];
    photos: Photo[];
};

export type reducerState = {
    store: State;
};

export type User = {
    id: number;
    name: string;
    username: string;
    albums: Album[];
};

export type Album = {
    id: number;
    title: string;
    userId: number;
};

export type Photo = {
    id: number;
    albumId: number;
    thumbnailUrl: string;
};

export type Actions = 'SET_USERS' | 'SET_PHOTOS' | 'ADD_ALBUMS' | 'DELETE_ALBUM';

