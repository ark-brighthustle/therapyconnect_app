import { StyleSheet, Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

import CustomDrawer from '../components/CustomDrawer';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { ImagesContent } from '../constants/images';
import { getHeight, getWidth } from '../components/Dimensions';
import HomeScreen from '../screens/Dashboard/HomeScreen';
import { Colors } from '../constants/colors';
import OnlineConsult from '../screens/Dashboard/OnlineConsult';
import OfflineConsult from '../screens/Dashboard/OfflineConsult';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Root = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{ headerShown: false, drawerActiveTintColor: Colors.borderColor }}>
            <Drawer.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    drawerIcon: ({ color }) => (
                        <Image
                            source={ImagesContent.search}
                            tintColor={color}
                            style={styles.adjustContent}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="OnlineConsult"
                component={OnlineConsult}
                options={{
                    title: 'Online Consultation',
                    drawerIcon: ({ color }) => (
                        <Image
                            source={ImagesContent.search}
                            tintColor={color}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="OfflineConsult"
                component={OfflineConsult}
                options={{
                    title: 'Offline Consultation',
                    drawerIcon: ({ color }) => (
                        <Image
                            source={ImagesContent.search}
                            tintColor={color}
                            style={styles.adjustContent1}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    );
}

export default Root;

const styles = StyleSheet.create({
    adjustContent: {
        marginLeft: getWidth("0.5%"),
        marginRight: getWidth("0%")
    },
    adjustContent1: {
        marginLeft: getWidth("0.5%"),
        marginRight: getWidth("1%")
    },
    adjustContent2: {
        marginLeft: getWidth("0%"),
        marginRight: getWidth("0%"),
    },
    adjustContent3: {
        marginLeft: getWidth("-3%"),
        marginRight: getWidth("-2.5%"),
        marginTop: getHeight("-2%"),
        marginBottom: getHeight("-1.5%")
    }
})