import { createAppContainer, createStackNavigator} from "react-navigation";
import HomeScreen from "scenes/HomeScreen";
import SectionScreen from "scenes/SectionScreen";

const navigationStackRouter = createStackNavigator(
    {
        Home: {
            navigationOptions : () => ({
                header : null,
            }),
            screen: HomeScreen,
        },
        SectionScreen: { screen: SectionScreen, navigationOptions: ({ navigation }) => ({ title: navigation.state.params.sectionTitle }) },
    },
);

const StackContainer = createAppContainer(navigationStackRouter);

export default StackContainer;
