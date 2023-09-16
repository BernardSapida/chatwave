"use client"

import { FunctionComponent } from 'react';


import Chat from './Chat';

import style from '@/public/styles/ChatList/conversation'

interface GroupsProps {

}

const Groups: FunctionComponent<GroupsProps> = () => {
    return (
        <section className={style.section}>
            <div className={style.header}>
                <p className={style.title}>Groups</p>
            </div>
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
        </section>
    );
}

export default Groups;