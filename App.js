import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangePassword = (text) => {
    setPassword(text);
  }

  const onChangeEmail = (text) => {
    setEmail(text);
  }
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Image source={require("./assets/yawara-logo.png")} style={styles.mainLogo}></Image>
      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.title} >Email</Text>
      <TextInput style={styles.textInput} placeHolder='Seu Email' onChangeText={onChangeEmail}></TextInput>
      <Text style={styles.title} >Senha</Text>
      <TextInput style={styles.textInput} secureTextEntry={true} placeHolder='Sua Senha' onChangeText={onChangePassword}></TextInput>
      <TouchableOpacity color="#bea562" style={styles.btn}>
        <Text>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity color="#bea562" style={styles.btn}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainLogo: {
    width: 110,
    height: 130,
    padding: 20
  },
  title: {
    color: '#bea562',
    marginTop: 20,
    marginBottom: 20
  },
  textInput: {
    backgroundColor: '#fff',
    height: 31,
    width: 200,
    fontSize: 15
  },
  btn: {
    backgroundColor: '#bea562',
    width: 100,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30

  },
  btnText: {
    color: '#212121',
    textAlign: 'center'
  }
});
