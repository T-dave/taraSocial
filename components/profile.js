import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback, TouchableOpacity, FlatList, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function ProfileScreen({route}) {
  const post=route.params.post;
  const [followers, setFollowers]=useState(route.params.followers);
  const [followed, setfollowed]=useState(false);
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
  const follow=()=>{
      setFollowers(followers+1)
    
    setfollowed(!followed)
  };
  const unFollow=()=>{
      setFollowers(followers-1)
    
    setfollowed(!followed)
  };
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
          <View style={styles.top}>
            <View style={styles.person}>
                  <Image source={route.params.profilePic} style={styles.image}/> 
                   <View style={styles.name_location}><Text style={styles.david}>{route.params.name}</Text><Text>{route.params.location}</Text></View>
                </View>
                <View  style={styles.social}>
                <View>
                  <View style={styles.allStat}>
                    <View style={styles.stat}><Text>{followers}</Text><Text>Followers</Text></View>   
                    <View style={styles.stat}><Text>{route.params.following}</Text><Text>Following</Text></View>  
                    <View style={styles.stat}><Text>{route.params.posts}</Text><Text>Posts</Text></View>
                  </View>
                { 
                  followed ?
                  <TouchableOpacity style={styles.unfollowButton} onPress={()=>unFollow()}><Text style={{color:'#fff'}}>UNFOLLOW</Text></TouchableOpacity>
                  :
                   <TouchableOpacity style={styles.button} onPress={()=>follow()}><Text style={{color:'#fff'}}>FOLLOW</Text></TouchableOpacity>
                 }    
                 </View>
                </View>
             </View>
             <View style={styles.body}>
                 <FlatList
                  data={data}
                  keyExtractor={(item, index)=>index.toString()}
                  renderItem={({item, index})=>
                 <View style={styles.card}> 
                     <TouchableOpacity onPress={()=>displayModal(item.image)}>
                <Image source={item.image} style={styles.cardImage}/>
                </TouchableOpacity>
                <View style={styles.cardBottom}> 
                    <View style={styles.person}>
                      <Image source={item.profilePic} style={styles.cardImage_person}/> 
                       <View style={styles.name_location}><Text style={styles.cardDavid}>{item.name}</Text><Text style={styles.cardLocation}>Today, {item.time}</Text></View>
                    </View>
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
   },
   top:{
    padding:10
  },
   body:{
    flex:1,
    marginTop:30,
    backgroundColor:'#eee'
   },
   image:{
    height:50,
    width:50,
    borderRadius:30,
   },
   card:{
    margin:10
   },
   cardImage_person:{
    height:30,
    width:30,
    borderRadius:20
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
   david:{
    fontSize:25,
    fontWeight:'bold'
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
   allStat:{
    flexDirection:'row',
    
   },
   social:{
    alignItems:'flex-end'
  },
   stat:{
    margin:12,
    alignItems:'center'
   },
   button:{
    backgroundColor:'#113399',
    color:'#fff',
    justifyContent:'center',
    height:30,
    alignItems:'center',
    borderRadius:4
   },
   unfollowButton:{
    backgroundColor:'#898989',
    justifyContent:'center',
    height:30,
    alignItems:'center',
    borderRadius:4
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
