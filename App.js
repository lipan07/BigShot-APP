import reactDom from 'react-dom'
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native'
import { useState } from 'react'
import ApiCall from './components/ApiCall'

export default function App() {

  const [value, setValue] = useState('')
  const [allValues, setAllValues] = useState([])

  function handleKeyChange(val) {
    setValue(val);
  }

  function handleButtonSubmit() {
    setAllValues(currentValues => [...currentValues, value])
  }
  console.log(allValues);

  return (
    <View style={styles.container}>
      <View style={styles.nestedContainer}>
        <Text style={{ color: 'red', fontWeight: 'bold', borderBottomWidth: 1, borderColor: 'blue' }}>My First React Native App</Text>
      </View>
      <TextInput onChangeText={handleKeyChange} style={styles.inputPaddingContainer} placeholder="Please type something here.." />
      <Button onPress={handleButtonSubmit} style={styles.buttonPaddingContainer} title="Submit" />


      <View >
        <ScrollView>
          {
            allValues.map((item, index) => (
              <Text style={styles.tableContainer} key={index}>{item}</Text>
            ))
          }
        </ScrollView>
      </View>

      <ApiCall />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    JustifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%'
  },
  nestedContainer: {
    JustifyContent: 'center',
    alignItems: 'center'
  },
  inputPaddingContainer: {
    marginTop: '10%',
    marginBottom: '10px',
    padding: '3%',
    borderColor: 'green',
    borderWidth: 1,
  },
  buttonPaddingContainer: {
    marginTop: '10px',
    marginBottom: '10px',
    padding: '3%',
  },
  tableContainer: {
    backgroundColor: 'red',
    marginBottom: '2px',
    borderRadius: '5px',
    padding: '10px'
  }
})