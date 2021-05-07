import React, {
    useEffect
} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet
} from 'react-native';

import Logo from '../components/icon/logo';

const SplashscreenView = ({
    timeoutTime
}) => {
    useEffect(() => {
        console.log(timeoutTime);
        const timeoutReference = setTimeout(() => {
            // TODO: add navigation to home
        }, timeoutTime);

        return () => clearTimeout(timeoutReference);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: `flex`,
        justifyContent: `center`
    },
    logoContainer: {
        height: 200
    }
});

SplashscreenView.propTypes = {
    timeoutTime: PropTypes.number
};

SplashscreenView.defaultProps = {
    timeoutTime: 3000
};

export default SplashscreenView;
