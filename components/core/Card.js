import React from 'react';
import {TouchableOpacity } from 'react-native';
import Dry from '../core/Dry'
class Card extends React.Component {
  
  render(){
   const {
     name,
     urlname,
     members,
     key_photo,
     category}=this.props
    return(

      <TouchableOpacity
       onPress={()=>
        this.props.profil.navigate('Details'
          ,{
            urlname:urlname,
            name:name,
            members:members,
            category:category,
            photo:key_photo
            }
        )
      }>
        <Dry 
          name={name}
          members={members}
          key_photo={key_photo}
          category={category}
        />
      </TouchableOpacity>
    )
  }
}

export default Card;

// const styles=StyleSheet.create({
//   container:{
//     flexDirection:"row",
//     paddingTop:50,
//     paddingLeft:10,
//     paddingBottom:5
//   },
//   img:{
//     flex:1,
//     width:50,
//     height:100
    
//   },
//   text:{
//     flex:2,  
//   },
//   info:{
//     alignItems:'flex-start',
//     flexDirection:"row",
//     fontSize: 3,
//     paddingLeft:9
//   }
// })

        {/* <View style={styles.container}>
          <Image source={{uri:key_photo.highres_link}} 
                  style={styles.img}
          />
          <View  style={styles.text}>
            <Text style={{
              alignSelf:'center',
              fontSize: 15,
              fontWeight: 'bold',
              color: '#FE5F55'
            }}>
              {name}
            </Text>
            <View style={styles.info} >
              <Text style={{flex:1,fontWeight:'bold'}}>Members:</Text>
              <Text style={{flex:2}}> {members}</Text>
            </View>
            <View style={styles.info} >
              <Text style={{flex:1, fontWeight:'bold'}}>Category:</Text>
              <Text style={{flex:2}}> {category.name}</Text>
            </View>
          </View>        
        </View> */}