import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Today's Tasks</Text>
      <View style={styles.items}>
        <Task text={'Water my plants'}/>
        <Task text={'Call Jason'}/>
        <Task text={'Order a present for dad'}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  tasksWrapper: {
   paddingTop: 80,
   paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    paddingTop: 40,
    marginLeft: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30
  }
});
