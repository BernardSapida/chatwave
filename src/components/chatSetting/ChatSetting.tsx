"use client"

import { FunctionComponent } from 'react';

import { Avatar } from "@nextui-org/react";

import Block from './Block';
import DeleteChat from './DeleteChat';
import UserNickname from './UserNickname';

import style from '@/public/styles/ChatSetting/chatSetting'

interface ChatSettingProps {

}

const ChatSetting: FunctionComponent<ChatSettingProps> = () => {

    return (
        <section className={style.section}>
            <div className={style.avatarContainer}>
                <Avatar
                    src='/images/profile_pictures/julliannecabagay.jpg'
                    className={style.avatar}
                />
                <p className={style.name}>Torey Harris</p>
            </div>
            <div className={style.customizationContainer}>
                <p className={style.category}>Customization</p>
                <UserNickname />
                <Block />
                <DeleteChat />
            </div>
        </section>
    );
}

export default ChatSetting;