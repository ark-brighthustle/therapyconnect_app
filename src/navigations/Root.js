import { StyleSheet, Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

// import StoreCategory from '../screens/Dashboard/StoreCategory';
// import TrackOrders from '../screens/Dashboard/TrackOrders';
// import FollowStores from '../screens/Dashboard/FollowingStores';
// import Offers from '../screens/Dashboard/Offers';
// import WatchVideos from '../screens/Dashboard/WatchVideos';
import CustomDrawer from '../components/CustomDrawer';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { ImagesContent } from '../constants/images';
import { getHeight, getWidth } from '../components/Dimensions';
import HomeScreen from '../screens/Dashboard/HomeScreen';
import { Colors } from '../constants/colors';
// import OrderHistory from '../screens/Dashboard/OrderHistory';

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
                            source={ImagesContent.storeCategory}
                            tintColor={color}
                            style={styles.adjustContent}
                        />
                    )
                }}
            />
            {/* <Drawer.Screen
                name="StoreCategory"
                component={StoreCategory}
                options={{
                    title: 'Store Category',
                    drawerIcon: ({ color }) => (
                        <Image
                            source={ImagesContent.storeCategory}
                            tintColor={color}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="TrackOrders"
                component={TrackOrders}
                options={{
                    title: 'Track Orders',
                    drawerIcon: ({ color }) => (
                        <Image
                            source={ImagesContent.trackOrders}
                            tintColor={color}
                            style={styles.adjustContent1}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="OrderHistory"
                component={OrderHistory}
                options={{
                    title: 'Order History',
                    drawerIcon: ({ color }) => (
                        <Image
                            source={ImagesContent.trackOrders}
                            tintColor={color}
                            style={styles.adjustContent1}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="FollowStores"
                component={FollowStores}
                options={{
                    title: 'Following Stores',
                    drawerIcon: ({ color }) => (
                        <Image
                            source={ImagesContent.followingStores}
                            tintColor={color}
                            style={styles.adjustContent2}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Offers"
                component={Offers}
                options={{
                    title: 'Offers & Discountes',
                    drawerIcon: ({ color }) => (
                        <Image
                            source={ImagesContent.offers}
                            tintColor={color}
                            style={styles.adjustContent2}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="WatchVideos"
                component={WatchVideos}
                options={{
                    title: 'Watch Videos',
                    drawerIcon: ({ color }) => (
                        <Image
                            source={ImagesContent.watchVideos}
                            tintColor={color}
                            style={styles.adjustContent3} />
                    )
                }}
            /> */}
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