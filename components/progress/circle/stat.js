import React from 'react';
import ProgressCircle from 'react-native-progress-circle';
import {
    Subheading
} from 'react-native-paper';
import PropTypes from 'prop-types';
import {
    StyleSheet
} from 'react-native';

const ProgressCircleStat = ({
    statValue,
    radius,
    borderWidth,
    color,
    shadowColor,
    bgColor
}) => (
    <ProgressCircle
        percent={statValue}
        radius={radius}
        borderWidth={borderWidth}
        color={color}
        shadowColor={shadowColor}
        bgColor={bgColor}>
        <Subheading style={styles.statValue}>
            { statValue }
        </Subheading>
    </ProgressCircle>
);

const styles = StyleSheet.create({
    statValue: {
        color: `#D62839`
    }
});

ProgressCircleStat.propTypes = {
    statValue: PropTypes.number,
    radius: PropTypes.number,
    borderWidth: PropTypes.number,
    color: PropTypes.string,
    shadowColor: PropTypes.string,
    bgColor: PropTypes.string
};

ProgressCircleStat.defaultProps = {
    radius: 50,
    borderWidth: 8,
    color: `#4BA3C3`,
    shadowColor: `#CCE6F4`,
    bgColor: `white`
};

export default ProgressCircleStat;
