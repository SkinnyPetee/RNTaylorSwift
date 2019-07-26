import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import Album from './Album';
import axios from 'axios';



class AlbumList extends Component {

    state = {
        albums: []
    }

    async componentDidMount() {
        const response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
        this.setState({albums: response.data})
    }


    render() {

        const albumListItems = this.state.albums.map((album, index) => <Album key={album.title} albumName={album.title} 
        artistName = {album.artist} index = { index} 
        thumbnail_image = {album.thumbnail_image} url = { album.url}
        image={album.image}/> )
   
        if(this.state.albums.length !== 0) {
            return (
                <ScrollView>
                    {albumListItems}
                </ScrollView>
            ); 
            
        }else {
            return(
                <View></View>
            )
        }
    
    

    }
}




export default AlbumList;