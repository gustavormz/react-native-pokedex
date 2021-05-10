import React from 'react';
import ProgressCircle from 'react-native-progress-circle';
import {
    Subheading
} from 'react-native-paper';
import PropTypes from 'prop-types';

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
        <Subheading>
            { statValue }
        </Subheading>
    </ProgressCircle>
);

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
    color: `red`,
    shadowColor: `blue`,
    bgColor: `green`
};

export default ProgressCircleStat;
