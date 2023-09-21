'use client'

import { FunctionComponent, } from 'react';

import { BsPersonExclamation } from 'react-icons/bs';

import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, ModalFooter } from '@nextui-org/react';

import style from '@/public/styles/ChatSetting/customizationOptions'

interface BlockProps {
    user: User
    friend: User
}

const Block: FunctionComponent<BlockProps> = ({ user, friend }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const block = (onClose: Function) => {
        console.log('Block friend');
        onClose()
    }

    return (
        <>
            <div
                className={style.customizationOptions}
                onClick={onOpen}
            >
                <BsPersonExclamation className={style.optionIcon} /> Block
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
                                Block
                            </ModalHeader>
                            <ModalBody className={style.modalBody}>
                                Are you sure, you want to block {friend.firstname} {friend.lastname}?
                            </ModalBody>
                            <ModalFooter>
                                <Button color='default' variant='light' onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color='danger' onPress={() => block(onClose)}>
                                    Block
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default Block;