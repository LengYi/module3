import React, { PureComponent } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { DefaultStyles } from '../../styles/GlobalStyles';
import { adapt } from '../../utils/ScreenAdapter';

export default class YiautoButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { disabled: props.disabled };
  }
  static getDerivedStateFromProps({ disabled }, state) {
    return disabled != state.disabled ? { disabled } : null;
  }
  render() {
    let { title, style, type, textStyle, ...others } = this.props;
    const disabled = this.state.disabled;
    type = type || 'normal';
    const opacity = disabled ? 0.48 : 1;
    const activeOpacity = disabled ? 0.48 : 0.6;
    return (
      <TouchableOpacity
        style={[styles[type], styles.base, style || {}, { opacity }]}
        activeOpacity={activeOpacity}
        {...others}
      >
        <Text style={[styles.text, styles[`${type}Text`], textStyle || {}]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 25,
    height: adapt(44),
    borderWidth: 1,
    borderStyle: 'solid',
    width: '100%',
  },
  normal: {
    backgroundColor: DefaultStyles.ThemeColor,
    borderColor: DefaultStyles.Black08,
  },
  pure: {
    backgroundColor: DefaultStyles.White,
    borderColor: DefaultStyles.Black08,
  },
  normalText: {
    color: DefaultStyles.White,
    ...DefaultStyles.Medium,
  },
  pureText: {
    color: DefaultStyles.Black56,
    ...DefaultStyles.Regular,
  },
  text: {
    textAlign: 'center',
    lineHeight: adapt(44),
    fontSize: adapt(16),
  },
});
