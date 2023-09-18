'use client'

import { FunctionComponent } from 'react';

import Groups from './Groups';
import Header from './Header';
import UserProfile from './UserProfile';
import Conversation from './Conversation';

import style from '@/public/styles/ChatList/chatList'

interface ChatListProps { }

const ChatList: FunctionComponent<ChatListProps> = () => {
    return (
        <section className={style.section}>
            <Header />
            <UserProfile />
            <Conversation />
            <Groups />
        </section>
    );
}

export default ChatList;