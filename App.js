import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState('');
  const [numero, setNumero] = useState('');
  const [lembretes, setLembretes] = useState([]);
  const [contadorLembretes, setContadorLembretes] = useState(10);

  //captura o texto digitado
  const capturarLembrete = (lembrete) => {
    setLembrete(lembrete)
  };
  const capturarNumero = (numero) => {
    setNumero(numero)
  };

  //para adicionar o que foi digitado
  const adicionarLembrete = () => {
    setLembretes(lembretes => {
      console.log(lembretes);
      setContadorLembretes(contadorLembretes + 10);
      return [...lembretes, {
        key: "Id: "+contadorLembretes.toString(),
        value:  "Nome: "+lembrete,
        value1: "Numero: "+numero
      }];
    });
  }
  return (
    <View style={styles.telaPrincipalView}>
      <View style={styles.lembreteView}>
        {/*O usuário irá inserir os lembretes aqui*/}
        
        <TextInput placeholder="Nome"
          style={styles.lembreteInputText}
          onChangeText={capturarLembrete}
          value={lembrete}
          
        />
         
        {/*O usuário irá inserir os Numero aqui*/}
        <TextInput placeholder="Numero"
          style={styles.lembreteInputText}
          onChangeText={capturarNumero}
          value={numero}
        />


        <Button title="Adicionar Contato"
          onPress={adicionarLembrete}
        />
      </View>
      <FlatList
        data={lembretes}/*coleção de lembretes*/
        renderItem={ /*mapeamento*/
          lembrete => (/*dado um lembrete gera uma view*/
            <View style={styles.itemNaLista}>
              <Text>{lembrete.item.key}</Text>
              <Text>{lembrete.item.value}</Text>
              <Text>{lembrete.item.value1}</Text>
            </View>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 50
    
  },
  lembreteView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  lembreteInputText: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 8
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#6495ED',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }
  
});
