
import React from 'react';
import {Text,View, Image, Linking } from 'react-native';
import Button from './Button';


const Album = (props) => {
    
    return(
        <View style={styles.containerViewStyle}>
            <View style={ props.index === 0 ? [styles.firstWrapperViewStyle, styles.wrapperViewStyle] : [styles.wrapperViewStyle]}>
                    <Image style = {styles.thumbnailImageStyle} source = {{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />
                    <View>
                         <Text>{ props.albumName }</Text>
                         <Text>{props.artistName}</Text>
                    </View>
            </View>
            <Image style={styles.imageStyle} 
                source={{uri: props.image}} />
            
            <Button onPress={() => Linking.openURL(props.url)}>
                buy now
            </Button>
        </View>
    );
}

const styles = {

    

    containerViewStyle: {
        marginBottom: 20
    },

    imageStyle : {
        width: "100%",
        height: 300
    },

    thumbnailImageStyle : {
        width: 35,
        height: 35,
        marginRight: 10
    },

    albumNameStyle : {

    },
    artistNameStyle : {

    },
    wrapperViewStyle : {
        height: 45,
        paddingLeft: 10,
        backgroundColor: "#FFFFFF",
    
        shadowColor: '#456',
        shadowOffset: { 
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        flexDirection: "row"
        
    },
    firstWrapperViewStyle : {
        marginTop: "3%"
    }
}

export default Album;