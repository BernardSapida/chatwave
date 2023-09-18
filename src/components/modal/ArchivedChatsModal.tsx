"use client"

import { FunctionComponent } from 'react';

import { Modal, ModalContent, ModalHeader, ModalBody, Button, ModalFooter, User, Input } from "@nextui-org/react";

import { initialValues, validationSchema } from '@/src/helpers/contactValidation';
import styles from '@/public/styles/Profile/editProfile'
import style from '@/public/styles/ChatSetting/customizationOptions'
import axios from 'axios';
import { Formik } from 'formik';
import InputField from '../form/InputField';
import { MdOutlineUnarchive } from 'react-icons/md';
import Chat from '../chatList/Chat';

interface ArchivedChatsModal {
    archivedChatsModalDisclosure: Disclosure
}

const ArchivedChatsModal: FunctionComponent<ArchivedChatsModal> = ({ archivedChatsModalDisclosure }) => {
    const { isOpen, onClose, onOpenChange } = archivedChatsModalDisclosure;

    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement={'center'}
                scrollBehavior={'inside'}
            // portalContainer={true}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className={style.modalHeader}>
                                Archived chats
                            </ModalHeader>
                            <ModalBody className={style.modalBody}>
                                <div className={'flex items-center justify-between'}>
                                    <Chat />
                                    <Button color={'default'}><MdOutlineUnarchive className={'mb-0.5'} />Unarchive</Button>
                                </div>
                                <div className={'flex items-center justify-between'}>
                                    <Chat />
                                    <Button color={'default'}><MdOutlineUnarchive className={'mb-0.5'} />Unarchive</Button>
                                </div><div className={'flex items-center justify-between'}>
                                    <Chat />
                                    <Button color={'default'}><MdOutlineUnarchive className={'mb-0.5'} />Unarchive</Button>
                                </div><div className={'flex items-center justify-between'}>
                                    <Chat />
                                    <Button color={'default'}><MdOutlineUnarchive className={'mb-0.5'} />Unarchive</Button>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="default" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default ArchivedChatsModal;