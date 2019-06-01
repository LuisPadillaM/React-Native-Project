import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Scenes from "scenes/Navigation";


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        flex : 1,
        backgroundColor: '#fff',
        padding: 20,
    },
});

class AppContainer extends React.Component {
    render(){
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <Scenes />
                </View>
            </SafeAreaView>
        )
    }
}

export default AppContainer;



