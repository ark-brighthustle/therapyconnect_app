import { StyleSheet, Image } from 'react-native'
import React from 'react'

import CustomDrawer from '../components/CustomDrawer';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { ImagesContent } from '../constants/images';
import { getHeight, getWidth } from '../components/Dimensions';
import HomeScreen from '../screens/Dashboard/HomeScreen';
import { Colors } from '../constants/colors';
import OnlineConsult from '../screens/Dashboard/OnlineConsult';
import OfflineConsult from '../screens/Dashboard/OfflineConsult';
import HealthPackage from '../screens/Dashboard/HealthPackage';
import TextComponent from '../components/TextComponent';

const Drawer = createDrawerNavigator();

const Root = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                drawerActiveTintColor: Colors.headerColor,
                // drawerItemStyle: { padding: getHeight("0.5%") },
                // drawerLabelStyle: { marginLeft: getWidth("-2.5%") }
            }}
        >
            <Drawer.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: () => <TextComponent>Home</TextComponent>,
                    headerShown: false,
                    drawerIcon: ({ color }) => (
                        <Image
                            source={ImagesContent.search}
                            tintColor={color}
                            className="w-6 h-6 ml-2"
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="HealthPackage"
                component={HealthPackage}
                options={{
                    // title: 'Health Package',
                    title: () => <TextComponent>Health Package</TextComponent>,
                    headerStyle: { backgroundColor: '#5aa272' },
                    headerTitleStyle: { color: 'white' },
                    headerTintColor: 'white',
                    drawerIcon: ({ color }) => (
                        <Image
                            source={ImagesContent.search}
                            tintColor={color}
                            className="w-6 h-6 ml-2"
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="OnlineConsult"
                component={OnlineConsult}
                options={{
                    // title: 'Online Consultation',
                    title: () => <TextComponent>Online Consultation</TextComponent>,
                    headerStyle: { backgroundColor: '#5aa272' },
                    headerTitleStyle: { color: 'white' },
                    headerTintColor: 'white',
                    drawerIcon: ({ color }) => (
                        <Image
                            source={ImagesContent.search}
                            tintColor={color}
                            className="w-6 h-6 ml-2"
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="OfflineConsult"
                component={OfflineConsult}
                options={{
                    // title: 'Offline Consultation',
                    title: () => <TextComponent>Offline Consultation</TextComponent>,
                    headerStyle: { backgroundColor: '#5aa272' },
                    headerTitleStyle: { color: 'white' },
                    headerTintColor: 'white',
                    drawerIcon: ({ color }) => (
                        <Image
                            source={ImagesContent.search}
                            tintColor={color}
                            className="w-6 h-6 ml-2"
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={OfflineConsult}
                options={{
                    // title: 'Settings',
                    title: () => <TextComponent>Settings</TextComponent>,
                    // headerStyle: { backgroundColor: '#5aa272' },
                    // headerTitleStyle: { color: 'white' },
                    // headerTintColor: 'white',
                    drawerIcon: ({ color }) => (
                        <Image
                            source={ImagesContent.search}
                            tintColor={color}
                            className="w-6 h-6 ml-2"
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Logout"
                component={OfflineConsult}
                options={{
                    // title: 'Logout',
                    title: () => <TextComponent>Logout</TextComponent>,
                    // headerStyle: { backgroundColor: '#5aa272' },
                    // headerTitleStyle: { color: 'white' },
                    // headerTintColor: 'white',
                    drawerIcon: ({ color }) => (
                        <Image
                            source={ImagesContent.search}
                            tintColor={color}
                            className="w-6 h-6 ml-2"
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    );
}

export default Root;