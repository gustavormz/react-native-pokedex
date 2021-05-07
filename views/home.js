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

import API from '../lib/api';

import CardPokemonBase from '../components/card/pokemon/base';

const pokemonsListKeyExtrator = (item, index) => index;

const HomeView = ({
    limit,
    initialNumToRender
}) => {
    const [state, setState] = useState({
        isRequesting: false,
        page: 0
    });
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            const apiResponse = await API.call(`/pokemon?offset=${state.page * limit}&limit=${limit}`);
            const newPokemons = [...pokemons, ...apiResponse.results];
            setPokemons(newPokemons);
        }

        fetchPokemons();
    }, [state.page]);

    const handleFlatListEnd = () => {
        const nextPage = state.page + 1;
        setState({
            ...state,
            page: nextPage
        });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={pokemons}
                keyExtractor={pokemonsListKeyExtrator}
                renderItem={({ item }) => <CardPokemonBase {...item}/>}
                numColumns={2}
                onEndReached={handleFlatListEnd}
                onEndReachedThreshold={0.5}
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
    limit: PropTypes.number,
    initialNumToRender: PropTypes.number
};

HomeView.defaultProps = {
    limit: 20,
    initialNumToRender: 10
};

export default HomeView;
