import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
     <View style={styles.ellipse}>
      <Image source={require('../assets/pics/Ellipse.png')} style={styles.pic}/>
     </View>
     <View style={{height:40}}/>
     <View style={styles.login}>
      <Text style={{fontSize:24, color:'#0A2ACF'}}>Login</Text>
     </View>
     <View style={styles.front}> 
      <Image source={require('../assets/pics/frontimage.png')} style={styles.frontimg}/>
     </View>
     <View style={styles.logindetails}>
      <TextInput
      type='text'
      placeholder='E-mail'
      style={styles.input}
      />
     <View style={{height:15}}/>

      <TextInput
      type='password'
      placeholder='Password'
      style={styles.input}
      />
     </View>
      <View style={styles.forget}>

      <Text style={{color:'#0A2ACF'}}>forget password?</Text>
      </View>
      <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <View style={styles.btn}>
        <Text style={{fontSize:16}}>Login</Text>
      </View>
    </TouchableOpacity>

          
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
      <View style={styles.signup}>
        <Text style={{fontSize:17}}>Don’t have account ? sign up</Text>
      </View>
      </TouchableOpacity>
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
    height:100,
    width:'100%',
  },
  pic:{
    height:92,
    width:95
  },
  pic1:{
    marginTop:10,
    height:92,
    width:90
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
    width:140,
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
   }
});
