import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
     <View style={styles.top}>
      <TouchableOpacity onPress={()=> navigation.navigate('Login')}><Image source={require('../assets/pics/Vector.png')} style={styles.pic}/></TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('User')}><Image source={require('../assets/pics/profile.png')} style={styles.pic}/></TouchableOpacity>
     </View>
     <View style={styles.homeview}>
     <Image source={require('../assets/pics/home-logo.png')} style={styles.home}/>
     </View>
     <View style={{marginBottom:50}}>
    </View>
    <TouchableOpacity onPress={()=> navigation.navigate('Smallscale')}>
     <View style={styles.indusview}>
     <Image source={require('../assets/pics/smallscale.png')} style={styles.indus}/>
     </View>
     </TouchableOpacity>
     <View style={{marginBottom:50}}>
    </View>
     <View style={styles.indusview}>
    <TouchableOpacity onPress={()=> navigation.navigate('Largescale')}>
     <Image source={require('../assets/pics/largescale.png')} style={styles.indus}/>
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
  top:{
    marginTop:10,
    height:80,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%' },
  pic:{
    marginTop:10,
    height:48,
    width:50
  },
  pic1:{
    marginTop:10,
    height:92,
    width:90
  },
 homeview:
 {
      height:150,
      width:'100%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center'
 },
 home:
 {
    height:150,
    width:195,
 },
 indusview:
 {
    height:150,
    width:195,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center'

 },
 indus:
 {
    height:150,
    width:255,
    borderRadius:50
 }
});
