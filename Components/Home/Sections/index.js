import {StyleSheet, Text, View} from 'react-native';
import React from "react";

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#fff',
        padding: 20,
    },
});

const section = () => (
    <View style={styles.container}>
        <Text>section</Text>
    </View>

);

export default section;
