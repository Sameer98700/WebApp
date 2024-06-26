import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import iconFont from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import MyStack from '../src/MyStack';

export default function AppWeb() {
  // Generate required css
  const iconFontStyles = `@font-face {
      src: url(${iconFont});
      font-family: Ionicons;
    }`;

  // Create stylesheet
  const style = Platform.OS === 'web' && document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles;
  } else {
    if (Platform.OS === 'web') {
      style.appendChild(document.createTextNode(iconFontStyles));
    }
  }

  // Inject stylesheet
  if (Platform.OS === 'web') {
    document.head.appendChild(style);
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
