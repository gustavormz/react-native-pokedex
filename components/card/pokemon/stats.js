import React from 'react';
import {
    FlatList,
    StyleSheet,
    View
} from 'react-native';
import PropTypes from 'prop-types';
import {
    Surface,
    Subheading
} from 'react-native-paper';

import ProgressCircleStat from '../../progress/circle/stat';

const statKeyExtrator = (stat, index) => index;

const CardPokemonStats = ({
    stats
}) => (
    <Surface style={styles.container}>
        <FlatList
            testID={`flatlist-stats`}
            horizontal={true}
            data={stats}
            keyExtractor={statKeyExtrator}
            renderItem={({ item }, index) => (
                <View testID={`stat-row-${index}`} style={styles.itemContainer}>
                    <View>
                        <ProgressCircleStat statValue={item.base_stat}/>
                    </View>
                    <View>
                        <Subheading >
                            { item.stat.name }
                        </Subheading>
                    </View>
                </View>
            )}/>
    </Surface>
);

const styles = StyleSheet.create({
    container: {
        elevation: 2,
        borderRadius: 5,
        paddingVertical: 15
    },
    itemContainer: {
        flex: 1,
        alignItems: `center`,
        display: `flex`,
        paddingHorizontal: 20
    }
});

CardPokemonStats.propTypes = {
    stats: PropTypes.array
};

export default CardPokemonStats;
