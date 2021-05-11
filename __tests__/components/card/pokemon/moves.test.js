import React from 'react';
import {
    render,
    waitFor
} from '@testing-library/react-native';
import {
    FlatList
} from 'react-native';
import { enableFetchMocks } from 'jest-fetch-mock';
import {
    Card
} from 'react-native-paper';

import CardPokemonMoves from '../../../../components/card/pokemon/moves';

enableFetchMocks();
let component;

describe('<CardPokemonMoves/>', () => {
    beforeEach(() => {
        component = render(<CardPokemonMoves />);
    });

    it('Component renders correctly', () => {
        expect(component).toBeDefined();
        expect(component.getByTestId('flatlist-moves')).toBeDefined();
    });
});

/*describe(`CardPokemonMoves with initial data`, () => {
    beforeEach(() => {
        fetch.resetMocks()
    });

    test('render a types list', async () => {
        fetch.mockResponseOnce(
            JSON.stringify([
                { name: ``, effect: '1' },
                { name: ``, effect: '2' },
                { name: ``, effect: '1' },
                { name: ``, effect: '2' },
            ])
        );
        const { queryByTestId, getByTestId, UNSAFE_getAllByType } = render(<CardPokemonMoves moves={[
            { name: ``, effect: '1' },
            { name: ``, effect: '2' },
        ]}/>);
      
        expect(queryByTestId('move-row-0')).toBeNull();
    
        await waitFor(() => UNSAFE_getAllByType(Card));
    
        expect(UNSAFE_getAllByType(Card));
    });
}); */
