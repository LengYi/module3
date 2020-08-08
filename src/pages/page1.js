import React, {Component} from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import TestButton from '../commponent/YiButton';

class Page extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <SafeAreaView>
        <Text>RN 原生 Text来来来</Text>
<TestButton title="RN 封装按钮"  />
<Button title="原生按钮标题" accessibilityLabel="accessibility title" color="#40a9ff" disabled={false} testID="buttonTag"  />

      </SafeAreaView>
      </View>
    );
  }
}

export default Page;
