"use client"

import { FunctionComponent, useEffect, useState } from 'react';


import Chat from './Chat';

import style from '@/public/styles/ChatList/conversation'

interface GroupsProps { }

const Groups: FunctionComponent<GroupsProps> = () => {
    const [groupMessages, setGroupMessages] = useState<Conversation[]>([]);

    useEffect(() => {
        // Data sample
        const groupMessages: Conversation[] = [
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
                        not_seen_message_count: 5,
                        online: true
                    },
                    {
                        _id: '2',
                        firstname: 'Nicole',
                        lastname: 'Sapida',
                        email: 'NicoleSapida@gmail.com',
                        image_public_id: 'display-pictures/svyk0zmcltnytwyuebpg',
                        not_seen_message_count: 5,
                        online: true
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
                        not_seen_message_count: 0,
                        online: false
                    },
                    {
                        _id: '2',
                        firstname: 'Nicole',
                        lastname: 'Sapida',
                        email: 'NicoleSapida@gmail.com',
                        image_public_id: 'display-pictures/svyk0zmcltnytwyuebpg',
                        not_seen_message_count: 2,
                        online: false
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

        setGroupMessages(groupMessages);
    }, []);

    return (
        <section className={style.section}>
            <div className={style.header}>
                <p className={style.title}>Groups</p>
            </div>
            {
                groupMessages.length > 0 ?
                    groupMessages.map(groupMessage => (
                        <Chat key={groupMessage._id} conversation={groupMessage} />
                    )) :
                    <p className={style.placeholder}>No group chats</p>
            }
        </section>
    );
}

export default Groups;