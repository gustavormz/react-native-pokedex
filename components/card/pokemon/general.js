import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {
    Surface,
    Title,
    Subheading
} from 'react-native-paper';
import PropTypes from 'prop-types';

const CardPokemonStats = ({
    base_experience,
    height,
    weight,
    mainAbility
}) => (
    <Surface style={styles.container}>
        <View style={styles.viewContainer}>
            <View style={styles.view}>
                <Subheading style={styles.text}>
                    Height
                </Subheading>
                <Title style={styles.text}>
                    { height }
                </Title>
            </View>
            <View style={styles.view}>
                <Subheading style={styles.text}>
                    Weight
                </Subheading>
                <Title style={styles.text}>
                    { weight }
                </Title>
            </View>
        </View>
        <View style={styles.viewContainer}>
            <View style={styles.view}>
                <Subheading style={styles.text}>
                    XP Base
                </Subheading>
                <Title style={styles.text}>
                    { base_experience }
                </Title>
            </View>
            <View style={styles.view}>
                <Subheading style={styles.text}>
                    Main Ability
                </Subheading>
                <Title style={styles.text}>
                    { mainAbility }
                </Title>
            </View>
        </View>
    </Surface>
);

const styles = StyleSheet.create({
    container: {
        elevation: 2,
        borderRadius: 5,
        paddingVertical: 10
    },
    text: {
        textAlign: `center`
    },
    viewContainer: {
        display: `flex`,
        flexDirection: `row`,
        flex: 1
    },
    view: {
        flex: 1
    }
});

CardPokemonStats.propTypes = {
    base_experience: PropTypes.number,
    height: PropTypes.number,
    weight: PropTypes.number,
    mainAbility: PropTypes.string
};

export default CardPokemonStats;
