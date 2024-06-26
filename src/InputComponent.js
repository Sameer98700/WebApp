import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, genericStyles} from './constants';
import {Input} from '@rneui/themed';

const InputComponent = ({
  placeholder,
  iconName,
  iconSize,
  errorStyle,
  inputContainerStyle,
  inputStyle,
  containerStyle,
  onChangeText,
  value,
  keyboardType,
  maxLength,
  onSubmitEditing,
  ref,
  iconOnpress,
  secureTextEntry,
  multiline,
  iconColor,
  autoCapitalize,
  onKeyPress,
  autoFocus,
}) => {
  return (
    <Input
      placeholder={placeholder}
      placeholderTextColor={COLORS.white}
      containerStyle={[styles.inputContainer, {...containerStyle}]}
      inputContainerStyle={[
        {width: Platform.OS === 'web' ? '97%' : '95%', alignSelf: 'center'},
        genericStyles.borderColor(COLORS.secondary),
        {...inputContainerStyle},
      ]}
      inputStyle={[styles.inputStyle, {...inputStyle}]}
      errorStyle={[genericStyles.fontSize(0), {...errorStyle, marginBottom: 0}]}
      rightIcon={{
        name: iconName,
        type: 'ionicon',
        color: COLORS.primary,
        size: iconSize,
        onPress: iconOnpress,
      }}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      maxLength={maxLength}
      onSubmitEditing={onSubmitEditing}
      ref={ref}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
      multiline={multiline}
      onKeyPress={onKeyPress}
      autoFocus={autoFocus}
    />
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    // width: '96%',
    // marginHorizontal: 10,
  },
  inputStyle: {
    // fontFamily: FONTS.InterRegular,
    color: COLORS.third,
    fontSize: 14,
    marginLeft: -3,
  },
});
