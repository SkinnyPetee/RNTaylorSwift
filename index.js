

import React from 'react';
import { Text, AppRegistry, SafeAreaView } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


const App = () => {
    return(
        <SafeAreaView style={styles.SafeAreaViewStyle}>
            <Header headerText={'Albums'}/>
            <AlbumList />
        </SafeAreaView>
        
    );
};

const styles = {
    SafeAreaViewStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
}

AppRegistry.registerComponent('Aproject', () => App);