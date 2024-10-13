import React, {useEffect, useState} from 'react';
import {SafeAreaView, Button, Text, TextInput, StyleSheet, View, ScrollView} from 'react-native';
import * as Updates from 'expo-updates';
export default function App() {
    const [taps, setTaps] = useState(0);
    const [text, setText] = useState('')
    const [state,setState] = useState("")
    const [check,setCheck] = useState<any>("")

    const api = async () => {
        try {
            const a = await Updates.checkForUpdateAsync();

            setCheck(JSON.stringify(a))
           await Updates.setExtraParamAsync("channel", "production")
            //setState(JSON.stringify(a));
            await Updates.fetchUpdateAsync();
        } catch (e: any) {
            setState(e?.message);
            console.log(e);
        }
    };
    useEffect(() => {
        api();
    }, []);
    return (
        <SafeAreaView style={{paddingTop:50,backgroundColor:"red",flex:1}}>
            <View style={{backgroundColor:"blue"}}>
                <Text>state:{state}</Text>

                <Text>check:{check}</Text>
                <Button
                    title="Add one"
                    variant="primary"
                    onPress={() => setTaps(taps + 1)}
                />
                <Button
                    title="Add ten"
                    testID="add_ten"
                    onPress={() => setTaps(taps + 10)}
                />
                <Text>10 Number of taps: {taps}</Text>
            </View>



            <ScrollView testID="first" contentContainerStyle={{backgroundColor:"green"}}>

                {Array.from(Array(taps).keys()).map((item,index)=>{
                    console.log(typeof `id-${index}`)
                    return <View key={index} style={{height:50}}><Text testID={`id-${index}`}>{`id-${index}`}</Text></View>
                })}
            </ScrollView>

            <ScrollView testID="second" contentContainerStyle={{backgroundColor:"yellow"}}>

                {Array.from(Array(taps).keys()).map((item,index)=>{
                    console.log(typeof `id-${index}`)
                    return <View key={index} style={{height:50}}><Text testID={`id-${index}`}>{`id-${index}`}</Text></View>
                })}
            </ScrollView>



        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
