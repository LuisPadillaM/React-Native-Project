import React from 'react';
import {StyleSheet, Button, Text, View} from "react-native";
import {alignCenter, whiteColor} from "styles/theme";

let colors = ['green', 'blue', 'yellow', 'purple', 'black'];

const GridItems = ({ list, navigation }) => list.map((data, index) => {
    let colorIndex =  index % colors.length;
    return (<View key={index} style={styles.navigationItem}>
        <View  style={[styles.navigationItemContainer, { backgroundColor : colors[colorIndex] }]}>
            <Button
                title={data.title}
                onPress={() => navigation.navigate('Friends')
            }/>
        </View>
    </View>);
});

export default GridItems;

const styles = StyleSheet.create({
    navigationItem : {
        flexGrow : 1,
        flexBasis : '50%',
    },
    navigationItemContainer : {
        ...alignCenter,
        margin: 5,
        flex : 1,
    },
    navigationText : {
        ...whiteColor,
    }
});


