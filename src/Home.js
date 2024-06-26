import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import {COLORS, genericStyles, SIZES} from './constants';
import CardBox from './CardBox';
import New from './New';

const Home = () => {
  return (
    <ScrollView
      style={genericStyles.container}
      showsVerticalScrollIndicator={false}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1562832135-14a35d25edef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1245&q=80',
          width: '100%',
          height:
            Platform.OS === 'web' ? SIZES.height * 0.8 : SIZES.height * 0.25,
        }}
        resizeMethod="auto"
        // resizeMode="contain"
      />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: 20,
          flexWrap: 'wrap',
        }}>
        <CardBox />
        <CardBox />
        <CardBox />
        <CardBox />
      </View>
      <View
        style={{
          backgroundColor: COLORS.darkgray,
          justifyContent: 'center',
          alignItems: 'center',
          padding: Platform.OS === 'web' ? 30 : 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontStyle: 'italic',
            fontWeight: '700',
            color: 'white',
            width: Platform.OS === 'web' ? '60%' : '100%',
            lineHeight: 23,
            fontSize: 16,
          }}>
          What's inside in the Moon? Image result for moon contents At the
          center is the Moon's dense, metallic core. The core is largely
          composed of iron and some nickel. The inner core is a solid mass about
          480 km in diameter. Surrounding the solid inner core is a fluid outer
          core, that brings the total diameter of the core to about 660 km
        </Text>
      </View>
      <New />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
