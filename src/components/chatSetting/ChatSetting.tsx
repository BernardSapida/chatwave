'use client'

import { Dispatch, FunctionComponent, SetStateAction, useEffect, useState } from 'react';

import { Avatar, Badge, Button, useDisclosure } from '@nextui-org/react';

import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineCamera } from 'react-icons/ai';

import BlockModal from '../modal/BlockModal';
import DeleteChatModal from '../modal/DeleteChatModal';
import EditNicknameModal from '../modal/EditNicknameModal';
import ChangeGroupChatPhotoModal from '../modal/ChangeGroupChatPhotoModal';

import style from '@/public/styles/ChatSetting/chatSetting'

interface ChatSettingProps {
    user: User
    friend: User,
    participants: User[],
    singleConversation: boolean,
    showSetting: boolean,
    setShowSetting: Dispatch<SetStateAction<boolean>>
}

const ChatSetting: FunctionComponent<ChatSettingProps> = ({ user, friend, participants, singleConversation, showSetting, setShowSetting }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [imagePublicId, setImagePublicId] = useState<string>();

    useEffect(() => setImagePublicId(friend?.image_public_id!))

    return (
        <section className={style.section(showSetting)}>
            <Button
                className={style.btnBack}
                onClick={() => setShowSetting(prevState => !prevState)}
                isIconOnly
            >
                <BsArrowLeft />
            </Button>
            <div className={style.avatarContainer}>
                {
                    singleConversation ? (
                        <Avatar
                            src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/${imagePublicId}.jpg`}
                            className={style.avatar}
                        />
                    ) : (
                        <Badge
                            isOneChar
                            content={<AiOutlineCamera className={style.cameraIcon} onClick={onOpen} />}
                            size='lg'
                            color={'default'}
                            placement='bottom-right'
                            className={style.badge}
                        >
                            <Avatar
                                radius='full'
                                src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/${imagePublicId}.jpg`}
                                className={style.avatar}
                            />
                        </Badge>
                    )
                }
                {
                    isOpen && <ChangeGroupChatPhotoModal
                        isOpen={isOpen}
                        onOpen={onOpen}
                        onOpenChange={onOpenChange}
                        displayPicture={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/${imagePublicId}`}
                        setImagePublicId={setImagePublicId}
                    />
                }
                <p className={style.name}>{`${friend?.firstname} ${friend?.lastname}`}</p>
            </div>
            <div className={style.customizationContainer}>
                <p className={style.category}>Customization</p>
                <EditNicknameModal participants={participants} />
                {!singleConversation && <BlockModal user={user} friend={friend} />}
                <DeleteChatModal user={user} friend={friend} />
            </div>
        </section>
    );
}

export default ChatSetting;