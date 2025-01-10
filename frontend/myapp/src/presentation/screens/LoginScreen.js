import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, ImageBackground, TouchableOpacity, Image, StatusBar, SafeAreaView } from 'react-native';
//import { postData } from '../../data/sources/api';
import { useNavigation } from '@react-navigation/native'; // Importa el hook useNavigation

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Usa el hook useNavigation

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }
/*
    try {
      const response = await postData('/login', { email, password });
      Alert.alert('Login exitoso', `Bienvenido, ${response.user.name}`);
      // Aquí puedes agregar la lógica para navegar a otra pantalla o guardar el token de autenticación
    } catch (error) {
      Alert.alert('Error', 'Credenciales incorrectas o error en el servidor');
    }*/
  };

  
  return (
    <SafeAreaView style={styles.safeArea}>
    <StatusBar barStyle="light" />
    <ImageBackground source={require('../../../assets/login/fondoinicio.png')} style={styles.background}>
      <View style={styles.container}>
   
      
        <Image source={require('../../../assets/login/LogoApp.png')} style={styles.logo} />
       
        <Text style={styles.emailLabel}>Email</Text>
        <TextInput
          style={styles.emailInput}
          placeholder="Email"
           placeholderTextColor="rgba(0, 0, 0, 0.7)"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
           <Text style={styles.passwordLabel}>Contraseña</Text>
        <TextInput
          style={styles.passwordInput}
          placeholder="Contraseña"
          placeholderTextColor="rgba(0, 0, 0, 0.7)"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
       
        <TouchableOpacity style={styles.btnIniciar} onPress={handleLogin}>
          <Image source={require('../../../assets/login/icon-futbol.png')} style={styles.btnImage} />
          <Text style={styles.btnText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRegistrar} onPress={() => navigation.navigate('Register')}>
          <Image source={require('../../../assets/login/icon-registro.png')} style={styles.btnImageReg} />
          <Text style={styles.btnText}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnIniciarGoogle} onPress={handleLogin}>
          <Image source={require('../../../assets/login/icon-chrome.png')} style={styles.btnImageGoog} />
          <Text style={styles.btnText}>Iniciar Sesión con Google</Text>
        </TouchableOpacity>
       
      </View>
    </ImageBackground>
       </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  title: {
    fontSize: 44,
    top: -100,
    color: '#ffffff',
    margin: 0,
    marginBottom: -80,
    textAlign: 'center',
  },
  logo: {
    width: 200, // Ajusta el tamaño de la imagen según sea necesario
    height: 200,
    position: 'absolute',
    top: 20,
  },
  emailLabel: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    left: -18,
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 8,
  },

  emailInput: {
    width: '90%',
    height: 50,
   
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    
    top: 0,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 10,
  },  
  passwordLabel: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    fontSize: 20,
    left: -18,
    color: '#ffffff',
    marginBottom: 8,
  },
  passwordInput: {
    width: '90%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 22,
    paddingHorizontal: 8,
 
    top: 0,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius:10,
  },
  btnIniciar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
   
    backgroundColor: 'rgb(76, 175, 80)',
    padding: 5,
    borderRadius: 50,
    marginBottom: 12,
    marginTop: 20, // Separar del resto de los elementos
    width: '90%',
  },
  btnImage: {
    width: 34, // Ajusta el tamaño de la imagen según sea necesario
    height: 34,
    marginRight: 10,
    left: -65,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    marginRight: 10,
  },
  btnRegistrar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(33, 149, 243, 0.64)',
    padding: 5,
    borderRadius: 50,
    marginBottom: 12,
    width: '90%',
  },
  btnImageReg: {
    width: 34, // Ajusta el tamaño de la imagen según sea necesario
    height: 34,
    marginRight: 10,
    left: -74,
  },
  btnIniciarGoogle:{
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(219, 68, 55)',
    padding: 5,
    borderRadius: 50,
    marginBottom: -250,
    
  },
  btnImageGoog: {
    width: 34, // Ajusta el tamaño de la imagen según sea necesario
    height: 34,
    marginRight: 10,
    left: -10,
  },
});


export default LoginScreen;
