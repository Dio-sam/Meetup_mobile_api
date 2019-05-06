import React from 'react';
import { StyleSheet, Text, View,Image,Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
class Dry extends React.Component{
  render(){
    const {
      name,
      members,
      key_photo,
      category}=this.props
    return(
      <View style={styles.container}>
      <View style={styles.profil}>
        <Image 
          source={{uri:key_photo.highres_link}} 
          style={styles.img}
        />
      </View>
      <View elevation={5} style={styles.details}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.info} >
            <Icon 
              color='#D9501F'
              iconStyle={{paddingRight:10}} 
              name="group"
            />
            <Text > {members}</Text>
          </View>
          <View style={styles.info} >
            <Text style={{
              flex:1,
              color:'#D9501F', 
              fontWeight:'bold'}}
            >Category</Text>
            <Text style={{flex:3}}> {category.name}</Text>
          </View>
        </View>
      </View>
    </View>

    );
  }
}
const styles=StyleSheet.create({
  container:{       
    paddingTop:20,
    paddingBottom:50,
    height:200,
    justifyContent: 'center',
    alignItems:'center',
    position: 'relative', 
    // backgroundColor:'blue'
  },
  profil:{
    flex:1,
    backgroundColor:'grey',
    width:Dimensions.get('window').width-20,
    height:150,    
  },
  img:{  
    width:Dimensions.get('window').width-20,
    height:150   
  },
  details:{
    flex:1, 
    position: 'absolute' ,
    top: 110,
    left:40,
    backgroundColor:'#FDFDFC',
    width:280,
    height:90,
    shadowOffset:{width:6,height: 6},
    shadowRadius:3,
    shadowOpacity:8,
    borderRadius: 4,
  },
  title:{
    alignSelf:'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FE5F55',
    paddingBottom:5,
  },
  info:{
    alignItems:'center',
    flexDirection:"row",
    fontSize: 3,
    paddingLeft:9
  }
})
export default Dry;