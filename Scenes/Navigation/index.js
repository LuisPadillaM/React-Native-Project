import React, { Component } from "react";
// import { Dimensions } from 'react-native';
import homeStackNavigator from 'scenes/Navigation/homeStackNavigator';
// console.log('homeStackNavigator', homeStackNavigator);
import SideBar from "components/SideBar";
import {
    createAppContainer,
    createDrawerNavigator,
} from "react-navigation";

// const DEVICE_WIDTH = Dimensions.get('window').width;

const navigationDrawerRouter = createDrawerNavigator(
    {
        Home: { screen: homeStackNavigator },
    },
    {
        // drawerWidth: DEVICE_WIDTH - 100,
        contentComponent: props => <SideBar {...props} />
    }
);
const ScenesContainer = createAppContainer(navigationDrawerRouter);
export default ScenesContainer;
