import React from 'react'
import ChatBot from 'react-chatbot-kit'
import config from '../chatbot/config'
import ActionProvider from '../chatbot/ActionProvider'
import MessageParser from '../chatbot/MessageParser'
import { Container } from 'react-bootstrap'


export default function ChatPage() {
    return (
        <Container className="mr-5" style={{ marginTop: "5rem" }}>
            <ChatBot config={config} actionProvider={ActionProvider} messageParser={MessageParser}
                placeholderText="Напишите своё сообщение"/>
        </Container>
    )
}