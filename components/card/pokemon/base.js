import React from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';
import PropTypes from 'prop-types';
import {
    Card,
    Title
} from 'react-native-paper';

const PokemonCardBase = ({
    name,
    id,
    handleClick,
    imageUri,
    ...props
}) => (
    <Card
        { ...props }
        onPress={() => handleClick(id)}
        style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
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
    id: PropTypes.string,
    baseImageUri: PropTypes.string,
    handleClick: PropTypes.func,
    imageUri: PropTypes.string
};

export default PokemonCardBase;
