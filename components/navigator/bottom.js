import React, {
    useState
} from 'react';
import {
    BottomNavigation
} from 'react-native-paper';
import PropTypes from 'prop-types';

const NavigatorBottom = ({
    routes
}) => {
    const [index, setIndex] = useState(0);

    return (
        <BottomNavigation
            renderScene={({ route }) => {
                switch (route) {
                    case 'home':
                        break;
                    case 'favorites':
                        break;
                    default:
                        break;
                }
            }}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}/>
    );
};

NavigatorBottom.propTypes = {
    routes: PropTypes.array
};

NavigatorBottom.defaultProps = {
    routes: [
        { key: `home`, title: `Home`, icon: `home` },
        { key: `favorites`, title: `Favs`, icon: `heart` },
        { key: `search`, title: `Search`, icon: `card-search` }
    ]
};

export default NavigatorBottom;
