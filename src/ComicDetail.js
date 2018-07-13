import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList, Image
} from 'react-native';

class ComicDetail extends Component {
  state = {}
  render() {
    return (
      <FlatList
        data={this.props.navigation.state.params.comic.photos}
        renderItem={({ item }) => <Image
          style={{height: 200}}
          source={{ uri: item }} />}
        keyExtractor={(item) => item}
      />
    );
  }
}

export default ComicDetail;