import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Colors } from '../../constants/colors'
import { getHeight, getWidth } from '../Dimensions'
// import { ImagesContent } from '../../constants/images'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native'

const CustomDrawer = (props) => {
    // const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}> */}
            {/* <View style={styles.headerContent}>
                <View style={styles.header}>
                    <Image source={ImagesContent.profileImg} style={styles.img} />
                    <View>
                        <Text style={styles.name}> Kathelin karle </Text>
                        <Text> Hii </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                        <MaterialIcons name="keyboard-arrow-right" size={35} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.header, { marginTop: getHeight("4%") }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('NotificationPage')}>
                        <Image source={ImagesContent.notification} />
                    </TouchableOpacity>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
                            <Text style={styles.text}>Wallet  </Text>
                        </TouchableOpacity>
                        <View style={styles.textContent}>
                            <Text style={styles.text}>400.00</Text>
                        </View>
                    </View>
                </View>
            </View> */}
            <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent} showsVerticalScrollIndicator={false}>
                <View style={styles.mainContent}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            {/* <View style={styles.footer}>
                <TouchableOpacity onPress={() => { }} style={styles.touch}>
                    <Image source={ImagesContent.referEarn} />
                    <Text style={[styles.text2, { color: Colors.borderColor }]}> Refer & Earn </Text>
                </TouchableOpacity>
            </View> */}
            {/* <View style={styles.footer}>
                <TouchableOpacity onPress={() => { }} style={styles.touch}>
                    <Image source={ImagesContent.help} />
                    <Text style={styles.text2}> Help </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={styles.touch1}>
                    <Image source={ImagesContent.tCApply} />
                    <Text style={[styles.text2, { marginLeft: getWidth("1.5%") }]}> T&C Apply </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={styles.touch2}>
                    <Image source={ImagesContent.settings} />
                    <Text style={[styles.text2, { marginLeft: getWidth("3.5%") }]}> Settings </Text>
                </TouchableOpacity>
            </View> */}
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerContent: {
        backgroundColor: Colors.white,
    },
    headerContent: {
        padding: 20,
        backgroundColor: Colors.mainColor,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    img: {
        width: getWidth("15%"),
        height: getHeight("8.5%"),
        borderRadius: getWidth("12%"),
        marginBottom: getHeight("2%"),
        marginTop: getHeight("2%"),
        borderWidth: 1,
        borderColor: Colors.purple,
        backgroundColor: Colors.white,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    textContent: {
        borderWidth: 1,
        borderColor: Colors.purple,
        backgroundColor: Colors.borderColor,
        padding: 5,
        borderRadius: 15
    },
    mainContent: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: getHeight("2%")
    },
    footer: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: Colors.grey
    },
    touch: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    touch1: {
        paddingVertical: 10,
        paddingHorizontal: 7,
        flexDirection: 'row',
        alignItems: 'center'
    },
    touch2: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text2: {
        marginLeft: getWidth("3%"),
        fontSize: 16,
        fontWeight: '500',
    }
})