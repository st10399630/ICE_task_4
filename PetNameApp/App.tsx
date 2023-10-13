import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const App = () => {
  const [favoriteAnimal, setFavoriteAnimal] = useState('');
  const [suggestedName, setSuggestedName] = useState('');

  const handleSuggestName = () => {
    const animal = favoriteAnimal.toLowerCase();
    let name = '';

    switch (animal) {
      case 'dog':
        name = 'Lucy';
        break;
      case 'cat':
        name = 'Ginger';
        break;
      case 'rabbit':
        name = 'Roderick';
        break;
      case 'parrot':
        name = 'Cracker';
        break;
      default:
        name = 'This animal would not make a good pet.';
        break;
    }

    setSuggestedName(name);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Enter your favorite animal:</Text>
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 10,
        }}
        onChangeText={text => setFavoriteAnimal(text)}
        value={favoriteAnimal}
      />
      <Button
        title="Suggest a Name"
        onPress={handleSuggestName}
      />
      <Text style={{ marginTop: 20 }}>{suggestedName}</Text>
    </View>
  );
};

export default App;
