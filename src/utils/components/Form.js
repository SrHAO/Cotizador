import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Picker} from 'react-native-picker-selector';
import colors from '../colors';

export default function Form(props) {
  const {setCapital, setInterest, selectedOption, setSelectedOption} = props;

  const options = [
    {value: 3, label: '3 Meses'},
    {value: 6, label: '6 Meses'},
    {value: 9, label: '9 Meses'},
    {value: 12, label: '12 Meses'},
    {value: 18, label: '18 Meses'},
    {value: 24, label: '24 Meses'},
  ];

  const handlePicker = item => {
    setSelectedOption(item);
  };

  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Cantidad a pedir"
          keyboardType="numeric"
          style={styles.input}
          onChange={e => setCapital(e.nativeEvent.text)}
        />

        <TextInput
          placeholder="Interest %"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]}
          onChange={e => setInterest(e.nativeEvent.text)}
        />
      </View>
      <Picker
        placeholder="Select an option"
        currentValue={selectedOption}
        onValueChange={item => handlePicker(item)}
        containerStyle={{
          fontSide: 16,
          paddingHorizontal: 10,
          paddingVertical: 8,
          borderWidth: 0.5,
          borderColor: 'white',
          borderRadius: 8,
          color: 'white',
          paddingRight: 30,
        }}
        //style = {pickerSelectStyles}
        //icon={<Icon name="chevron-down" />}
      >
        {options.map(option => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
            textStyle={{color: 'green'}}
          />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: -3,
    width: '85%',
    paddingVertical: 50,
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 150,
    justifyContent: 'center',
  },

  viewInputs: {
    flexDirection: 'row',
  },

  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },

  inputPercentage: {
    width: '40%',
    marginLeft: 15,
  },
});
