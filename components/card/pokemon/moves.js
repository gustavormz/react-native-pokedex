import React from 'react';
import PropTypes from 'prop-types';
import {
    Surface,
    Subheading,
    Card
} from 'react-native-paper';
import {
    StyleSheet,
    FlatList
} from 'react-native';

const moveKeyExtractor = (item, index) => index;

const CardPokemonMoves = ({
    moves
}) => (
    <Surface style={styles.container}>
        <FlatList
            testID={`flatlist-moves`}
            horizontal={true}
            data={moves}
            keyExtractor={moveKeyExtractor}
            renderItem={({ item }, index) => (
                <Card testID={`move-row-${index}`} style={styles.itemContainer}>
                    <Card.Title
                        titleStyle={styles.textTitle}
                        title={item.name}/>
                    <Card.Content>
                        <Subheading style={styles.textSub}>
                            { item.effect }
                        </Subheading>
                    </Card.Content>
                </Card>
            )}/>
    </Surface>
);

const styles = StyleSheet.create({
    container: {
        elevation: 2,
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    itemContainer: {
        marginHorizontal: 7,
        elevation: 1,
        marginVertical: 5,
        backgroundColor: `white`
    },
    textTitle: {
        color: `#D62839`
    },
    textSub: {
        color: `#175676`
    }
});

CardPokemonMoves.propTypes = {
    moves: PropTypes.array
};

export default CardPokemonMoves;
