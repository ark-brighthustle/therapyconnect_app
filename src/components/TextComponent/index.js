import React, { Children } from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

const TextComponent = ({ className1, isBold, isSemiBold, isMedium, children }) => {
    return (
        <Text className={className1} style={{ fontFamily: isBold ? "Poppins-Bold" : isSemiBold ? "Poppins-SemiBold" : isMedium ? "Poppins-Medium" : "Poppins-Regular" }}>
            {children}
        </Text>
    );
}

TextComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isBold: PropTypes.bool,
    isSemiBold: PropTypes.bool,
    isMedium: PropTypes.bool,
    fontSize: PropTypes.number,
}

TextComponent.defaultProps = {
    className: "",
    isBold: false,
    isMedium: false,
    isSemiBold: false,
}


export default TextComponent;