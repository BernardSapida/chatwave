"use client"

import { FunctionComponent, useRef, useState } from 'react';

import { Avatar, Badge, useDisclosure } from "@nextui-org/react";

import BlockModal from '../modal/BlockModal';
import DeleteChatModal from '../modal/DeleteChatModal';
import EditNicknameModal from '../modal/EditNicknameModal';

import style from '@/public/styles/ChatSetting/chatSetting'
import ChangeGroupChatPhotoModal from '../modal/ChangeGroupChatPhotoModal';
import { AiOutlineCamera } from 'react-icons/ai';

interface ChatSettingProps {

}

const ChatSetting: FunctionComponent<ChatSettingProps> = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [displayPicture, setDisplayPicture] = useState<string>('https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/241511430_129082269454219_8671826391677060465_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGPtQC6GeoYXJPCHTRp_ou7xiKEyAMjNNnGIoTIAyM02SkntEoZ1raWq-NZurRZKBXxgSZAexfhmXzweqY-3tbE&_nc_ohc=IoOOZxdC5ncAX8OwXPe&_nc_ht=scontent.fmnl30-1.fna&oh=00_AfCUW91-ShKgNAIVa33dYTC75HSmSSg0ZjVqu4pMfRWqLg&oe=650CECA9');

    return (
        <section className={style.section}>
            <div className={style.avatarContainer}>
                {/* <Avatar
                    src='/images/profile_pictures/bernardsapida.jpg'
                    className={style.avatar}
                /> */}
                <Badge
                    isOneChar
                    content={<AiOutlineCamera className={'h-4 w-4 cursor-pointer'} onClick={onOpen} />}
                    size='lg'
                    color={'default'}
                    placement="bottom-right"
                    className='h-8 w-8 bottom-5 right-3'
                >
                    <Avatar
                        radius="full"
                        src={displayPicture}
                        className={style.avatar}
                    />
                </Badge>
                {
                    isOpen && <ChangeGroupChatPhotoModal
                        isOpen={isOpen}
                        onOpen={onOpen}
                        onOpenChange={onOpenChange}
                        displayPicture={displayPicture}
                        setDisplayPicture={setDisplayPicture}
                    />
                }
                <p className={style.name}>Ricardo Fajardo</p>
            </div>
            <div className={style.customizationContainer}>
                <p className={style.category}>Customization</p>
                <EditNicknameModal />
                <BlockModal />
                <DeleteChatModal />
            </div>
        </section>
    );
}

export default ChatSetting;