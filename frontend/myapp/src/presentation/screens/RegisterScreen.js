import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importa Picker desde @react-native-picker/picker

const provincias = {
  BuenosAires: ['La Plata', 'Mar del Plata', 'Bahía Blanca'],
  Cordoba: ['Córdoba', 'Villa Carlos Paz', 'Río Cuarto'],
  SantaFe: ['Rosario', 'Santa Fe', 'Rafaela'],
  // Agrega más provincias y ciudades según sea necesario
};

const RegisterScreen = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
//  const [provincia, setProvincia] = useState('');
  //const [ciudad, setCiudad] = useState('');
  const [provincias, setProvincias] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [provincia, setProvincia] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordBorderColor, setPasswordBorderColor] = useState('#ccc');
  const [repeatPasswordBorderColor, setRepeatPasswordBorderColor] = useState('#ccc');
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    fetch('https://apis.datos.gob.ar/georef/api/provincias')
      .then(response => response.json())
      .then(data => setProvincias(data.provincias))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleProvinciaChange = (itemValue) => {
    setProvincia(itemValue);
    setMunicipio('');
    fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${itemValue}`)
      .then(response => response.json())
      .then(data => setMunicipios(data.municipios))
      .catch(error => console.error('Error:', error));
  };

  const handleRegister = () => {
    if (!nombre || !apellido || !provincia || !ciudad || !email || !telefono || !password || !repeatPassword) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }

    if (password !== repeatPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    // Aquí puedes agregar la lógica para registrar al usuario
    Alert.alert('Registro exitoso', `Bienvenido, ${nombre} ${apellido}`);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    if (text === repeatPassword) {
      setPasswordBorderColor('green');
      setRepeatPasswordBorderColor('green');
      setErrorMessage('');
    } else {
      setPasswordBorderColor('red');
      setRepeatPasswordBorderColor('red');
      setErrorMessage('Las contraseñas no coinciden');
    }
  };

  const handleRepeatPasswordChange = (text) => {
    setRepeatPassword(text);
    if (text === password) {
      setPasswordBorderColor('green');
      setRepeatPasswordBorderColor('green');
      setErrorMessage('');
    } else {
      setPasswordBorderColor('red');
      setRepeatPasswordBorderColor('red');
      setErrorMessage('Las contraseñas no coinciden');
    }
  };

  return (
    <ImageBackground source={require('../../../assets/registro/reg1.jpg')} style={styles.background}>
    <ScrollView contentContainerStyle={styles.container}>
   
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
      />

<Picker
          selectedValue={provincia}
          style={styles.input}
          onValueChange={handleProvinciaChange}
        >
          <Picker.Item label="Selecciona una provincia" value="" />
          {provincias.map((prov) => (
            <Picker.Item key={prov.id} label={prov.nombre} value={prov.id} />
          ))}
        </Picker>
      
        <Picker
          selectedValue={municipio}
          style={styles.input}
          onValueChange={(itemValue) => setMunicipio(itemValue)}
          enabled={provincia !== ''}
        >
          <Picker.Item label="Selecciona un municipio" value="" />
          {municipios.map((mun) => (
            <Picker.Item key={mun.id} label={mun.nombre} value={mun.id} />
          ))}
        </Picker>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        keyboardType="phone-pad"
        value={telefono}
        onChangeText={setTelefono}
      />
      <TextInput
        style={[styles.input, { borderColor: passwordBorderColor }]}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />
      <TextInput
        style={[styles.input, { borderColor: repeatPasswordBorderColor }]}
        placeholder="Repetir Contraseña"
        secureTextEntry
        value={repeatPassword}
        onChangeText={handleRepeatPasswordChange}
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <Button title="Registrarse" onPress={handleRegister} />
    </ScrollView>
        </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  title: {
    fontSize: 44,
    marginBottom: 16,
    color: '#ffffff',
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '5%',
    fontSize: 16,
    marginTop: 16,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#ccc',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 2,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  errorText: {
    color: 'red',
    
    marginBottom: 12,
  },
});

export default RegisterScreen;