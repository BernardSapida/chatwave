"use client"

import { FunctionComponent, } from 'react';

import { AiOutlineDelete } from 'react-icons/ai';

import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, ModalFooter } from "@nextui-org/react";

import style from '@/public/styles/ChatSetting/customizationOptions'

interface DeleteChatProps {
    user: User
    friend: User
}

const DeleteChat: FunctionComponent<DeleteChatProps> = ({ user, friend }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const deleteChat = (onClose: Function) => {
        console.log('Chat deleted')
        onClose()
    }

    return (
        <>
            <div
                className={style.customizationOptions}
                onClick={onOpen}
            >
                <AiOutlineDelete className={style.optionIcon} /> Delete chat
            </div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement={'center'}
                scrollBehavior={'inside'}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className={style.modalHeader}>
                                Delete chat
                            </ModalHeader>
                            <ModalBody className={style.modalBody}>
                                Are you sure, you want to delete this conversation?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="default" variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="danger" onPress={() => deleteChat(onClose)}>
                                    Delete
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default DeleteChat;