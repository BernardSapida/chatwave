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
                        src='https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/241511430_129082269454219_8671826391677060465_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGPtQC6GeoYXJPCHTRp_ou7xiKEyAMjNNnGIoTIAyM02SkntEoZ1raWq-NZurRZKBXxgSZAexfhmXzweqY-3tbE&_nc_ohc=IoOOZxdC5ncAX8OwXPe&_nc_ht=scontent.fmnl30-1.fna&oh=00_AfCUW91-ShKgNAIVa33dYTC75HSmSSg0ZjVqu4pMfRWqLg&oe=650CECA9'
                        alt='Bernard Sapida Profile Picture'
                    />
                </Badge>
            </Badge>
            <div>
                <p className={style.name}>Ricardo Fajardo</p>
                <p className={style.message}>You: Ako na jungle HAHAHAHA</p>
            </div>
        </div>
    );
}

export default Chat;