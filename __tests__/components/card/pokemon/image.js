import React from 'react';
import {
    render
} from '@testing-library/react-native';

import CardPokemonImage from '../../../../components/card/pokemon/image';

let component;

describe('<CardPokemonImage/>', () => {
    beforeEach(() => {
        component = render(<CardPokemonImage />);
    });

    it('Component renders correctly', () => {
        expect(component).toBeDefined();
        expect(component.getByTestId('surface-container')).toBeDefined();
        expect(component.getByTestId('image-avatar')).toBeDefined();
    });
});
