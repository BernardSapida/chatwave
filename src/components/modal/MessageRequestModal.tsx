'use client'

import { FunctionComponent, useEffect, useState } from 'react';

import { Modal, ModalContent, ModalHeader, ModalBody, Button } from '@nextui-org/react';

import { AiOutlineDelete } from 'react-icons/ai';

import Chat from '../chatList/Chat';

import style from '@/public/styles/ChatSetting/customizationOptions'

interface MessageRequestModal {
    messageRequestModalDisclosure: Disclosure
}

const MessageRequestModal: FunctionComponent<MessageRequestModal> = ({ messageRequestModalDisclosure }) => {
    const { isOpen, onOpenChange } = messageRequestModalDisclosure;
    const [messageRequests, setMessageRequests] = useState<Conversation[]>([]);

    useEffect(() => {
        // Data sample
        const messageRequest: Conversation[] = [
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

        setMessageRequests(messageRequest);
    }, []);

    const handleDelete = (chat: Conversation) => {
        // Remove chat to archived chats
        console.log(chat);

        // Unarchive
        setMessageRequests(prevMessageRequests => prevMessageRequests.filter(messageRequest => messageRequest._id != chat._id));
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
                        Message request
                    </ModalHeader>
                    <ModalBody className={style.modalBody}>
                        {
                            messageRequests.length > 0 ?
                                messageRequests.map(messageRequest => (
                                    <div
                                        className={style.chatsContainer}
                                        key={messageRequest._id}
                                    >
                                        <Chat conversation={messageRequest} />
                                        <Button
                                            color={'danger'}
                                            onClick={() => handleDelete(messageRequest)}
                                        >
                                            <AiOutlineDelete />Delete
                                        </Button>
                                    </div>

                                )) :
                                <p className={style.placeholder}>No message request</p>
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default MessageRequestModal;