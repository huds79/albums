import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { User } from '../Types';
import AlbumElement from './AlbumElement';

const UserElement = ({ user }: { user: User; }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{user.name}</Text>
            {user.albums && user.albums.map((album) => <AlbumElement key={album.id} album={album} />)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 4,
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: 2,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 5,
        backgroundColor: 'cornflowerblue',
        marginBottom: 1,
    }
});

export default UserElement;
