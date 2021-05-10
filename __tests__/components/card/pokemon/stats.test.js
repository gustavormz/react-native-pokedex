import React from 'react';
import {
    render
} from '@testing-library/react-native';
import {
    FlatList
} from 'react-native';

import CardPokemonStats from '../../../../components/card/pokemon/stats';

let component;

describe('Test all initial components render without props', () => {
    beforeEach(() => {
        component = render(<CardPokemonStats />);
    });

    it('Components render correctly', () => {
        expect(component).toBeDefined();
        expect(component.getByTestId('flatlist-stats')).toBeDefined();
        expect(component.UNSAFE_getAllByType(FlatList).length).toBe(1);
    });
});
