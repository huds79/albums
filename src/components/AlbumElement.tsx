import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Album, StackParamList } from '../Types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

const AlbumElement = ({ album }: { album: Album; }) => {
    const navigation = useNavigation<StackNavigationProp<StackParamList>>();
    const dispatch = useDispatch();

    const handleDelete = (albumId: number) => {
        dispatch({ type: 'DELETE_ALBUM', payload: albumId });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.nameContainer} onPress={() => navigation.navigate('Photos', { album: album })}>
                <Text style={styles.name}>{album.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(album.id)}>
                <AntDesign name="minuscircleo" size={15} color="blue" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 2,
        padding: 2,
        paddingRight: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 0.5,
        backgroundColor: 'lightblue',
    },
    nameContainer: {
        width: '94%',
    },
    name: {
        fontSize: 16,
        paddingLeft: 5,
        color: 'black',
    }
});

export default AlbumElement;