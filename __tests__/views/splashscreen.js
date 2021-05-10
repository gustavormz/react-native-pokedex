import React from 'react';
import {
    render
} from '@testing-library/react-native';

import SplashscreenView from '../../views/splashscreen';

let component;

describe('<SplashscreenView/>', () => {
    beforeEach(() => {
        component = render(<SplashscreenView />);
    });

    it('Component renders correctly', () => {
        expect(component).toBeDefined();
        expect(component.getByTestId('logo')).toBeDefined();
    });
});
