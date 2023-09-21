'use client'

import { FunctionComponent, } from 'react';

import { RxLetterCaseCapitalize } from 'react-icons/rx';

import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from '@nextui-org/react';

import style from '@/public/styles/ChatSetting/customizationOptions'
import EditUserNickname from '../chatSetting/EditUserNickname';

interface EditNicknameModalProps {
    participants: User[]
}

const EditNicknameModal: FunctionComponent<EditNicknameModalProps> = ({ participants }) => {
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
                placement={'center'}
                scrollBehavior={'inside'}
                portalContainer={document.body}
            >
                <ModalContent>
                    <ModalHeader className={style.modalHeader}>
                        Edit nickname
                    </ModalHeader>
                    <ModalBody className={style.modalBody}>
                        {
                            participants.map((participant) => (
                                <EditUserNickname key={participant._id} user={participant} />
                            ))
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default EditNicknameModal;