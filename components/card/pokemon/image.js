import React from 'react';
import {
    StyleSheet
} from 'react-native';
import {
    Avatar,
    Surface
} from 'react-native-paper';
import PropTypes from 'prop-types';

const CardPokemonImage = ({
    imageUri,
    avatarSize,
    backgroundColor,
    marginHorizontal
}) => (
    <Surface testID={`surface-container`} style={{
        ...styles.container,
        backgroundColor: backgroundColor,
        marginHorizontal: marginHorizontal
    }}>
        <Avatar.Image
            testID={`image-avatar`}
            style={styles.avatar}
            size={avatarSize}
            source={{
                uri: imageUri
            }}/>
    </Surface>
);

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        paddingHorizontal: 20,
        display: `flex`,
        alignItems: `center`,
        elevation: 3,
        borderRadius: 5
    },
    avatar: {
    }
});

CardPokemonImage.propTypes = {
    avatarSize: PropTypes.number,
    imageUri: PropTypes.string
};

CardPokemonImage.defaultProps = {
    avatarSize: 150,
    backgroundColor: `#175676`,
    marginHorizontal: 0
};

export default CardPokemonImage;
