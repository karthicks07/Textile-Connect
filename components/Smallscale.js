import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

export default function Smallscale({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{height:50}}/>
     <View style={styles.topview}>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
     <Image source={require('../assets/pics/arrow.png')} style={styles.frontimg}/>
     </TouchableOpacity>
      <Text style={{fontSize:24, color:'#0A2ACF'}}>SmallScale</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('User')}>
      <Image source={require('../assets/pics/profile.png')} style={styles.frontimg}/>
      </TouchableOpacity>
     </View>
      <TextInput
      type='password'
      placeholder='Search'
      style={styles.input}
      />
      <ScrollView>
      <View style={{height:15}}/>
      <View style={styles.peopleview}>
        <TouchableOpacity onPress={()=> navigation.navigate('Smallpeople')}>
      <Image source={require('../assets/pics/smallpeople.png')} style={styles.pic}/>
      </TouchableOpacity>
      <Image source={require('../assets/pics/smallpeople.png')} style={styles.pic}/>
       
      </View>
      <View style={{height:50}}/>
      <View style={{height:15}}/>
      <View style={styles.peopleview}>
      <Image source={require('../assets/pics/smallpeople.png')} style={styles.pic}/>
      <Image source={require('../assets/pics/smallpeople.png')} style={styles.pic}/>
       
      </View>
      <View style={{height:50}}/>
      <View style={{height:15}}/>
      <View style={styles.peopleview}>
      <Image source={require('../assets/pics/smallpeople.png')} style={styles.pic}/>
      <Image source={require('../assets/pics/smallpeople.png')} style={styles.pic}/>
       
      </View>
      <View style={{height:50}}/>
      <View style={{height:15}}/>
      <View style={styles.peopleview}>
      <Image source={require('../assets/pics/smallpeople.png')} style={styles.pic}/>
      <Image source={require('../assets/pics/smallpeople.png')} style={styles.pic}/>
       
      </View>
      <View style={{height:50}}/>
      <View style={styles.peopleview}>
      <Image source={require('../assets/pics/smallpeople.png')} style={styles.pic}/>
      <Image source={require('../assets/pics/smallpeople.png')} style={styles.pic}/>
       
      </View>
      <View style={{height:50}}/>
      <View style={styles.peopleview}>
      <Image source={require('../assets/pics/smallpeople.png')} style={styles.pic}/>
      <Image source={require('../assets/pics/smallpeople.png')} style={styles.pic}/>
       
      </View>
      <View style={{height:50}}/>
      <View style={styles.peopleview}>
      <Image source={require('../assets/pics/smallpeople.png')} style={styles.pic}/>
      <Image source={require('../assets/pics/smallpeople.png')} style={styles.pic}/>
       
      </View>
      <View style={{height:50}}/>
      <View style={styles.peopleview}>
      <Image source={require('../assets/pics/smallpeople.png')} style={styles.pic}/>
      <Image source={require('../assets/pics/smallpeople.png')} style={styles.pic}/>
       
      </View>
      <View style={{height:50}}/>
      </ScrollView>
    
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
  peopleview:
  {
    height:100,
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'

  },
  pic:{
    height:100,
    width:100
  }
  
});
