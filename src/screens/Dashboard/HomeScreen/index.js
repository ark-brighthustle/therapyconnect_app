import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { Feather, Ionicons, FontAwesome } from '@expo/vector-icons'
import {ImagesContent} from '../../../constants/images';
import axios from 'axios';
import config from '../../../config';
import SelectDropdown from 'react-native-select-dropdown';
import {Colors} from '../../../constants/colors';
import {SvgUri} from 'react-native-svg';
import {DrawerActions} from '@react-navigation/native';
import TextComponent from '../../../components/TextComponent';
import {getHeight, getWidth} from '../../../components/Dimensions';
import AnimatedLoader from 'react-native-animated-loader';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      searchText: '',
      searchService: '',
      healthConcern: [],
      searchTherapists: '',
      knowTherapy: [],
      searchTherapy: '',
      healthArticle: [],
      selectLocation: [],
      searchLocation: 'Select an Option.',
      searchLocationIndex: '',
      searchTherapistsIndex: '',
      searchTherapyIndex: '',
    };
  }

  componentDidMount = () => {
    axios
      .get(config.BASE_URL + '/locations?sort=id:desc&populate=*')
      .then(response => {
        var count = response.data.data.length;
        for (var i = 0; i < count; i++) {
          this.state.selectLocation.push(response.data.data[i].label);
        }
        this.setState({isLoading: false});
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(
        config.BASE_URL +
          '/health-concerns?sort=id:asc&populate[icon]=*&pagination[pageSize]=12',
      )
      .then(response => {
        this.setState({
          healthConcern: response.data.data,
          isLoading: false,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(config.BASE_URL + '/therapies?sort=id:asc&populate[icon2]=*')
      .then(response => {
        this.setState({
          knowTherapy: response.data.data,
          isLoading: false,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(config.BASE_URL + '/blogs?sort=id:asc&populate[thumbnail]=*')
      .then(response => {
        this.setState({
          healthArticle: response.data.data,
          isLoading: false,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const {navigation} = this.props;

    const toggleDrawer = () => {
      navigation.dispatch(DrawerActions.openDrawer());
    };

    const onSearchSubmit = () => {
      navigation.navigate('Search Therapist', {
        value: 'Simple Text',
        filter:
          '&filters[verified]=true&filters[$or][0][city][$containsi]=' +
          this.state.searchText +
          '&filters[$or][1][therapy][label][$containsi]=' +
          this.state.searchText +
          '&filters[$or][2][deliveryModes][label][$containsi]=' +
          this.state.searchText +
          '&filters[$or][3][healthConcerns][label][$containsi]=' +
          this.state.searchText,
      });
    };

    const onSelectLocation = async (value, i) => {
      await this.setState({
        searchLocation: value,
        searchLocationIndex: i,
      });
      navigation.navigate('Search Therapist', {
        name: this.state.searchLocation,
        index: this.state.searchLocationIndex,
        value: 'Location',
        filter: '&filters[city][$eq]=' + this.state.searchLocation,
      });
    };

    const onSelectTherapists = async (i, value) => {
      await this.setState({
        searchTherapistsIndex: i,
        searchTherapists: value,
      });
      navigation.navigate('Search Therapist', {
        name: this.state.searchTherapists,
        index: this.state.searchTherapistsIndex,
        value: 'Health Concern',
        filter:
          '&filters[healthConcerns][label][$eq]=' + this.state.searchTherapists,
      });
    };

    const onSelectTherapy = async (i, value) => {
      await this.setState({
        searchTherapyIndex: i,
        searchTherapy: value,
      });
      navigation.navigate('Search Therapist', {
        name: this.state.searchTherapy,
        index: this.state.searchTherapyIndex,
        value: 'Therapy',
        filter: '&filters[therapy][label][$eq]=' + this.state.searchTherapy,
      });
    };

    const onlineConsult = i => {
      console.log('index', i);
      if (i === 0) {
        navigation.navigate('Online Consultation');
      } else if (i === 1) {
        navigation.navigate('Offline Consultation');
      } else if (i === 2) {
        navigation.navigate('Order Medicines');
      } else if (i === 3) {
        navigation.navigate('Book Diagnostics');
      } else if (i === 4) {
        navigation.navigate('Wellness Solutions');
      }
    };

    const onPackage = i => {
      console.log('index', i);
      if (i === 0) {
        navigation.navigate('Health Package');
      } else if (i === 1) {
        navigation.navigate('Book Diagnostics');
      } else if (i === 2) {
        navigation.navigate('Order Medicines');
      } else if (i === 3) {
        navigation.navigate('Wellness Solutions');
      }
    };

    const arr = [
      {fn: 'Health', ln: 'Package', img: ImagesContent.health_package},
      {fn: 'Book', ln: 'Diagnostics', img: ImagesContent.bookDiagonistics},
      {fn: 'Order', ln: 'Medicine', img: ImagesContent.order_medicine},
      {fn: 'Wellness', ln: 'Solution', img: ImagesContent.wellness_sol},
    ];

    const arr1 = [
      {
        img: ImagesContent.online_consul,
        fn: 'Online',
        ln: 'Consultation',
        disc: 'Video Audio Chat',
      },
      {
        img: ImagesContent.offline_consul,
        fn: 'Offline',
        ln: 'Consultation',
        disc: 'At Clinic Home Visit',
      },
      {
        img: ImagesContent.order_medicine1,
        fn: 'Order',
        ln: 'Medicines',
        disc: 'Delivery at doorstep',
      },
      {
        img: ImagesContent.book_diag,
        fn: 'Book',
        ln: 'Diagnostics',
        disc: 'Laboratory near you',
      },
      {
        img: ImagesContent.wellness_sol1,
        fn: 'Wellness',
        ln: 'Solutions',
        disc: 'History of consistent results',
      },
    ];

    return (
      <View>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.headerColor}
        />
        {this.state.isLoading ? (
          <View style={styles.container}>
            <AnimatedLoader
              visible={this.state.isLoading}
              overlayColor="rgba(255,255,255,0.75)"
              animationStyle={styles.lottie}
              source={ImagesContent.Loader1}
              speed={1}
            />
          </View>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[0]}
            contentContainerStyle={{backgroundColor: Colors.white}}>
            <View className="flex flex-row bg-[#5aa272] pl-4 pr-4 pt-3 pb-3 items-center w-full justify-between">
              <Feather
                name="menu"
                size={35}
                color={'white'}
                onPress={() => toggleDrawer()}
              />
              <View className="flex flex-row items-center justify-around gap-2">
                <SelectDropdown
                  buttonStyle={{backgroundColor: '', width: getWidth('58%')}}
                  defaultButtonText={
                    <TextComponent
                      className1={'text-left text-md text-white'}
                      isBold={true}>
                      {this.state.searchLocation}
                    </TextComponent>
                  }
                  data={this.state.selectLocation}
                  dropdownStyle={styles.dropStyle}
                  dropdownIconPosition="right"
                  renderDropdownIcon={isOpened => {
                    return (
                      <View>
                        <FontAwesome
                          name={isOpened ? 'chevron-up' : 'chevron-down'}
                          color={Colors.white}
                          size={18}
                        />
                      </View>
                    );
                  }}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    onSelectLocation(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return (
                      <TextComponent
                        className1={'text-left text-md text-white'}
                        isBold={true}>
                        {selectedItem}
                      </TextComponent>
                    );
                  }}
                  rowTextForSelection={item => {
                    return <TextComponent>{item}</TextComponent>;
                  }}
                />
                <Ionicons
                  name="notifications-outline"
                  size={35}
                  color={'white'}
                />
              </View>
            </View>
            <View className="w-full flex bg-[#5aa272] pl-4 pr-4 flex-row items-center p-4">
              <View className="w-full flex pl-4 pr-4 flex-row items-center rounded-lg bg-white p-2">
                <Image
                  source={ImagesContent.search}
                  className="w-4 h-4 ml-4 mr-5"
                  style={{tintColor: 'black'}}
                  resizeMode="contain"
                />
                <TextInput
                  style={{
                    fontFamily: 'Poppins-Regular',
                    width: getWidth('70%'),
                  }}
                  underlineColorAndroid="transparent"
                  placeholder="Search health isuue, doctor..."
                  placeholderTextColor="grey"
                  autoCapitalize="none"
                  onChangeText={text => this.setState({searchText: text})}
                  value={this.state.searchText}
                  onSubmitEditing={() => onSearchSubmit()}
                />
              </View>
            </View>
            <View className="bg-[#5aa272] gap-1 pl-4">
              <TextComponent
                className1="text-md text-start text-white"
                isSemiBold={true}>
                {' '}
                Need professional help?
              </TextComponent>
              <TouchableOpacity
                className="flex justify-start flex-row gap-1"
                onPress={() => navigation.navigate('ConnectAdvisor')}>
                <TextComponent
                  className1="text-md mr-1 underline decoration-solid text-white"
                  isSemiBold={true}>
                  Connect to our Consultant
                </TextComponent>
                <Image
                  source={ImagesContent.link}
                  className="w-4 h-4"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View className="flex flex-row w-full bg-[#5aa272] p-3 rounded-b-3xl justify-center">
              {arr.map((data, index) => {
                return (
                  <TouchableOpacity
                    className="p-2 items-center justify-center"
                    onPress={() => onPackage(index)}>
                    <View className="w-16 h-16 mb-1 rounded-full bg-[#2b4d36] items-center justify-center">
                      <Image
                        source={data.img}
                        className="w-8 h-8"
                        resizeMode="contain"
                      />
                    </View>
                    <TextComponent className1="text-white" isSemiBold={true}>
                      {' '}
                      {data.fn}{' '}
                    </TextComponent>
                    <TextComponent className1="text-white" isSemiBold={true}>
                      {' '}
                      {data.ln}{' '}
                    </TextComponent>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View className="flex w-full bg-white rounded-b-3xl p-4">
              <View className="flex flex-row items-center">
                <TextComponent className1="text-2xl" isSemiBold={true}>
                  Our
                </TextComponent>
                <TextComponent
                  className1="text-2xl text-[#5aa272]"
                  isSemiBold={true}>
                  {' '}
                  true services
                </TextComponent>
              </View>
              <View className="w-full h-60">
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <View style={{flexDirection: 'row'}} className="gap-3 mt-3">
                    {arr1.map((data, index) => {
                      return (
                        <TouchableOpacity
                          style={[styles.main, {alignItems: 'center'}]}
                          onPress={() => onlineConsult(index)}>
                          <View>
                            <View style={styles.firstView}>
                              <Image
                                source={data.img}
                                style={styles.firstView}
                                resizeMode="contain"
                              />
                            </View>
                            <View style={styles.textView}>
                              <TextComponent
                                className1="text-sm text-white"
                                isMedium={true}>
                                {data.fn}
                              </TextComponent>
                              <TextComponent
                                className1="text-sm text-white"
                                isMedium={true}>
                                {data.ln}
                              </TextComponent>
                            </View>
                          </View>
                          <View className=" items-center w-32 mt-1 justify-center">
                            <TextComponent className1="text-sm text-center">
                              {data.disc}
                            </TextComponent>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </ScrollView>
              </View>
              <View className="flex flex-row items-center w-full justify-between">
                <View className="flex flex-row items-center">
                  <TextComponent className1="text-2xl" isSemiBold={true}>
                    Consult top
                  </TextComponent>
                  <TextComponent
                    className1="text-2xl text-[#5aa272]"
                    isSemiBold={true}>
                    {' '}
                    therapists
                  </TextComponent>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Therapists')}>
                  <TextComponent className1={'text-sm'} isMedium={true}>
                    SEE ALL
                  </TextComponent>
                </TouchableOpacity>
              </View>
              <View className="mt-1 mb-4 items-start w-full">
                <TextComponent className1="text-sm text-gray-400">
                  Private online consultations with verified doctors.{' '}
                </TextComponent>
              </View>
              <View
                className="flex flex-row w-full justify-center gap-2"
                style={{flexWrap: 'wrap'}}>
                {this.state.healthConcern.map((data, index) => {
                  return (
                    <TouchableOpacity
                      className="items-center"
                      onPress={() => onSelectTherapists(index, data.label)}>
                      <View className="w-16 h-20 items-center justify-center">
                        <SvgUri
                          width="50%"
                          height="50%"
                          uri={config.IMAGE_URL + data.icon.url}
                        />
                      </View>
                      <View style={{width: 74}} className="flex items-center">
                        <TextComponent className1="text-black text-center text-sm">
                          {data.label}
                        </TextComponent>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View className="flex mt-8 w-full">
                <View className="flex items-center flex-row">
                  <TextComponent className1="text-2xl" isSemiBold={true}>
                    Know Your
                  </TextComponent>
                  <TextComponent
                    className1="text-2xl text-[#5aa272]"
                    isSemiBold={true}>
                    {' '}
                    therapy
                  </TextComponent>
                </View>
              </View>
              <View className="mt-1 mb-4 items-start w-full">
                <TextComponent className1="text-sm text-gray-400">
                  Choose what suits you{' '}
                </TextComponent>
              </View>
              <View className="mt-3 w-full h-56">
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <View style={{flexDirection: 'row'}} className="gap-3">
                    {this.state.knowTherapy.map((data, index) => {
                      return (
                        <TouchableOpacity
                          style={styles.main}
                          onPress={() => onSelectTherapy(index, data.label)}>
                          <View style={styles.secondView}>
                            <View className="w-20 h-20 justify-center items-center">
                              <SvgUri
                                width="80%"
                                height="80%"
                                uri={config.IMAGE_URL + data.icon2.url}
                              />
                            </View>
                            <TextComponent
                              className1="text-lg text-white mt-3 p-1"
                              isSemiBold={true}>
                              {data.label}
                            </TextComponent>
                            <TextComponent className1="text-md text-white p-1">
                              {data.tagline}
                            </TextComponent>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </ScrollView>
              </View>
              <View className="flex mt-8 w-full">
                <View className="flex flex-row items-center">
                  <TextComponent className1="text-2xl" isSemiBold={true}>
                    Health
                  </TextComponent>
                  <TextComponent
                    className1="text-2xl text-[#5aa272]"
                    isSemiBold={true}>
                    {' '}
                    articles
                  </TextComponent>
                </View>
              </View>
              <View className="mt-4 w-full h-54">
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <View style={{flexDirection: 'row'}} className="gap-3">
                    {this.state.healthArticle.map(data => {
                      return (
                        <TouchableOpacity
                          style={styles.main}
                          onPress={() =>
                            navigation.navigate('Healthy Life', {id: data.id})
                          }>
                          <View className="w-56 h-44">
                            <Image
                              className="w-56 h-44"
                              source={{
                                uri:
                                  config.IMAGE_URL +
                                  data.thumbnail.formats.small.url,
                              }}
                            />
                          </View>
                          <TextComponent className1="w-56 jutify-center p-3">
                            {data.title}
                          </TextComponent>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: getWidth('100%'),
    height: getHeight('100%'),
  },
  lottie: {
    width: getWidth('50%'),
    height: getHeight('50%'),
    resizeMode: 'cover',
  },
  main: {
    marginTop: '3%',
    padddingHorizontal: '1.2%',
  },
  textView: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: '30%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: '70%',
    left: 0,
    right: 0,
    bottom: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  firstView: {
    width: 120,
    height: 150,
    borderRadius: 20,
    // backgroundColor: 'red'
  },
  secondView: {
    width: 184,
    height: 224,
    borderRadius: 20,
    backgroundColor: '#5aa272',
    padding: 10,
  },
  buttonText: {
    textAlign: 'left',
    // marginLeft: getWidth("10%"),
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
  },
  dropStyle: {
    borderRadius: 10,
    width: '58%',
    // marginLeft: getWidth("10%")
  },
});
