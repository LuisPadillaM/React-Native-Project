import { createAppContainer, createStackNavigator} from "react-navigation";
import HomeScreen from "scenes/HomeScreen";

const navigationStackRouter = createStackNavigator(
    {
        Home: { screen: HomeScreen },
    },
);

const StackContainer = createAppContainer(navigationStackRouter);

export default StackContainer;
