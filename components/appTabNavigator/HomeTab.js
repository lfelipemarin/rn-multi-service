import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class HomeTab extends Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go To Details Screen" onPress={() => this.props.navigation.navigate('DetailsScreen')} />
      </View>
    );
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
