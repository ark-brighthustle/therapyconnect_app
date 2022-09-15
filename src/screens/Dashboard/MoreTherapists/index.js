import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'
import config from '../../../config'
import { SvgUri } from 'react-native-svg'

export default class MoreTherapists extends Component {
    constructor(props) {
        super(props)
        this.state = {
            healthConcern: [],
        }
    }

    componentDidMount = () => {
        axios.get(config.BASE_URL + '/health-concerns?sort=id:asc&populate[icon]=*')
            .then((response) => {
                this.setState({ healthConcern: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        const { navigation } = this.props

        const onSelectTherapists = async (i, value) => {
            await this.setState({
                searchTherapistsIndex: i,
                searchTherapists: value,
            })
            navigation.navigate('Search Therapist', { name: this.state.searchTherapists, index: this.state.searchTherapistsIndex, value: "Health Concern", filter: "&filters[healthConcerns][label][$eq]=" + this.state.searchTherapists });
        }

        return (
            <ScrollView>
                <View className="flex w-full h-full bg-white">
                    <View className="p-5">
                        <View className="flex flex-row items-center">
                            <Text className="text-2xl font-bold">Consult top</Text>
                            <Text className="text-2xl font-bold text-[#5aa272]"> therapists</Text>
                        </View>
                        <View className="mt-2 mb-4 items-start w-full">
                            <Text className="text-sm text-grey-300">Private online consultations with verified doctors. </Text>
                        </View>
                    </View>
                    <View className="flex flex-row w-full justify-center gap-2" style={{ flexWrap: 'wrap' }}>
                        {
                            this.state.healthConcern.map((data, index) => {
                                return (
                                    <TouchableOpacity
                                        className="items-center"
                                        onPress={() => onSelectTherapists(index, data.label)}
                                    >
                                        <View className="w-20 h-20 items-center justify-center">
                                            <SvgUri
                                                width="50%"
                                                height="50%"
                                                uri={config.IMAGE_URL + data.icon.url}
                                            />
                                        </View>
                                        <View style={{ width: 60 }} className="flex items-center">
                                            <Text className="text-black text-center text-sm">{data.label}</Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>
                </View>
            </ScrollView>
        )
    }
}