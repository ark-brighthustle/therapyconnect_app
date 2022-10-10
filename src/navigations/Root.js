import { View, Text } from 'react-native'
import React from 'react'

import CustomDrawer from '../components/CustomDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Dashboard/HomeScreen';
import { Colors } from '../constants/colors';
import OnlineConsult from '../screens/Dashboard/OnlineConsult';
import OfflineConsult from '../screens/Dashboard/OfflineConsult';
import HealthPackage from '../screens/Dashboard/HealthPackage';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
                    title: ({ color }) =>
                        <Text
                            style={{ color: color, fontFamily: "Poppins-SemiBold" }}
                            className={"text-md"}>
                            Home
                        </Text>,
                    headerShown: false,
                    drawerIcon: ({ color }) => (
                        <View className="ml-2">
                            <AntDesign name='home' color={color} size={25} />
                        </View>
                    )
                }}
            />
            <Drawer.Screen
                name="HealthPackage"
                component={HealthPackage}
                options={{
                    // title: 'Health Package',
                    title: ({ color }) =>
                        <Text
                            style={{ color: color, fontFamily: "Poppins-SemiBold" }}
                            className={"text-md"}>
                            Health Package
                        </Text>,
                    headerStyle: { backgroundColor: '#5aa272' },
                    headerTitleStyle: { color: 'white' },
                    headerTintColor: 'white',
                    drawerIcon: ({ color }) => (
                        <View className="ml-2">
                            <AntDesign name='home' color={color} size={25} />
                        </View>
                    )
                }}
            />
            <Drawer.Screen
                name="OnlineConsult"
                component={OnlineConsult}
                options={{
                    // title: 'Online Consultation',
                    title: ({ color }) =>
                        <Text
                            style={{ color: color, fontFamily: "Poppins-SemiBold" }}
                            className={"text-md"}>
                            Online Consultation
                        </Text>,
                    headerStyle: { backgroundColor: '#5aa272' },
                    headerTitleStyle: { color: 'white' },
                    headerTintColor: 'white',
                    drawerIcon: ({ color }) => (
                        <View className="ml-2">
                            <AntDesign name='home' color={color} size={25} />
                        </View>
                    )
                }}
            />
            <Drawer.Screen
                name="OfflineConsult"
                component={OfflineConsult}
                options={{
                    // title: 'Offline Consultation',
                    title: ({ color }) =>
                        <Text
                            style={{ color: color, fontFamily: "Poppins-SemiBold" }}
                            className={"text-md"}>
                            Offline Consultation
                        </Text>,
                    headerStyle: { backgroundColor: '#5aa272' },
                    headerTitleStyle: { color: 'white' },
                    headerTintColor: 'white',
                    drawerIcon: ({ color }) => (
                        <View className="ml-2">
                            <AntDesign name='home' color={color} size={25} />
                        </View>
                    )
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={OfflineConsult}
                options={{
                    // title: 'Settings',
                    title: ({ color }) =>
                        <Text
                            style={{ color: color, fontFamily: "Poppins-SemiBold" }}
                            className={"text-md"}>
                            Settings
                        </Text>,
                    headerStyle: { backgroundColor: '#5aa272' },
                    headerTitleStyle: { color: 'white' },
                    headerTintColor: 'white',
                    drawerIcon: ({ color }) => (
                        <View className="ml-2">
                            <AntDesign name='setting' color={color} size={25} />
                        </View>
                    )
                }}
            />
            <Drawer.Screen
                name="Logout"
                component={OfflineConsult}
                options={{
                    // title: 'Logout',
                    title: ({ color }) =>
                        <Text
                            style={{ color: color, fontFamily: "Poppins-SemiBold" }}
                            className={"text-md"}>
                            Signout
                        </Text>,
                    headerStyle: { backgroundColor: '#5aa272' },
                    headerTitleStyle: { color: 'white' },
                    headerTintColor: 'white',
                    drawerIcon: ({ color }) => (
                        <View className="ml-2.5">
                            <AntDesign name='logout' color={color} size={22} />
                        </View>
                    )
                }}
            />
        </Drawer.Navigator>
    );
}

export default Root;