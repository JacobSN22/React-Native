import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, path, FlatList } from 'react-native';

const arrData = [
  { id: 1, title: 'Item 1'},
  { id: 2, title: 'Item 2'},
  { id: 3, title: 'Item 3'},
]

const ListItem = props => {
  return (
    <View style={styles.listitem}>
      <Text style={styles.listitemtxt}>{props.title}</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headline}>TODOLIST</Text>          
        <Image source={require('./assets/hlogo.png')} style={styles.logo}></Image>
      </View>
      <View style={styles.main}>
        <FlatList data={arrData} renderItem={itemData => {
          return <ListItem title={itemData.item.title}></ListItem>
        }}>

        </FlatList>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor: '#fff',
    borderColor: 'black'
  },
  header: {
    backgroundColor: 'darkcyan',
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  headline: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  logo: {
    width: 50,
    height: 50,
  },
  main: {
    height: 500,
    padding: 20
  },
  listitem: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    backgroundColor: 'teal',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 15,
    marginBottom: 5,
  },
  listitemtxt: {
    color: 'white',
    fontWeight: 'bold'
  }

});
