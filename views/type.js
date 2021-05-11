import React, {
    useEffect,
    useState
} from 'react';
import {
    FlatList,
    View,
    StyleSheet
} from 'react-native';
import {
    Picker
} from '@react-native-picker/picker';
import PropTypes from 'prop-types';
import {
    Surface
} from 'react-native-paper';

import {
    typeApi
} from '../lib/api';

import CardPokemonBase from '../components/card/pokemon/base';
import LoaderBase from '../components/loader/base';

const pokemonsListKeyExtrator = (item, index) => index;

const TypeView = ({
    types,
    initialNumToRender,
    navigation,
    numColumns,
    endReachThreshold,
    _pokemons
}) => {
    const [type, setType] = useState(`fire`);
    const [state, setState] = useState({
        isRequesting: true
    });
    const [pokemonsByType, setPokemonsByType] = useState([]);

    useEffect(() => {
        let updateState = true;
        setState({
            ...state,
            isRequesting: true
        });
        typeApi.getByType(type).then(pokemons => {
            if (updateState) {
                setPokemonsByType(pokemons);
            }
        }).catch((e) => {
            console.error(e);
            return [];
        }).finally(() => {
            setState({
                ...state,
                isRequesting: false
            });
        });

        return () => updateState = false;
    }, [type]);

    const handleCardPokemonClick = (id) => {
        navigation.navigate(`Detail`, {
            id
        });
    };

    return (
        <View style={styles.container}>
            { state.isRequesting && (<LoaderBase />) }
            <Surface style={styles.pickerContainer}>
                <Picker
                    testID={`picker-type`}
                    selectedValue={type}
                    onValueChange={setType}>
                    { types.map(type => (
                        <Picker.Item
                            key={type}
                            label={type.toUpperCase()}
                            value={type}/>
                    )) }
                </Picker>
            </Surface>
            <Surface style={styles.flatlistContainer}>
                <FlatList
                    testID={`flatlist-pokemons`}
                    data={_pokemons || pokemonsByType}
                    keyExtractor={pokemonsListKeyExtrator}
                    renderItem={({ item, index }) => <CardPokemonBase testID={`pokemon-row-${index}`} {...item} handleClick={handleCardPokemonClick}/>}
                    numColumns={2}
                    onEndReachedThreshold={endReachThreshold}
                    initialNumToRender={initialNumToRender}/>
            </Surface>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: `flex`,
        flexDirection: `column`,
        paddingHorizontal: 8,
        paddingTop: 20
    },
    pickerContainer: {
        flex: 2,
        elevation: 3,
        borderRadius: 5,
        display: `flex`,
        justifyContent: `center`,
        marginBottom: 6
    },
    flatlistContainer: {
        flex: 10,
        elevation: 2
    }
});

TypeView.propTypes = {
    types: PropTypes.array,
    initialNumToRender: PropTypes.number,
    numColumns: PropTypes.number,
    endReachThreshold: PropTypes.number,
    _pokemons: PropTypes.array
};

TypeView.defaultProps = {
    initialNumToRender: 10,
    numColumns: 2,
    endReachThreshold: 0.5,
    types: [
        'normal',
        'fire',
        'water',
        'grass',
        'electric',
        'ice',
        'fighting',
        'poison',
        'ground',
        'flying',
        'psychic',
        'bug',
        'rock',
        'ghost',
        'dark',
        'dragon',
        'steel',
        'fairy'
    ]
};

export default TypeView;
