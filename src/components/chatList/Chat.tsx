"use client"

import { FunctionComponent } from 'react';
import { Badge, Avatar } from "@nextui-org/react";

import style from '@/public/styles/ChatList/chat'

interface ChatProps {

}

const Chat: FunctionComponent<ChatProps> = () => {
    return (
        <div className={style.chat}>
            <Badge content="5" color="danger" size='sm' shape="circle">
                <Badge content="" color="success" size='sm' shape="circle" placement="bottom-right">
                    <Avatar
                        radius='full'
                        src='/images/profile_pictures/julliannecabagay.jpg'
                        alt='Jullianne Cabagay Profile Picture'
                    />
                </Badge>
            </Badge>
            <div>
                <p className={style.name}>Jullianne Cabagay</p>
                <p className={style.message}>Chat nalang ako kapag available hahaha</p>
            </div>
        </div>
    );
}

export default Chat;