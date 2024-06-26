import {
  Text,
  Image,
  View,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, genericStyles} from './constants';
import ButtonComponent from './ButtonComponent';
import InputComponent from './InputComponent';

const FirstCompo = ({navigation}) => {
  const [visible, setVisible] = useState(true);
  const [MN, setMobile] = useState('');
  const [password, setPass] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: Platform.OS === 'web' ? '70%' : '100%',
          alignSelf: 'center',
          marginTop: Platform.OS === 'web' ? 100 : 50,
        }}>
        <View style={genericStyles.selfCenter}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
              width: 200,
              height: 200,
            }}
            style={{borderRadius: 100, marginVertical: 20}}
          />
        </View>
        <View style={genericStyles.mb(10)}>
          <InputComponent
            placeholder="Mobile Number"
            iconName="call"
            iconSize={25}
            maxLength={10}
            errorStyle={genericStyles.fontSize(5)}
            value={MN}
            keyboardType="number-pad"
            onChangeText={text => setMobile(text)}
          />
          <InputComponent
            placeholder="Password"
            iconName={visible ? 'eye' : 'eye-off'}
            iconOnpress={() => setVisible(!visible)}
            iconSize={25}
            value={password}
            secureTextEntry={visible}
            onChangeText={text => setPass(text)}
            errorStyle={genericStyles.fontSize(5)}
          />
        </View>
        <View style={styles.CheckBox}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <ButtonComponent
          title="SIGN IN"
          onPress={() => navigation.navigate('Home')}
          titleStyle={{color: 'black'}}
        />
        <View style={styles.signUpBtn}>
          <Text style={styles.signUp}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.signUpBtn2}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default FirstCompo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  forgotText: {
    marginRight: 20,
    color: '#337FF5',
    fontSize: 16,
    // fontFamily: FONTS.InterRegular,
  },
  CheckBox: {
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  signUp: {
    fontSize: 16,
    color: '#666666',
    // fontFamily: FONTS.InterRegular,
  },
  signUpBtn: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  signUpBtn2: {
    fontSize: 16,
    color: COLORS.primary,
    // fontFamily: FONTS.InterSemiBold,
  },
  inputStyle: {
    // fontFamily: FONTS.InterRegular,
    fontSize: 14,
  },
});
