import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Orders({navigation}) {
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
     <View style={styles.shops}>
        <View style={styles.contact}>
        <Image source={require('../assets/pics/image 14.png')} style={styles.items}/>
        <View style={styles.child}>
         <Text style={{fontSize:18, color:'#0A2ACF'}}>Natural Fabrics</Text>
         <Text style={{fontSize:18, color:'#0A2ACF'}}>8734868623</Text>
         </View>
        </View>
        <View style={styles.contact}>
        <Image source={require('../assets/pics/image 15.png')} style={styles.items}/>
        <View style={styles.child}>
         <Text style={{fontSize:18, color:'#0A2ACF'}}>Natural Fabrics</Text>
         <Text style={{fontSize:18, color:'#0A2ACF'}}>8734868623</Text>
         </View>
        </View>
        <View style={styles.contact}>
        <Image source={require('../assets/pics/image 16.png')} style={styles.items}/>
        <View style={styles.child}>
         <Text style={{fontSize:18, color:'#0A2ACF'}}>Natural Fabrics</Text>
         <Text style={{fontSize:18, color:'#0A2ACF'}}>8734868623</Text>
         </View>
        </View>
        <View style={styles.contact}>
        <Image source={require('../assets/pics/image 17.png')} style={styles.items}/>
        <View style={styles.child}>
         <Text style={{fontSize:18, color:'#0A2ACF'}}>Natural Fabrics</Text>
         <Text style={{fontSize:18, color:'#0A2ACF'}}>8734868623</Text>
         </View>
        </View>
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
    flexDirection:'column',
    justifyContent:'space-around',

  },
  pic:{
    height:80,
    width:'75%'
  },
  shops:
  {
    height:680,
    width:'80%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
  },
  items:
  {
    height:100,
    width:'50%'
  },
  contact:
  {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  child:
  {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
  }
  
});
