import { iosFonts, androidFonts } from './FontStyles';
import { Platform } from 'react-native';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  statusBarHeight,
} from '../utils/ScreenAdapter';

//阴影样式
const shadowStyles = {
  elevation: 8,
  shadowOffset: { width: 0, height: -4 },
  shadowColor: 'rgba(0,0,0,0.05)',
  shadowOpacity: 1,
  shadowRadius: 8,
};

export const DefaultStyles = {
  ThemeColor: 'rgba(255, 162, 45, 1)', // 主色
  PageContainer: {
    flex: 1,
    backgroundColor: 'rgba(246, 247, 248, 1)',
  },
  White: '#FFFFFF',
  Black333: 'rgba(51, 51, 51, 1)',
  ThemeTextColor: 'rgba(42, 47, 60, 1)',
  Black02: 'rgba(0,0,0,0.02)',
  Black04: 'rgba(0,0,0,0.04)',
  Black08: 'rgba(0,0,0,0.08)',
  Black16: 'rgba(0,0,0,0.16)',
  Black32: 'rgba(0,0,0,0.32)',
  Black56: 'rgba(0,0,0,0.56)',
  Black60: 'rgba(0,0,0,0.6)',
  Black84: 'rgba(0,0,0,0.84)',
  Black02_SOLID: '#FAFAFA',
  Black04_SOLID: '#F5F5F5',
  Black08_SOLID: '#EBEBEB',
  Black16_SOLID: '#D6D6D6',
  Black32_SOLID: '#ADADAD',
  Black56_SOLID: '#707070',
  Black84_SOLID: '#292929',
  Regular: Platform.OS === 'ios' ? iosFonts.regular : androidFonts.regular,
  Medium: Platform.OS === 'ios' ? iosFonts.medium : androidFonts.medium,
  Semi: Platform.OS === 'ios' ? iosFonts.semi : androidFonts.semi,
  Shadow: shadowStyles,
  Transparent: 'rgba(255,255,255,0)',
  ScreenHeight: SCREEN_HEIGHT,
  ScreenWidth: SCREEN_WIDTH,
  StatusBarHeight: statusBarHeight,
};

export const Flex = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const FlexHorizontal = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

export const FlexCenter = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const FlexColumnCenter = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const Footer = {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#ffffff',
};
