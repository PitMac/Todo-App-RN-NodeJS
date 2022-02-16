import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect} from 'react/cjs/react.development';
import {createTask, deleteTask, getTask, updateTask} from '../Api/api';

export default function CreateTasks({route}) {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const loadT = async id => {
    setLoading(true);
    const res = await getTask(id);
    setTitle(res.title);
    setDescription(res.description);
    setLoading(false);
  };

  useEffect(() => {
    if (route.params.id !== 0) {
      loadT(route.params.id);
    }
  }, []);

  const handleDelete = async id => {
    setLoading(true);
    const res = await deleteTask(id);
    setLoading(false);
    Alert.alert('Perfect', res.message);
    navigation.goBack();
  };

  const handleChange = async () => {
    if (route.params.id === 0) {
      setLoading(true);
      const tas = await createTask(title, description);
      setLoading(false);
      Alert.alert('Perfect', tas.message);
      navigation.goBack();
    } else {
      setLoading(true);
      const tas = await updateTask(route.params.id, title, description);
      setLoading(false);
      Alert.alert('Perfect', tas.message);
      navigation.goBack();
    }
  };

  if (loading) {
    return <ActivityIndicator size="large"></ActivityIndicator>;
  }

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.viewInp}>
          <Text style={styles.textBig}>Title:</Text>
          <TextInput
            onChangeText={text => setTitle(text)}
            value={title}
            style={styles.textInput}
            placeholder="Ingrese el title"
          />
        </View>
        <View style={styles.viewInp}>
          <Text style={styles.textBig}>Description:</Text>
          <TextInput
            value={description}
            onChangeText={text => setDescription(text)}
            style={styles.textInput}
            placeholder="Ingrese el description"
          />
        </View>
        {route.params.id !== 0 ? (
          <>
            <TouchableOpacity
              onPress={handleChange}
              style={styles.buttonContainer}>
              <Text style={styles.textButton}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleDelete(route.params.id)}
              style={styles.buttonContainer}>
              <Text style={styles.textButton}>Delete</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            onPress={handleChange}
            style={styles.buttonContainer}>
            <Text style={styles.textButton}>Create</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    paddingTop: 50,
  },
  textBig: {
    color: 'black',
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewInp: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#063970',
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: 90,
    height: 40,
    backgroundColor: '#063970',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  textButton: {
    fontSize: 20,
    color: 'white',
  },
});
