import React, { useState, useCallback, useEffect } from 'react'
import { Text } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'

export default () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <>
      <Text> I was called </Text>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </>
  )
}

// import React from 'react';
// import {
//   SafeAreaView,
//   Text,
//   StatusBar,
// } from 'react-native';


// export default () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <Text>
//           Hello World
//         </Text>
//       </SafeAreaView>
//     </>
//   );
// };
