import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Chatbox from '../../components/ChatBox';
import Entypo from 'react-native-vector-icons/Entypo';

const ChatBox = () => {
  const P100 = '100%';
  return (
    <View style={styles.call_main_container}>
      <View style={styles.chatbox_header}>
        <Text style={styles.chatbox_header_text}>ChatBox</Text>
        <Entypo
          size={20}
          name="dots-three-vertical"
          style={styles.chatbox_header_icon}></Entypo>
      </View>
      <ScrollView
        style={styles.scroll_view}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          flexDirection: 'column',
          // width: P100,
        }}>
        <Chatbox></Chatbox>
        <Chatbox></Chatbox>
        <Chatbox></Chatbox>
        <Chatbox></Chatbox>
        <Chatbox></Chatbox>
        <Chatbox></Chatbox>
      </ScrollView>
      <Text style={styles.call_txt}>ChatBox Feature is under production!</Text>
    </View>
  );
};

export default ChatBox;

const P90 = '91%';
const P5 = '4%';

const styles = StyleSheet.create({
  chatbox_header: {
    // height: 40,
    // backgroundColor: '#F65F65',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 7,
    marginLeft: P5,
    marginRight: P5,
  },
  chatbox_header_text: {
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    fontSize: 20,
  },
  chatbox_header_icon: {
    color: '#000000',
  },
  call_main_container: {
    backgroundColor: '#FAF5EF',
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  call_txt: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  scroll_view: {
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
