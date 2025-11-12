import { View, Text, Button } from 'react-native';

export default function FeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 16 }}>Feed Principal</Text>
      <Button title="Ir al Perfil" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
