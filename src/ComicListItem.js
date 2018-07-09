import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

class ComicListItem extends Component {
  state = {}
  render() {
    console.log('hihihih')
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://api.techkids.vn/reactnative/media/comic/lokcomic1giaingochungkhoanp1/Copy_of_1.jpg' }} />
        <Text style={styles.text}>LOK Comic #1: Giải ngố chứng khoán (P.1)</Text>
      </View>
    );
  }
}

//1 inch ~ 160dp

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: Dimensions.get('window').width / 2
  },
  image: {
    height: 200
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default ComicListItem;