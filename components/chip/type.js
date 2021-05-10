import React from 'react';
import {
    Chip
} from 'react-native-paper';
import PropTypes from 'prop-types';
import {
    StyleSheet
} from 'react-native';

const getStylesFromObject = (stylesObject, type) => stylesObject[type] || stylesObject.default;

const ChipType = ({
    type,
    stylesMap
}) => (
    <Chip
        style={getStylesFromObject(stylesMap, type)}>
        { type }
    </Chip>
);

ChipType.propTypes = {
    type: PropTypes.string,
    stylesMap: PropTypes.object
};

ChipType.defaultProps = {
    stylesMap: StyleSheet.create({
        default: {
            backgroundColor: `red`
        },
        normal: {
            backgroundColor: `#A8A878`
        },
        fire: {
            backgroundColor: `#F08030`
        },
        water: {
            backgroundColor: `#6890F0`
        },
        grass: {
            backgroundColor: `#78C850`
        },
        electric: {
            backgroundColor: `#F8D030`
        },
        ice: {
            backgroundColor: `#98D8D8`
        },
        fighting: {
            backgroundColor: `#C03028`
        },
        poison: {
            backgroundColor: `#A040A0`
        },
        ground: {
            backgroundColor: `#E0C068`
        },
        flying: {
            backgroundColor: `#A890F0`
        },
        psychic: {
            backgroundColor: `#F85888`
        },
        bug: {
            backgroundColor: `#A8B820`
        },
        rock: {
            backgroundColor: `#B8A038`
        },
        ghost: {
            backgroundColor: `#705898`
        },
        dark: {
            backgroundColor: `#705848`
        },
        dragon: {
            backgroundColor: `#7038F8`
        },
        steel: {
            backgroundColor: `#B8B8D0`
        },
        fairy: {
            backgroundColor: `#F0B6BC`
        }
    })
};

export default ChipType;
