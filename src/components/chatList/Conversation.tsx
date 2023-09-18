"use client"

import { FunctionComponent } from 'react';

import Chat from './Chat';

import style from '@/public/styles/ChatList/conversation'

interface ConversationtProps {

}

const Conversation: FunctionComponent<ConversationtProps> = () => {
    return (
        <section className={style.section}>
            <div className={style.header}>
                <p className={style.title}>Conversations</p>
                <p className={style.chip}>Active 1</p>
            </div>
            <Chat />
        </section>
    );
}

export default Conversation;