import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, path } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TODOLIST
          <Image style={{height: 150, width: 150}}
          source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}/>
        </Text>          

      </View>
      <View>
      <TextInput
        style={{height: 40}}
        placeholder="Opgave title"
      />
      </View>

      <View>
        <View>
          <Text>Learn React</Text>

        </View>
        
        <View>
          <Text>Learn React Native</Text>
        </View>

        <View>
          <Text>Learn Javascript</Text>
        </View>

        <View>
          <Text>Learn Next.js</Text>
        </View>

        <View>
          <Text>Learn SASS</Text>
        </View>

        <View>
          <Text>Learn Python</Text>
        </View>

        <View>
          <Text>Learn react</Text>
        </View>

        <View>
          <Text>Learn react</Text>
        </View>

        <View>
          <Text>Learn react</Text>
        </View>
      </View>

      
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#008080',
    width: 400,
  },
  headerText: {
    fontSize: 40,
    paddingBottom: 70
  }

});
