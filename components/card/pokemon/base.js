import React, {
    useEffect,
    useState
} from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import PropTypes from 'prop-types';
import {
    Card,
    Title
} from 'react-native-paper';

import API from '../../../lib/api';

const PokemonCardBase = ({
    name,
    url
}) => {
    const urlSplitBySlash = url.split('/');
    urlSplitBySlash.pop();
    const id = urlSplitBySlash.pop();
    const imageUri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <Card style={styles.container}>
            <Card.Content style={styles.content}>
                <Image
                    style={styles.image}
                    source={{
                        uri: imageUri
                    }}/>
            </Card.Content>
            <Card.Actions style={styles.actions}>
                <Title>
                    {name}
                </Title>
            </Card.Actions>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        display: `flex`,
        alignItems: `center`
    },
    image: {
        height: 110,
        width: 110
    },
    actions: {
        display: `flex`,
        justifyContent: `center`
    }
});

PokemonCardBase.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string
};

export default PokemonCardBase;
