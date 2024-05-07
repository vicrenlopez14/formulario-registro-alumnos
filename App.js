import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import Page from "./src/Page";

export default function App() {
    return (
        <View>
            <StatusBar style="auto"/>
            <Page/>

        </View>
    );
}

