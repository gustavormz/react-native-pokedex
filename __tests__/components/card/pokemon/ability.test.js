import React from 'react';
import {
    FlatList
} from 'react-native';
import {
    render
} from '@testing-library/react-native';
import {
    Card
} from 'react-native-paper';

import CardPokemonAbilities from '../../../../components/card/pokemon/abilities';

let component;

const mockData = [
    { name: `one`, effect: `one description` },
    { name: `two`, effect: `two description` }
];

describe(`initial components render`, () => {
    beforeEach(() => {
        component = render(<CardPokemonAbilities />);
    });

    it(`component exists`, () => {
        expect(component).toBeDefined();
        expect(component.getByTestId(`flatlist-abilities`)).toBeDefined();
    });
});

describe(`flatlist test`, () => {
    it(`flatlist with data`, () => {
        const {
            UNSAFE_getAllByType
        } = render(<CardPokemonAbilities abilities={mockData}/>);
        expect(UNSAFE_getAllByType(FlatList).length).toBe(1);
        expect(UNSAFE_getAllByType(Card).length).toBe(mockData.length);
    });
});
