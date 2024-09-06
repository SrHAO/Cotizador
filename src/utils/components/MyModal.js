import React from 'react';
import {StyleSheet, Text, View, Modal, Button, Dimensions} from 'react-native';

export default function MyModal({isModalOpen, setIsModalOpen, isDarkMode}) {
  const modalContainerStyle = {
    flex: 1,
    justifyContent: 'flex-end',
  };

  const modalStyle = {
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    margin: 20,
    borderRadius: 16,
    paddingHorizaontal: 30,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      with: 100,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
  };

  return (
    <>
      <Modal visible={isModalOpen} transparent={true} animationType={'fade'}>
        <View style={modalContainerStyle}>
          <View style={modalStyle}>
            <Text>Bienvenido</Text>
            <Text>Este es un cotizador de prestamos sencillo</Text>
            <Text>Creado por: Navarrete Sánchez Alan Yoab</Text>
            <Text>Recorando que es solo una practica espero que sea agradable</Text>
            <Text></Text>
            <Button
              title="Close"
              onPress={() => setIsModalOpen(!setIsModalOpen)}></Button>
          </View>
        </View>
      </Modal>
    </>
  );
}
