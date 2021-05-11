import React from 'react';
import {
    FlatList
} from 'react-native';
import {
    render
} from '@testing-library/react-native';

import HomeView from '../../views/home';
import CardPokemonBase from '../../components/card/pokemon/base';

let component;
const mockData = [
    { name: `one`, id: 0, imageUri: `imageUri.png`}
];

describe(`Test all inital components on HomeView`, () => {
    beforeEach(() => {
        component = render(<HomeView/>);
    });

    it(`test if components are defined`, () => {
        expect(component).toBeDefined();
        expect(component.getByTestId('flatlist-pokemons')).toBeDefined();
    });
});

describe(`test flatlist`, () => {
    test(`test with data`, () => {
        const {
            UNSAFE_getAllByType
        } = render(<HomeView _pokemons={mockData}/>);
        expect(UNSAFE_getAllByType(FlatList).length).toBe(1);
        expect(UNSAFE_getAllByType(CardPokemonBase).length).toBe(mockData.length);
    });
});
