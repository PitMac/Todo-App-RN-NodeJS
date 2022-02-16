import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {getTasks} from '../Api/api';
import TaskList from '../components/TaskList';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  const getATasks = async () => {
    const res = await getTasks();
    setTasks(res);
  };

  useEffect(() => {
    getATasks();
  }, [tasks]);

  return (
    <View style={styles.scroll}>
      <TaskList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: 'white',
  },
});
