import React, {
    useEffect,
    useState
} from 'react';
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native';
import PropTypes from 'prop-types';

import {
    pokemonApi
} from '../lib/api';

import CardPokemonBase from '../components/card/pokemon/base';
import LoaderBase from '../components/loader/base';

const pokemonsListKeyExtrator = (item, index) => index;

const HomeView = ({
    initialNumToRender,
    navigation,
    numColumns,
    endReachThreshold,
    _pokemons
}) => {
    const [state, setState] = useState({
        isRequesting: true,
        page: 0
    });
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = () => {
            pokemonApi.getAllByPagination(state.page)
                .then(pokemonsArray => [...pokemons, ...pokemonsArray])
                .then(pokemonsResult => {
                    setPokemons(pokemonsResult)
                })
                .catch(error => console.error(error))
                .finally(() => {
                    setState({
                        ...state,
                        isRequesting: false
                    });
                });
        }

        fetchPokemons();
    }, [state.page]);

    const handleFlatListEnd = () => {
        setState({
            ...state,
            page: state.page + 1
        });
    };

    const handleCardPokemonClick = (id) => {
        navigation.navigate(`Detail`, {
            id
        });
    };

    return (
        <View style={styles.container}>
            { state.isRequesting && (<LoaderBase />) }
            <FlatList
                testID={`flatlist-pokemons`}
                data={_pokemons || pokemons}
                keyExtractor={pokemonsListKeyExtrator}
                renderItem={({ item, index }) => <CardPokemonBase testID={`pokemon-row-${index}`} {...item} handleClick={handleCardPokemonClick}/>}
                numColumns={numColumns}
                onEndReached={handleFlatListEnd}
                onEndReachedThreshold={endReachThreshold}
                initialNumToRender={initialNumToRender}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

HomeView.propTypes = {
    initialNumToRender: PropTypes.number,
    numColumns: PropTypes.number,
    endReachThreshold: PropTypes.number,
    _pokemons: PropTypes.array
};

HomeView.defaultProps = {
    initialNumToRender: 10,
    numColumns: 2,
    endReachThreshold: 0.5
};

export default HomeView;
