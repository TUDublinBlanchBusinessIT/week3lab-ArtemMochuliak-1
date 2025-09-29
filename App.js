import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Logo from './components/Logo';

export default function App() {
  const [fullname, setFullname] = useState("Artem Mochuliak");
  const [fname, setFname] = useState("Joe");
  const [lname, setLname] = useState("Bloggs");
  const [dob, setDob] = useState("22 August 1990");

  function buttonClicked() {
  alert(`Hello ${fname} ${lname}. You were born on ${dob}.`);
}

  return (
    <View style={styles.container}>
      <Logo />

      <Text style={styles.paragraph}>Hello, World {fullname}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={text => setFullname(text)}
        value={fullname}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your firstname"
        onChangeText={setFname}
        value={fname}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your lastname"
        onChangeText={setLname}
        value={lname}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your date of birth"
        onChangeText={setDob}
        value={dob}
      />

      <Text style={styles.outputText}>
        Hello {fname} {lname}. You were born on {dob}.
      </Text>

      <Button title="SUBMIT" onPress={buttonClicked} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  outputText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});
