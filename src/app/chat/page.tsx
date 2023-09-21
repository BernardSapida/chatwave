'use client'

import { useContext, useEffect, useState } from 'react';

import { UserContext } from '@/src/store/UserContext';

import ChatList from '@/src/components/chatList/ChatList';
import ChatSetting from '@/src/components/chatSetting/ChatSetting';
import ChatWindow from '@/src/components/window/ChatWindow';
import EmptyChatWindow from '@/src/components/window/EmptyChatWindow';

import style from '@/public/styles/main';

export default function Page({ searchParams }: { searchParams: { id: string } }) {
    const userContext = useContext(UserContext);
    const [showSetting, setShowSetting] = useState<boolean>(false);
    const conversation: Conversation = {
        _id: '1',
        single_conversation: false,
        participants: [
            {
                _id: '1',
                firstname: 'Bernard',
                lastname: 'Sapida',
                email: 'bernardsapida@gmail.com',
                image_public_id: 'display-pictures/lyv8fagduswrloey8mpb',
                not_seen_message_count: 4,
                nickname: 'Zo',
                online: true,
            },
            {
                _id: '2',
                firstname: 'Nicole',
                lastname: 'Sapida',
                email: 'NicoleSapida@gmail.com',
                image_public_id: 'display-pictures/svyk0zmcltnytwyuebpg',
                not_seen_message_count: 6,
                nickname: 'Dariin',
                online: false,
            }
        ],
        messages: [
            {
                '_id': '1',
                'sender_id': '2',
                'message': 'Broooo',
                'timestamp': new Date()
            },
            {
                '_id': '2',
                'sender_id': '2',
                'message': 'Are you up?',
                'timestamp': new Date()
            },
            {
                '_id': '3',
                'sender_id': '2',
                'message': 'Laro tayooo',
                'timestamp': new Date()
            },
            {
                '_id': '4',
                'sender_id': '1',
                'message': 'Yow sigiii',
                'timestamp': new Date()
            },
            {
                '_id': '5',
                'sender_id': '1',
                'message': 'Opening...',
                'timestamp': new Date()
            },
            {
                '_id': '6',
                'sender_id': '2',
                'message': 'Pabuhat ako ha',
                'timestamp': new Date()
            },
            {
                '_id': '7',
                'sender_id': '2',
                'message': 'Pafeed ko to',
                'timestamp': new Date()
            },
        ],
    };
    const user: User = {
        _id: '1',
        firstname: 'Bernard',
        lastname: 'Sapida',
        email: 'bernardsapida1706@gmail.com',
        image_public_id: 'display-pictures/lyv8fagduswrloey8mpb'
    };
    const [friend, setFriend] = useState<User>();

    useEffect(() => {
        userContext.setId(user._id!);
        userContext.setFirstname(user.firstname);
        userContext.setLastname(user.lastname);
        userContext.setEmail(user.email);
        userContext.setImagePublicId(user.image_public_id!);
        setFriend(getFriendProfile());
    }, [])

    const getFriendProfile = (): User => {
        const { participants } = conversation;
        let friend: User;

        if (participants[0]._id == user._id) {
            friend = participants[1];
            return friend
        } else {
            friend = participants[0];
            return friend
        }
    }

    const conversationIdExist = searchParams.id !== undefined;

    return (
        <main className={style.main}>
            <ChatList />
            {
                conversationIdExist ?
                    <ChatWindow
                        conversation={conversation}
                        user={user}
                        friend={friend!}
                        setShowSetting={setShowSetting}
                    /> :
                    <EmptyChatWindow />
            }
            {
                conversationIdExist &&
                <ChatSetting
                    user={user}
                    friend={friend!}
                    participants={conversation.participants}
                    singleConversation={conversation.single_conversation}
                    showSetting={showSetting}
                    setShowSetting={setShowSetting}
                />
            }
        </main >
    )
}