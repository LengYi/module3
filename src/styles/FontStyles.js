// iOS 文字
const iosFontsBase = {
  fontFamily: 'System',
  backgroundColor: 'transparent',
};
export const iosFonts = {
  light: {
    ...iosFontsBase,
    fontWeight: '300',
  },
  regular: {
    ...iosFontsBase,
    fontWeight: '400',
  },
  medium: {
    ...iosFontsBase,
    fontWeight: '500',
  },
  semi: {
    ...iosFontsBase,
    fontWeight: '600',
  },
};
// Android 文字
const androidFontsBase = {
  includeFontPadding: false,
  fontFamily: 'sans-serif',
  backgroundColor: 'transparent',
  padding: 0,
  margin: 0,
};
export const androidFonts = {
  light: {
    ...androidFontsBase,
    fontWeight: '300',
  },
  regular: {
    ...androidFontsBase,
    fontWeight: '400',
  },
  medium: {
    ...androidFontsBase,
    fontWeight: 'bold',
  },
  semi: {
    ...androidFontsBase,
    fontWeight: '600',
  },
};
