import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
  useColorScheme,
} from 'react-native';
import Form from './src/utils/components/Form';
import Footer from './src/utils/components/Footer';
import colors from './src/utils/colors.js';
import ResultCalculation from './src/utils/components/ResultCalculation';
import MyModal from './src/utils/components/MyModal';
import MainStack from './src/utils/Navigation/MainStack';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const [isModalOpen, setIsModalOpen] = useState(false); // esto es para el Modal

  const [capital, setCapital] = useState(null); // estructura=> [variable, variable a settear]= hook
  const [interest, setInterest] = useState(null);
  const [total, setTotal] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [errorMessage, seterrorMessage] = useState(null);
  const months = selectedOption?.value;

  useEffect(() => {
    if (capital && interest && months) {
      calculate();
    } else {
      reset();
    }
  }, [capital, interest, months]);

  const calculate = () => {
    reset();

    if (!capital) {
      seterrorMessage('Anota la cantidad a solicitar');
    } else if (!interest) {
      seterrorMessage('Ingresa el interes a pagar');
    } else if (!months) {
      seterrorMessage('Seleciona los meses a pagar');
    } else {
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2),
        totalPayable: (fee * months).toFixed(2),
      });
    }
  };

  const reset = () => {
    seterrorMessage("");
    setTotal(null);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>

        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </SafeAreaView>

      <ResultCalculation
        capital={capital}
        interest={interest}
        months={months}
        total={total}
        errorMessage={errorMessage}
      />

      <Footer />
      <Footer calculate={calculate} />

      <MyModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Button
        title="InFormación"
        onPress={() => setIsModalOpen(!isModalOpen)}
      />
      
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 200,
    alignItems: 'center',
    backgroundColor: colors.PRIMARY_COLOR,
  },

  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    posiotion: 'absolute',
    zIndex: -1,
  },

  titleApp: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },

  botton: {
    backgroundColor: colors.PRIMARY_COLOR,
    padding: 16,
    borderRadius: 50,
    width: '75%',
  },
});

const textStyle = {
  //color: isDarkMode ? 'White' : 'black',
  fontSize: 10,
  fontWeight: 'bold',
};
