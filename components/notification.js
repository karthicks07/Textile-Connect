import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Notification() {
  return (
    <View style={styles.container}>
     <View style={styles.ellipse}>
      <Image source={require('../assets/pics/Ellipse.png')} style={styles.pic}/>
     </View>
     <View style={{height:40}}/>
     <View style={styles.noti}>
      <Text style={{fontSize:24, color:'#0A2ACF'}}>Notifications</Text>
     </View>
     <View style={{height:40}}/>
     <View style={styles.front}> 
      <Image source={require('../assets/pics/notification.png')} style={styles.frontimg}/>
     </View>
     <View style={{height:40}}/>
     <View style={styles.login}>
      <Text style={{fontSize:24, color:'#0A2ACF'}}>No Notification</Text>
     </View>
     <View style={{height:40}}/>
     <View style={{height:40}}/>
      <View style={styles.ellipse2}>
      <Image source={require('../assets/pics/Ellipse2.png')} style={styles.pic1}/>
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
  ellipse:{
    marginTop:40,
    height:100,
    width:'100%'
  },
  ellipse2:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
    marginTop:40,
    height:140,
    width:'100%',
  },
  pic:{
    height:92,
    width:95
  },
  pic1:{
    height:95,
    width:92
  },
  front:{
    height:200,
    width:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center', 
  },
  frontimg:{
    height:140,
    width:200,
  },
  input:{
    height:36,
    width:200,
    borderRadius:100,
    paddingHorizontal:20,
    borderColor:'#151378',
    borderWidth:3
  },
  forget:{
    height:20,
    width:'50%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    marginTop:-20
  },
  signup:{
    height:40,
    width:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  btn:{
    height:40,
    width:100,
    borderRadius:100,
    backgroundColor:'#1ECB44',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
   },
});
