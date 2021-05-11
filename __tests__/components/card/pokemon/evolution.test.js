import React from 'react';
import {
    render
} from '@testing-library/react-native';
import {
    FlatList
} from 'react-native';
import {
    Surface
} from 'react-native-paper';

import CardPokemonEvolution from '../../../../components/card/pokemon/evolution';

let component;
const mockData = [
    { id: 2, imageUri: `https://domain.com/test.png` }
];

describe(`test initial components renders`, () => {
    beforeEach(() => {
        component = render( <CardPokemonEvolution /> );
    });

    it(`check all components exists`, () => {
        expect(component).toBeDefined();
        expect(component.getByTestId(`flatlist-evolution`)).toBeDefined();
    });
});

describe(`CardPokemonMoves with initial data`, () => {
    test('render a evolution list', async () => {
        const {
            UNSAFE_getAllByType
        } = render(
            <CardPokemonEvolution types={mockData}/>
        );

        expect(UNSAFE_getAllByType(FlatList).length).toBe(1);
        expect(UNSAFE_getAllByType(Surface).length).toBe(mockData.length);
    });
});
