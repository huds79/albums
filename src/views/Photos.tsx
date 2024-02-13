import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Dimensions, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Photo, reducerState } from '../Types';
import useGetPhotos from '../hooks/useGetPhotos';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { PhotosRouteProp } from '../Types';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const size = width / 3;

const Photos = () => {
    const route = useRoute<PhotosRouteProp>();
    const photos = useSelector((state: reducerState) => state.store.photos);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [isAllPhotos, setIsAllPhotos] = useState(false);
    const getPhotos = useGetPhotos(dispatch);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isAllPhotos ? 'All Photos' : `${route.params?.album.title}`,
            headerRight: () => (
                <TouchableOpacity onPress={() => setIsAllPhotos(!isAllPhotos)}>
                    <Ionicons
                        name={isAllPhotos ? 'star' : 'star-outline'}
                        size={22}
                        color="blue"
                        style={{ marginRight: 15 }}
                    />
                </TouchableOpacity>
            ),
        });
    }, [navigation, isAllPhotos]);

    useEffect(() => {
        if (photos.length === 0) {
            getPhotos();
        }
    }, [photos.length, getPhotos]);

    return (
        <View>
            <FlatList
                data={isAllPhotos ? photos : photos.filter((photo: Photo) => photo.albumId === route.params?.album.id)}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.thumbnailUrl }} style={styles.image} />
                )}
                numColumns={3}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: size,
        height: size,
    }
});

export default Photos;