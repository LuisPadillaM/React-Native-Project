import React from 'react';
import { StyleSheet, Text, View} from "react-native";
import { alignCenter, whiteColor } from 'styles/theme';

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'red',
        height : 50,
        flexShrink : 1,
        paddingBottom : 20,
        ...alignCenter,
    },
    navigationText : {
        ...whiteColor,
    }
});

const Header = ({ title }) => (
    <View style={styles.header}>
        <Text style={styles.navigationText}>{title}</Text>
    </View>
);

export default Header;
