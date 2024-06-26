import {View, Text, Platform} from 'react-native';
import React, {useState} from 'react';
import iconFont from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import {Image} from '@rneui/themed';

export default function FirstCompo() {
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
  const arr = [
    {
      Url: 'https://images.unsplash.com/photo-1658388050869-8bb6c9a8a2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      Url: 'https://images.unsplash.com/photo-1658388050869-8bb6c9a8a2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      Url: 'https://images.unsplash.com/photo-1658388050869-8bb6c9a8a2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      Url: 'https://images.unsplash.com/photo-1658388050869-8bb6c9a8a2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      Url: 'https://images.unsplash.com/photo-1658388050869-8bb6c9a8a2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      Url: 'https://images.unsplash.com/photo-1658388050869-8bb6c9a8a2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      Url: 'https://images.unsplash.com/photo-1658388050869-8bb6c9a8a2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      Url: 'https://images.unsplash.com/photo-1658388050869-8bb6c9a8a2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      Url: 'https://images.unsplash.com/photo-1658388050869-8bb6c9a8a2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      Url: 'https://images.unsplash.com/photo-1658388050869-8bb6c9a8a2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      Url: 'https://images.unsplash.com/photo-1658388050869-8bb6c9a8a2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      Url: 'https://images.unsplash.com/photo-1658388050869-8bb6c9a8a2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Image
        style={{width: '100%', height: 200}}
        resizeMode="repeat"
        source={{
          uri: 'https://images.unsplash.com/photo-1658236252852-259aa718f3be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        }}
      />

      <Text style={{fontSize: 50, alignSelf: 'center', marginVertical: 20}}>
        Hey my name is sameer
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {arr.map((x, i) => (
          <Image
            style={{
              width: 200,
              height: 200,
              marginHorizontal: 20,
              marginBottom: 20,
            }}
            source={{
              uri: x.Url,
            }}
          />
        ))}
      </View>
    </View>
  );
}
