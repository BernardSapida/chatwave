"use client"

import { FunctionComponent, } from 'react';

import { RxLetterCaseCapitalize } from 'react-icons/rx';
import { AiOutlineEdit } from 'react-icons/ai';

import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, User } from "@nextui-org/react";

import style from '@/public/styles/ChatSetting/customizationOptions'
import EditUserNickname from './EditUserNickname';

interface UserNicknameProps {

}

const UserNickname: FunctionComponent<UserNicknameProps> = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <div
                className={style.customizationOptions}
                onClick={onOpen}
            >
                <RxLetterCaseCapitalize className={style.optionIcon} /> Edit nickname
            </div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior={'inside'}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className={style.modalHeader}>
                                Edit nickname
                            </ModalHeader>
                            <ModalBody className={style.modalBody}>
                                <EditUserNickname />
                                <EditUserNickname />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default UserNickname;