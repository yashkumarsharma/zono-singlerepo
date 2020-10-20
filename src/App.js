import React, { useState, useCallback, useEffect } from 'react'
import { View, Dimensions } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { List, Button, ProgressBar, Colors } from 'react-native-paper'

export default () => {
  const [messages, setMessages] = useState([])
  const [expanded, setExpanded] = useState(true)
  const handlePress = () => setExpanded(!expanded)

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

  const renderList = () => (
    <List.Section title="Accordions">
      <List.Accordion
        title="Uncontrolled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
  )

  const renderProgressBar = () => <ProgressBar progress={0.5} color={Colors.red800} />

  const renderButton = () => (
    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
      Button from react-native-paper
    </Button>
  )

  const { width, height } = Dimensions.get('window')
  return (
    <>
      <View style={{ width, height }}>
        {renderProgressBar()}
        {renderButton()}
        {renderList()}
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
          />
      </View>
    </>
  )
}
