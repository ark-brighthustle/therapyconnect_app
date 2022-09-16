import React, { Children } from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import {
    useFonts,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import { getHeight } from '../Dimensions/index';
// import { getWidth } from "../../utils/screenConfig";

const TextComponent = ({ className1, isBold, isSemiBold, isMedium, children }) => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });
    if (fontsLoaded) {
        return (
            <Text className={className1} style={{ fontFamily: isBold ? "Poppins_700Bold" : isSemiBold ? "Poppins_600SemiBold" : isMedium ? "Poppins_500Medium" : "Poppins_400Regular" }}>
                {children}
            </Text>
        );
    } else {
        return <Text>NULL</Text>
    }
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