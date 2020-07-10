import React from 'react'
import {View,StyleSheet,Text, Button} from 'react-native'

const TrackListScreen = ({navigation})=>{
        return (
            <>
        <Text style={{fontSize:45}}>List</Text>
        <Button title="Go to Track Detail Screen" onPress={navigation.navigate('Detail')}></Button>
        </>
        )
        }

const styles = StyleSheet.create({})

export default TrackListScreen