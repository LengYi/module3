import { Dimensions, StatusBar, Platform } from 'react-native';
import { TextInput, Text } from 'react-native';
// import { Alert, Dialog, Loading } from '../components';

//UI设计图的宽度
const UI_WIDTH = 375;
//手机屏幕的宽度
export const SCREEN_WIDTH = Dimensions.get('screen').width;
//手机屏幕的高度
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
//计算手机屏幕宽度对应设计图宽度的单位宽度
export const scaleRatio = SCREEN_WIDTH / UI_WIDTH;

//判断当前机型是否为iphoneX
export const isIPhoneX = (() => {
  return (
    Platform.OS === 'ios' &&
    ((SCREEN_WIDTH === 375 && SCREEN_HEIGHT === 812) || // IphoneX
    (SCREEN_WIDTH === 812 && SCREEN_HEIGHT === 375) ||
    (SCREEN_WIDTH === 414 && SCREEN_HEIGHT === 896) || // IphoneXS/XR
      (SCREEN_WIDTH === 896 && SCREEN_HEIGHT === 414))
  );
})();

export const adapt = (realLength, options = {}) => {
  return realLength * scaleRatio;
};

export const statusBarHeight = (function () {
  const androidBarHeight = StatusBar.currentHeight || 20;
  const iosBarHeight = isIPhoneX ? 44 : 20;
  return Platform.OS === 'ios' ? iosBarHeight : androidBarHeight;
})();

export const setCustomProps = (WrapComponent, customProps) => {
  const ComponentRender = WrapComponent.render;
  const componentDefaultProps = WrapComponent.defaultProps;
  WrapComponent.defaultProps = {
    ...componentDefaultProps,
    ...customProps,
  };
  WrapComponent.render = function render(props) {
    const oldProps = props;
    props = { ...props, style: [customProps.style, props.style] };
    try {
      return ComponentRender.apply(this, arguments);
    } finally {
      props = oldProps;
    }
  };
};
setCustomProps(Text, {
  allowFontScaling: false,
});

setCustomProps(TextInput, {
  allowFontScaling: false,
});
export const dismissSibling = () => {
  try {
    // Alert.hide();
    // Dialog.hide();
    // Loading.hide();
  } catch (e) {}
};

export default {
  adapt,
  scaleRatio,
};
