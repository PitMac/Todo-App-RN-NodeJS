import * as React from 'react';
import Tasks from '../screens/Tasks';
import CreateTasks from '../screens/CreateTasks';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/core';
import {Text, TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();

export default function StackNav() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#063970',
        },
      }}>
      <Stack.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Task', {
                  id: 0,
                  title: '',
                  description: '',
                })
              }>
              <Text style={{color: 'white', fontSize: 25}}>+</Text>
            </TouchableOpacity>
          ),
        }}
        name="Tasks"
        component={Tasks}
      />
      <Stack.Screen name="Task" component={CreateTasks} />
    </Stack.Navigator>
  );
}
