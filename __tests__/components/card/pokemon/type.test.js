import React from 'react';
import {
    render
} from '@testing-library/react-native';
import {
    FlatList
} from 'react-native';

import CardPokemonType from '../../../../components/card/pokemon/type';
import ChipType from '../../../../components/chip/type';

let component;

describe('<CardPokemonType/>', () => {
    beforeEach(() => {
        component = render(<CardPokemonType />);
    });

    it('Component renders correctly', () => {
        expect(component).toBeDefined();
        expect(component.getByTestId('flatlist-types')).toBeDefined();
    });
});

describe(`CardPokemonType with initial data`, () => {
    test('render a types list', async () => {
        const mockFlatListData = [
            { type: { name: `fire` } },
            { type: { name: `water` } }
        ];
        const {
            UNSAFE_getAllByType
        } = render(
            <CardPokemonType types={mockFlatListData}/>
        );

        expect(UNSAFE_getAllByType(FlatList).length).toBe(1);
        expect(UNSAFE_getAllByType(ChipType).length).toBe(mockFlatListData.length);
    });
});
