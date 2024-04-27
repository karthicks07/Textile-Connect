import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Largepeople({navigation}) {
  return (
    <View style={styles.container}>
     <View style={styles.topview}>
     <TouchableOpacity onPress={()=> navigation.goBack()}><Image source={require('../assets/pics/arrow.png')} style={styles.frontimg}/></TouchableOpacity>
     <TouchableOpacity onPress={()=> navigation.navigate('User')}>
      <Image source={require('../assets/pics/profile.png')} style={styles.frontimg}/>
      </TouchableOpacity>
     </View>
     <View style={styles.smallpeople}>
     <Image source={require('../assets/pics/largepeople.png')} style={styles.people}/>
     </View>
     <View style={{height:10}}/>
     <View style={styles.smallpeople}>
     <Image source={require('../assets/pics/largepeopledet.png')} style={styles.people}/>
     </View>
     <View style={styles.btnview}>
        <TouchableOpacity onPress={()=> navigation.navigate('Orders')}>
          <View style={styles.btn}>
            <Text style={{fontSize:16}}>Orders</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Connect')} >
          <View style={styles.btn}>
            <Text style={{fontSize:16}}>Connect</Text>
          </View>
        </TouchableOpacity>
      </View>
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
  smallpeople:
  {
    height:250,
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center'
  },
  people:
  {
    height:200,
    width:'80%',
  },
  btnview:
  {
    height:100,
    width:'100%',
    display:'flex',
    flexDirection:'row',
    alignItems:'space-between',
    justifyContent:'space-around',
  },
  btn:{
    height:40,
    width:100,
    borderRadius:100,
    backgroundColor:'#1ECB44',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
   }
 
  
});
