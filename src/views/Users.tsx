import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import useGetUsers from '../hooks/useGetUsers';
import { User, reducerState } from '../Types';
import useGetAlbums from '../hooks/useGetAlbums';
import UserElement from '../components/UserElement';

const Users = () => {
    const users = useSelector((state: reducerState) => state.store.users);
    const dispatch = useDispatch();
    const getAlbum = useGetAlbums(dispatch);
    const [firsLoad, setFirstLoad] = useState(true);

    useGetUsers(dispatch);

    useEffect(() => {
        if (firsLoad && users.length > 0) {
            setFirstLoad(false);
            users.forEach((user: User) => {
                getAlbum(user.id);
            });
        }
    }, [users, firsLoad, setFirstLoad]);

    return (
        <View>
            <FlatList
                data={users}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }: { item: User }) => (
                    <UserElement
                        user={item}
                    />
                )}
            />
        </View>
    );
};

export default Users;