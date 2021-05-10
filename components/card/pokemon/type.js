import React from 'react';
import {
    FlatList,
    StyleSheet,
    View
} from 'react-native';
import PropTypes from 'prop-types';
import {
    Surface
} from 'react-native-paper';

import ChipType from '../../chip/type';

const typeKeyExtrator = ({ type }) => type.name;

const CardPokemonType = ({
    types
}) => (
    <Surface style={styles.container}>
        <FlatList
            data={types}
            horizontal={true}
            keyExtractor={typeKeyExtrator}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <ChipType type={item.type.name}/>
                </View>
            )}/>
    </Surface>
);

const styles = StyleSheet.create({
    container: {
        elevation: 2,
        borderRadius: 5,
        paddingVertical: 15,
        display: `flex`,
        alignItems: `center`
    },
    itemContainer: {
        marginHorizontal: 5
    }
});

CardPokemonType.propTypes = {
    types: PropTypes.array
};

export default CardPokemonType;
