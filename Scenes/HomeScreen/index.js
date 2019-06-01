import React from "react";
import { connect } from 'react-redux';
import { firstAction } from 'reducers/Menu';
import { Container, Content, Header, Left, Icon, Right, Button, Body, Title } from "native-base";
import GridHeader from 'components/Home/Header';
import GridItems from 'components/Home/GridItems';
import { StyleSheet, View } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex : 1,
    },
    navigationContainer : {
        padding : 10,
        flex : 1,
        flexDirection : 'row',
        flexWrap : 'wrap',
        alignContent:  'stretch',
    },
});

class HomeScreen extends React.Component {
    render() {
        const { categories, navigation, title } = this.props;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => navigation.openDrawer()}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder contentContainerStyle={styles.container}>
                    <View style={styles.container}>
                        <GridHeader title={title} />
                        <View style={styles.navigationContainer}>
                            <GridItems list={categories}/>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}


const mapState = ({ Menu : { title, categories }  }) => ({ title, categories });
const mapDispatch = { firstAction };
export default  connect(mapState, mapDispatch)(HomeScreen);
