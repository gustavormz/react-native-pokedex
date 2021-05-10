import React from 'react';
import {
    Surface
} from 'react-native-paper';
import {
    StyleSheet,
    FlatList,
    View
} from 'react-native';
import PropTypes from 'prop-types';

import CardPokemonImage from './image';

const keyExtractor = item => item.id;

const CardPokemonEvolution = ({
    evolutions
}) => (
    <Surface style={styles.container}>
        <FlatList
            testID={`flatlist-evolution`}
            keyExtractor={keyExtractor}
            data={evolutions}
            horizontal={true}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <CardPokemonImage avatarSize={75} imageUri={item.imageUri}/>
                </View>
            )}/>
    </Surface>
);

const styles = StyleSheet.create({
    container: {
        display: `flex`,
        alignItems: `center`,
        paddingVertical: 10,
        elevation: 2,
        borderRadius: 5
    },
    itemContainer: {
        marginHorizontal: 10
    }
});

CardPokemonEvolution.propTypes = {
    evolutions: PropTypes.array
};

export default CardPokemonEvolution;
