import { useEffect } from 'react';
import Axios from 'axios';

const useGetUsers = (dispatch: any) => {
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({ data }) => {
                dispatch({ type: 'SET_USERS', payload: data });
            });
    }, []);
};

export default useGetUsers;



