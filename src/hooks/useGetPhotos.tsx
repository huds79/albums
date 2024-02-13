import Axios from 'axios';

const useGetPhotos = (dispatch: any) => {

    const getPhotos = () => {
        Axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(({ data }) => {
                dispatch({ type: 'SET_PHOTOS', payload: data });
            });
    };
    return getPhotos;
};

export default useGetPhotos;
