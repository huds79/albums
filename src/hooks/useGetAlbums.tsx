import Axios from 'axios';

const useGetAlbums = (dispatch: any) => {
    const getAlbum = (userId: number) => {
        Axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(({ data }) => {
                dispatch({ type: 'ADD_ALBUMS', payload: data });
            });

    }
    return getAlbum;
};

export default useGetAlbums;
