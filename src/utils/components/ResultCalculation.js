import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ResultCalculation(props) {
  const {capital, interest, months, total, errorMessage} = props;
  //console.log(props);
  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>RESUMEN</Text>

          <DataResults title="Cantidad Solicitada: " value={`${capital}`} />
          <DataResults title="Interes: " value={`${interest} % `} />
          <DataResults title="Plazos: " value={`${months} meses`} />
          <DataResults title="Pago mensual: " value={`${total.monthlyFee}`} />
          <DataResults
            title="Total a Pagar :"
            value={`${total.totalPayable}`}
          />
        </View>
      )}

      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

function DataResults(props) {
  const {title, value} = props;

  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    marintop: 150,
    marginHorizontal: 50,
  },
  boxResult: {
    padding: 50,
  },

  title: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },

  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
