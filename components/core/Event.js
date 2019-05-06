import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import { Icon } from 'react-native-elements';
class Event extends React.Component{

  render(){
    const {fee,name,local_date,local_time,yes_rsvp_count,venue}=this.props;
    let price=`Payer ${fee.amount}€`
    return(
      <View elevation={5} style={styles.container}> 
        <View style={[styles.details, {justifyContent:'space-between',alignItems:'stretch',paddingBottom:10}]}>  
          <Text style={{
            fontSize:13,
            color:'#FE5F55',
          }}>
            {local_date} , {local_time}
          </Text>
          <Button 
            color='#D9501F'
            style={styles.button} 
            title={price} />
        </View> 
        <Text style={{fontSize:15,fontStyle:'italic',fontWeight:'bold'}}> {name} </Text>
        <View style={styles.details}>
          <Icon 
            color='#D9501F'
            iconStyle={{paddingRight:10}} 
            name="group"
          />
          <Text>{yes_rsvp_count}</Text>
        </View>
        <View style={[styles.details,{alignItems:'flex-start'}]}>
          <Icon 
            color='#D9501F' 
            iconStyle={{paddingRight:10}} 
            name="place"
          />
          <View style={styles.address}>
            <Text >{venue.name}</Text>
            <Text 
              style={{color:'#A7A8A3'}}
            >
              {venue.address_1}
            </Text> 
          </View>        
        </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    // flex:1,
    backgroundColor:'#EEF5DB',
    margin:10,
    padding:20,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#EEF5DB',
    shadowOffset:{width:6,height: 6},
    shadowRadius:3,
    shadowOpacity:8,
    // backgroundColor:'green'
  },
  details:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  address:{
    flex:1,
    
  },
  button:{

  }

});
 Event.defaultProps={
 name:'No upcoming events',
 venue:{name:'Location visible to members',address_1:''},
 fee:{amount:0},
 
}
export default Event;