import React from 'react';
import Home from './Home';
import FirstCompo from './FirstCompo';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Icon} from '@rneui/themed';
import {Text, View} from 'react-native';
import {SIZES} from './constants';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{
        header: props => {
          return (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#000',
                alignItems: 'center',
                height: SIZES.height / 14,
              }}>
              <Icon
                size={20}
                color="white"
                type="ionicon"
                containerStyle={{marginHorizontal: 10}}
                name="arrow-back"
                onPress={() => props.navigation.goBack()}
              />
              <Text style={{color: 'white', fontSize: 18, marginBottom: 3}}>
                {props.route.name}
              </Text>
            </View>
          );
        },
      }}>
      <Stack.Screen
        name="Login"
        component={FirstCompo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
