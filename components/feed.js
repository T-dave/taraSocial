import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,TouchableWithoutFeedback, TouchableOpacity, FlatList, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {post} from './list'

export default function FeedScreen({navigation}) {
  
 
  const [modalImage, setModalImage]=useState(null);
  const [isDisplay, setIsDisplay]=useState(false);
  const [data, setData]=useState(post)

  
  const handleLike=(ind)=>{
    post[ind].islike=!post[ind].islike
    if(post[ind].islike){
      post[ind].likes=post[ind].likes+1
    }else{
      post[ind].likes=post[ind].likes-1
    }
    setData([...post])
  };
  const displayModal=(image)=>{
    setModalImage(image)
    setIsDisplay(true)
  };
  const item={name:'David Omotara', image:require('../assets/tom.jpeg'), profilePic:require('../assets/profile.jpg'), location:'Lagos, Nigeria', followers:1598, following:450, posts:28, likes:257, islike:false, time:'10:30pm', post:[
    {name:'David Omotara', image:require('../assets/tomm.png'), profilePic:require('../assets/profile.jpg'), likes:180, time:'9:14pm',islike:false },
    {name:'David Omotara', image:require('../assets/tommm.jpg'), profilePic:require('../assets/profile.jpg'), likes:8843, time:'6:12pm',islike:false},
    {name:'David Omotara', image:require('../assets/tommmm.jpg'), profilePic:require('../assets/profile.jpg'), likes:2500, time:'10:35am',islike:false},
    {name:'David Omotara', image:require('../assets/profile.jpg'), profilePic:require('../assets/profile.jpg'), likes:82, time:'12:40pm',islike:false},
    
  ] };
    return(
      <SafeAreaView style={styles.container}>
        <Modal
        visible={isDisplay}
        onRequestClose={()=>setIsDisplay(false)}
        transparent
        animationType='fade'
      >
      <TouchableWithoutFeedback  onPress={()=>setIsDisplay(false)}>
      <View style={styles.modalView}>
        <Image source={modalImage} style={styles.modalImage}/>
       </View>
        </TouchableWithoutFeedback> 
      </Modal>
      <View style={styles.personn}><Text style={styles.heading}>TARA</Text><TouchableOpacity onPress={()=>navigation.push('Profile', {post:item.post, name:item.name, location:item.location, followers:item.followers, following:item.following, posts:item.posts, profilePic:item.profilePic})}>
<Image source={require('../assets/profile.jpg')} style={styles.image}/></TouchableOpacity></View>
             <View style={styles.body}>
                <FlatList
                  data={data}
                  keyExtractor={(item, index)=>index.toString()}
                  renderItem={({item,index})=>
                 <View style={styles.card}> 
                     <TouchableOpacity onPress={()=>displayModal(item.image)} style={{justifyContent:'center'}}>
                <Image source={item.image} style={styles.cardImage}/>
                </TouchableOpacity>
                <View style={styles.cardBottom}> 
                    <TouchableOpacity onPress={()=>navigation.push('Profile', {post:item.post, name:item.name, location:item.location, followers:item.followers, following:item.following, posts:item.posts, profilePic:item.profilePic})} style={styles.person}>
                      <Image source={item.profilePic} style={styles.cardImage_person} /> 
                       <View style={styles.name_location}><Text style={styles.cardDavid}>{item.name}</Text><Text style={styles.cardLocation}>Today, {item.time}</Text></View>
                       </TouchableOpacity>
                    

                    <View style={styles.like}>{item.islike ? <Text style={{paddingRight:8, color:'red'}}>{item.likes}</Text>:<Text style={{paddingRight:8, color:'#000'}}>{item.likes}</Text>}<TouchableOpacity onPress={()=>handleLike(index)}><Text>{item.islike ? <Icon name="heart" size={20} color="red" /> : <Icon name="heart" size={20} color="#999" />}</Text></TouchableOpacity></View>
                </View>
              </View>
                }
                />




             

          </View>
      </SafeAreaView>   


     
    );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    paddingTop:30
   },
   body:{
    flex:1,
    backgroundColor:'#eee'
   },
   image:{
    height:30,
    width:30,
    borderRadius:25,
   },
   card:{
    margin:10,
   },
   cardImage_person:{
    height:30,
    width:30,
    borderRadius:20,
   },
   cardImage:{
    flex: 1,
    width: '100%',
    height: 180,
    resizeMode: 'conver',
   },
   cardBottom:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#fff'
   },
   personn:{
    marginRight:15,
    marginLeft:15,
    marginTop:5,
    marginBottom:5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
   },
   heading:{
    fontWeight:'700',
    fontSize:20
   },
   person:{
    flexDirection:'row',
    width:200,
    alignItems:'center',
    marginLeft:5
   },
   like:{
    marginRight:20,
    alignItems:'center',
    flexDirection:'row'
   },
   cardDavid:{
    fontSize:13,
    fontWeight:'bold'
   },
   cardLocation:{
    fontSize:13,
   },
   name_location:{
    marginLeft:10,
    justifyContent:'center'
   },
  modalView:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#00000080'
  },
   modalImage:{
    height:350,
    width:300
   }

})