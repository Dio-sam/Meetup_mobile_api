import React from 'react';
import { StyleSheet, Text, View,FlatList,Dimensions } from 'react-native';
import Card from '../components/core/Card';
import Config from '../Config';
class HomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      groupsData:[]
    }
  }
    componentDidMount(){
      this.getGroup();
    }
    async getGroup(){
      const groups=['TheFamilyMeetupsParis','internationals-events-paris','meetup-group-rIqaUAvH','Soiree-Networking-Paris']
      const promess= groups.map(async (group)=>{
        const res = await fetch(`https://api.meetup.com/${group}?&sign=true&photo-host=public&key=${Config.KEY_MEETUP}`)
        return await res.json();
      });
      // console.log('promess', promess);
      let groupsData=await Promise.all(promess);
      // console.log("groupsData",groupsData)
      this.setState({
        groupsData
      });
    }
    render() {
      // console.log("this.props",this.props);
      const {groupsData}=this.state;
      if(groupsData.length===0){
        return <Text >loadding...</Text>
      }
      // console.log('groupsData',groupsData)
      return (
        <View style={styles.container}>
          <View style={styles.nav}>
            <Text style={styles.text}>MeetUp</Text>
          </View>
          <FlatList
            data={groupsData}
            renderItem={(group)=>
                <Card
                  profil={this.props.navigation} 
                  key={group.item.id}
                  {...group.item}
                />
             }
            keyExtractor={(group,index) => index.toString()}
          />
        </View>
      );
    }
  }
  
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#FDFDFC',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingBottom:10
    
    
  },
  nav:{
    
    backgroundColor:"#4F6367",
    alignItems:'center',
    justifyContent:'center',
    width:Dimensions.get('window').width,
    height:80,
  },
  text:{
    color:'#7A9E9F',
    flex: 1,
    padding:30,   
    fontSize:16,
    fontWeight: 'bold',
  }
});
export default HomeScreen; 