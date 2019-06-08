import React from 'react';
import {StyleSheet, Button, View} from "react-native";
import {alignCenter, whiteColor} from "styles/theme";
import { withNavigation } from 'react-navigation';


let colors = ['green', 'blue', 'yellow', 'purple', 'black'];

const GridItems = ({ list, navigation }) => list.map((data, index) => {
    let colorIndex =  index % colors.length;
    const handlePress = () => {
        navigation.navigate('SectionScreen',  { sectionTitle: data.title })
    };
    return (<View key={index} style={styles.navigationItem}>
        <View  style={[styles.navigationItemContainer, { backgroundColor : colors[colorIndex] }]}>
            <Button
                title={data.title}
                onPress={handlePress}
            />
        </View>
    </View>);
});

export default withNavigation(GridItems);

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


