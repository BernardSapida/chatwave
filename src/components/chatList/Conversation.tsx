"use client"

import { FunctionComponent, useEffect, useState } from 'react';

import Chat from './Chat';

import style from '@/public/styles/ChatList/conversation'

interface ConversationtProps { }

const Conversation: FunctionComponent<ConversationtProps> = () => {
    const [messages, setMessages] = useState<Conversation[]>([]);

    useEffect(() => {
        // Data sample
        const messages: Conversation[] = [
            {
                _id: '1',
                single_conversation: true,
                participants: [
                    {
                        _id: '1',
                        firstname: 'Bernard',
                        lastname: 'Sapida',
                        email: 'bernardsapida@gmail.com',
                        image_public_id: 'display-pictures/lyv8fagduswrloey8mpb',
                        not_seen_message_count: 7,
                        online: true,
                    },
                    {
                        _id: '2',
                        firstname: 'Nicole',
                        lastname: 'Sapida',
                        email: 'NicoleSapida@gmail.com',
                        image_public_id: 'display-pictures/svyk0zmcltnytwyuebpg',
                        not_seen_message_count: 8,
                        online: true,
                    }
                ],
                messages: [
                    {
                        'sender_id': '2',
                        'message': 'Hi there!!!',
                        'timestamp': new Date()
                    }
                ],
            },
            {
                _id: '2',
                single_conversation: true,
                participants: [
                    {
                        _id: '1',
                        firstname: 'Bernard',
                        lastname: 'Sapida',
                        email: 'bernardsapida@gmail.com',
                        image_public_id: 'display-pictures/lyv8fagduswrloey8mpb',
                        not_seen_message_count: 7,
                        online: false,
                    },
                    {
                        _id: '2',
                        firstname: 'Nicole',
                        lastname: 'Sapida',
                        email: 'NicoleSapida@gmail.com',
                        image_public_id: 'display-pictures/svyk0zmcltnytwyuebpg',
                        not_seen_message_count: 8,
                        online: false,
                    }
                ],
                messages: [
                    {
                        'sender_id': '2',
                        'message': 'Hello!',
                        'timestamp': new Date()
                    }
                ],
            },
        ];

        setMessages(messages);
    }, []);

    const getNumberOfActive = () => {
        let active = messages.filter(message => message.participants[1].online).length;

        return active;
    }

    return (
        <section className={style.section}>
            <div className={style.header}>
                <p className={style.title}>Conversations</p>
                <p className={style.chip}>Active {getNumberOfActive()}</p>
            </div>
            {
                messages.length > 0 ?
                    messages.map(message => (
                        <Chat key={message._id} conversation={message} />
                    )) :
                    <p className={style.placeholder}>No chats</p>
            }
        </section>
    );
}

export default Conversation;