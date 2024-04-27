import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native';

export default function Connect({navigation}) {


  const DialPad = async (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
     <View style={styles.topview}>
      <TouchableOpacity>
     <Image source={require('../assets/pics/arrow.png')} style={styles.frontimg}/>
     </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('User')}>
      <Image source={require('../assets/pics/profile.png')} style={styles.frontimg}/>
      </TouchableOpacity>
     </View>
     <View style={styles.picview}>
      <Image source={require('../assets/pics/connection.png')} style={styles.pic}/>
       
      </View>
      <View style={{height:40}}/>
      <TouchableOpacity onPress={() => DialPad(6381145567)}>
      <View style={styles.peopleview}>
      <Image source={require('../assets/pics/connect1.png')} style={styles.people}/>
      </View>
      </TouchableOpacity>
      <View style={{height:80}}/>
      <TouchableOpacity onPress={() => DialPad(6381145567)}>
      <View style={styles.peopleview}>
      <Image source={require('../assets/pics/connect2.png')} style={styles.people}/>
      </View>
      </TouchableOpacity>
      <View style={{height:100}}/>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    gap:20,
    
  },
  topview:
  {
    height:100,
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  frontimg:
  {
    height:50,
    width:50
  },
  input:
  {
    height:56,
    width:300,
    borderRadius:100,
    paddingHorizontal:20,
    borderColor:'#151378',
    borderWidth:3,
    backgroundColor:'#1ECB44'
  },
  picview:
  {
    height:80,
    width: '100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'

  },
  pic:{
    height:80,
    width:'75%'
  },
  peopleview:
  {
    height:150,
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center'
  },
  people:
  {
    height:150,
    width:'80%',
    marginRight:35
  }
  
});
