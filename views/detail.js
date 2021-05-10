import React, {
    useState,
    useEffect
} from 'react';
import {
    ScrollView,
    StyleSheet,
    View
} from 'react-native';

import {
    pokemonApi,
    speciesApi
} from '../lib/api';
import {
    formatPokemonItem,
    compose
} from '../lib/utils';

import CardPokemonImage from '../components/card/pokemon/image';
import CardPokemonGeneral from '../components/card/pokemon/general';
import CardPokemonStats from '../components/card/pokemon/stats';
import CardPokemonEvolution from '../components/card/pokemon/evolution';
import CardPokemonTypes from '../components/card/pokemon/type';
import CardPokemonAbilities from '../components/card/pokemon/abilities';
import CardPokemonMoves from '../components/card/pokemon/moves';

const getStatName = ({ ability }) => ability.name;

const getMainAbility = arrayStats => arrayStats[0];

const getMainAbilityName = compose(
    getStatName,
    getMainAbility
);

const formatChainEvolution = evolution => {
    let currentEvolution = evolution;
    const arrayEvolutionChain = [formatPokemonItem(evolution.species)];

    while (currentEvolution.evolves_to && currentEvolution.evolves_to.length > 0) {
        currentEvolution = currentEvolution.evolves_to[0];
        arrayEvolutionChain.push(formatPokemonItem(currentEvolution.species));
    }

    return arrayEvolutionChain;
};

const formatAbility = ({
    name,
    effect_entries
}) => ({
    name,
    effect: effect_entries[0].short_effect
});

const formatMove = ({
    name,
    effect_entries
}) => ({
    name,
    effect: effect_entries[0].short_effect
});

const DetailView = ({
    navigation,
    route
}) => {
    const { id } = route.params;
    const [pokemon, setPokemon] = useState({
        sprites: {},
        stats: [],
        types: [],
        mainAbility: ``
    });
    const [pokemonExtra, setPokemonExtra] = useState({
        evolutions: [],
        moves: [],
        abilities: [],
    });
    
    useEffect(() => {
        let isSetInformation = true;

        Promise.all([
            pokemonApi.getById(id),
            speciesApi.getById(id)
        ]).then(([
            pokemon,
            species
        ]) => {
            if (isSetInformation) {
                setPokemon({
                    ...pokemon,
                    mainAbility: getMainAbilityName(pokemon.abilities)
                });
            }
            return Promise.all([
                fetch(species.evolution_chain.url)
                    .then(evolutionChainResponse => evolutionChainResponse.json())
                    .then(({
                        chain
                    }) => formatChainEvolution(chain)),
                Promise.all(pokemon.abilities.map(({
                    ability
                }) => fetch(ability.url)
                        .then(abilityResponse => abilityResponse.json())
                        .then(_ability => formatAbility(_ability)))),
                Promise.all(pokemon.moves.map(({
                    move
                }) => fetch(move.url)
                        .then(moveResponse => moveResponse.json())
                        .then(_move => formatMove(_move))))
            ])
        }).then(([
            evolutions,
            abilities,
            moves
        ]) => {
            if (isSetInformation) {
                setPokemonExtra({
                    ...pokemonExtra,
                    abilities,
                    evolutions,
                    moves
                });
            }
        });
        
        return () => isSetInformation = false;
    }, []);

    return (
        <ScrollView
            style={styles.container}>
            <CardPokemonImage
                imageUri={pokemon.sprites['front_default']}/>
            <View style={styles.space}/>
            <CardPokemonTypes types={pokemon.types}/>
            <View style={styles.space}/>
            <CardPokemonGeneral
                { ...pokemon }/>
            <View style={styles.space}/>
            <CardPokemonStats
                stats={pokemon.stats}/>
            <View style={styles.space}/>
            <CardPokemonMoves moves={pokemonExtra.moves}/>
            <View style={styles.space}/>
            <CardPokemonAbilities
                abilities={pokemonExtra.abilities}/>
            <View style={styles.space}/>
            <CardPokemonEvolution evolutions={pokemonExtra.evolutions}/>
            <View style={styles.space}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        marginHorizontal: 10,
        marginBottom: 20
    },
    space: {
        marginVertical: 10
    }
});

export default DetailView;
