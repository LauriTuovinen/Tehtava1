import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';



export default function App() {
  const [age, setAge] = useState('');
  const [lower, setLower] = useState(0);
  const [upper, setUpper] = useState(0);


function calculate(){
    const lower = (220-age)*0.65;
    const upper = (220-age)*0.85;
    setLower(lower);
    setUpper(upper);
}

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput style={styles.field} value = {age} onChangeText={text => setAge(text)}
      keyboardType='decimal-pad'/>
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{lower.toFixed()} - {upper.toFixed()}</Text>
      <Button onPress={calculate} title="calculate"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field:{
    marginBottom: 10,
  }
});
