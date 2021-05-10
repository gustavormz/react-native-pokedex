import React from 'react';
import {
    render
} from '@testing-library/react-native';

import CardPokemonGeneral from '../../../../components/card/pokemon/general';

let component;

describe('Check initial components render', () => {
    beforeEach(() => {
        component = render(<CardPokemonGeneral />);
    });

    it('Components renders correctly', () => {
        expect(component).toBeDefined();
        expect(component.getByTestId('height-view')).toBeDefined();
        expect(component.getByTestId('weight-view')).toBeDefined();
        expect(component.getByTestId('xp-view')).toBeDefined();
        expect(component.getByTestId('ability-view')).toBeDefined();
    });
});
