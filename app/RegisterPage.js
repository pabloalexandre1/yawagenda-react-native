import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logoHome} source={require('../assets/yawara-logo-render.png')}></Image>
      <Text style={styles.mainText}>YawAgenda</Text>
      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.mainInput} placeholder="Seu Nome"></TextInput>
      <Text style={styles.label}>Nome do Negócio</Text>
      <TextInput style={styles.mainInput} placeholder="Seu Negócio"></TextInput>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.mainInput} placeholder="Seu Email"></TextInput>
      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.mainInput} placeholder="Sua Senha" secureTextEntry={true}></TextInput>
      <Text style={styles.label}>Confirme Sua Senha</Text>
      <TextInput style={styles.mainInput} placeholder="Sua Senha" secureTextEntry={true}></TextInput>
      <View style={styles.spacer}></View>
      <Link style={styles.mainBtn} href="#">
        <TouchableOpacity><Text style={styles.textBtn}>Entrar</Text></TouchableOpacity>
      </Link>
      <View style={styles.spacer}></View>
      <Link style={styles.mainBtn} href="/RegisterPage">
        Registrar
      </Link>
      <StatusBar style="auto" />
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
  logoHome: {
    width: 160,
    height: 190
  },
  mainText: {
    color: '#bea562',
    fontSize: 15
  },
  label: {
    color: '#bea562',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 5
  },
  mainInput: {
    width: 200,
    height:30,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom:5,
  },
  mainBtn: {
    backgroundColor: "#bea562",
    color: '#fff',
    borderRadius: 3,
    fontSize:15,
    padding: 7

  },
  textBtn: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center'
  },
  spacer: {
    margin:8
  }
});