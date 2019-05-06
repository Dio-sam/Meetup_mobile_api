import React from 'react';
import { StyleSheet, Text, View,Dimensions,FlatList } from 'react-native';
import Config from '../Config';
import Event from '../components/core/Event';
import Dry from '../components/core/Dry';
class ProfilScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      events:[]
    }
  }
  componentDidMount(){
    this.getEvents();
  }
  async getEvents(){
    const {urlname}=this.props.navigation.state.params;
    const url=`https://api.meetup.com/${urlname}/events?&sign=true&photo-host=public&key=${Config.KEY_MEETUP}`;
     console.log("url",url)
    const res=await fetch(url);
    const events=await res.json();
    this.setState({
      events
    })
    // console.log('events#getEvents',events)

  }
  renderList(){
    const {events}=this.state;

    if(events.length===0){
      return(
        <View>
          <Text>loadding...</Text>
        </View>
    ) 
    }
    
  }
  render(){
    // console.log('this.props',this.props);
    const {name,category,photo,members}=this.props.navigation.state.params;
    const {events}=this.state;
    return( 
      <View style={styles.container}> 
        <Dry 
          name={name} 
          members={members}
          category={category} 
          key_photo={photo}/>
        <View style={{position:'relative'}}> 
          {this.renderList()}  

          <FlatList
            data={events}
            renderItem={(event)=>
              <Event key={event.item.id} {...event.item}/>
            }
            keyExtractor={(event,index) => index.toString()}
          />
        </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:
  {
     flex:1,
     marginBottom:200,
    // position:'relative',
    // height:300,
    // backgroundColor:'red'
  },

})
ProfilScreen.defaultProps={
  events:[]
 }
export default ProfilScreen;