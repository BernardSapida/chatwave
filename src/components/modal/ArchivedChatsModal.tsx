'use client'

import { FunctionComponent, useEffect, useState } from 'react';

import { Modal, ModalContent, ModalHeader, ModalBody, Button } from '@nextui-org/react';

import { MdOutlineUnarchive } from 'react-icons/md';

import Chat from '../chatList/Chat';

import style from '@/public/styles/ChatSetting/customizationOptions'

interface ArchivedChatsModal {
    archivedChatsModalDisclosure: Disclosure
}

const ArchivedChatsModal: FunctionComponent<ArchivedChatsModal> = ({ archivedChatsModalDisclosure }) => {
    const { isOpen, onOpenChange } = archivedChatsModalDisclosure;
    const [archivedChats, setArchivedChats] = useState<Conversation[]>([]);

    useEffect(() => {
        // Data sample
        const archivedChats: Conversation[] = [
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
                        not_seen_message_count: 2,
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

        setArchivedChats(archivedChats);
    }, []);

    const handleUnarchive = (chat: Conversation) => {
        // Remove chat to archived chats
        console.log(chat);

        // Unarchive
        setArchivedChats(prevArchivedChat => prevArchivedChat.filter(archivedChat => archivedChat._id != chat._id));
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement={'center'}
                scrollBehavior={'inside'}
                portalContainer={document.body}
            >
                <ModalContent>
                    <ModalHeader className={style.modalHeader}>
                        Archived chats
                    </ModalHeader>
                    <ModalBody className={style.modalBody}>
                        {
                            archivedChats.length > 0 ?
                                archivedChats.map(archivedChat => (
                                    <div
                                        key={archivedChat._id}
                                        className={style.chatsContainer}
                                    >
                                        <Chat conversation={archivedChat} />
                                        <Button
                                            color={'default'}
                                            onClick={() => handleUnarchive(archivedChat)}
                                        >
                                            <MdOutlineUnarchive />Unarchive
                                        </Button>
                                    </div>
                                )) :
                                <p className={style.placeholder}>No archived chats</p>
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ArchivedChatsModal;