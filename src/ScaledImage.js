import React, { Component } from 'react';
import {
  Image, Dimensions
} from 'react-native';

class ScaledImage extends Component {
  state = { 
    height: 0
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillMount() {
    Image.getSize(this.props.uri, (realWidth, realHeight) => {
      this.setState({
        height: realHeight * this.props.width / realWidth
      })
    })
  }

  componentWillUnmount() {

  }

  componentWillUpdate() {

  }

  componentDidUpdate() {

  }

  render() {
    return (
      <Image
        source={{uri: this.props.uri}}
        style={{height: this.state.height, width: this.props.width}}
      />
    );
  }
}

export default ScaledImage;