import React from 'react'
import {View,StyleSheet,Text, Button} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SignupScreen = ({navigation})=>{
    return (<>
        <Text style={{fontSize:45}}> Sign UP</Text>
        <Button title="GO to Sign-in Screen" onPress={()=> navigation.navigate('Sign In')}/>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Home')}><Text>Go to main Screen</Text></TouchableOpacity>
    </>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf:"center",
        alignItems: "center",
        backgroundColor: '#694fad',
        width:300,
        padding: 10
      },
})

export default SignupScreen