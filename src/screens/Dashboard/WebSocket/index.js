import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import TextComponent from '../../../components/TextComponent'

export default class WebSocket extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View>
                <View>
                    <TextComponent>
                        WebSocket
                    </TextComponent>
                </View>
                <Text>WebSocket</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})