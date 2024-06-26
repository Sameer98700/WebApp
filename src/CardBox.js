import {Image, Platform, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Card} from '@rneui/themed';
import {COLORS, genericStyles, SIZES} from './constants';
import {TouchableOpacity} from 'react-native';

const CardBox = ({onPress, style}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        {
          width: Platform.OS === 'web' ? SIZES.width / 5 : SIZES.width / 2.3,
          marginHorizontal: 10,
          marginBottom: 20,
        },
        {...style},
      ]}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        }}
        resizeMethod="auto"
        style={[styles.colorCard, genericStyles.shadow]}
      />
      <Card containerStyle={[styles.whiteCard, genericStyles.shadow]}>
        <Text
          numberOfLines={1}
          style={[genericStyles.fontSize(14), {color: 'black'}]}>
          MOON
        </Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CardBox;

const styles = StyleSheet.create({
  colorCard: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: Platform.OS === 'web' ? 100 : 80,
    marginHorizontal: 13,
    flexWrap: 'wrap',
  },
  whiteCard: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    marginHorizontal: 13,
    height: Platform.OS === 'web' ? 80 : 60,
  },
});
