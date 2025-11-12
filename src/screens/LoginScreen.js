import { View, Text, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 16 }}>Pantalla de Login</Text>
      <Button title="Entrar al Feed" onPress={() => navigation.navigate('Feed')} />
    </View>
  );
}
