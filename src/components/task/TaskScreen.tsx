import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

class TaskScreen extends Component {
  render() {
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <View>
          <Text> Task interaction </Text>
        </View>
      </ScrollView>
    );
  }
}

export default TaskScreen;
