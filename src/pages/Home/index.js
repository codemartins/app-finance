import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto Conta Luz',
    value: '300,90',
    date: '17/09/2024',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: '20/09/2024',
    type: 1 // receitas / entradas
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.200,00',
    date: '22/09/2024',
    type: 1 // receitas / entradas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name= "Germeson Martins"/>

      <Balance saldo="10.250,00" gastos="-3.245,00"/>

      <Actions/>
      
      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item}/> }

      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',    
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
