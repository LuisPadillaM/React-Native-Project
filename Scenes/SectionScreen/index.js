import React from "react";
import {Container, Content } from "native-base";
import {StyleSheet, Text, View} from "react-native";


const styles = StyleSheet.create({
    container: {
        flex : 1,
    },
});


class SectionScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        return (<Container>
            <View style={styles.container}>
                <Content padder contentContainerStyle={styles.container}>
                    <View style={styles.container}>
                        <Text>{navigation.getParam('sectionTitle')}</Text>
                    </View>
                </Content>
            </View>
        </Container>)
    }
}

export default SectionScreen;
