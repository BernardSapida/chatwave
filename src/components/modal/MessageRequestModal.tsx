"use client"

import { FunctionComponent } from 'react';

import { Modal, ModalContent, ModalHeader, ModalBody, Button, ModalFooter, User, Input } from "@nextui-org/react";

import { initialValues, validationSchema } from '@/src/helpers/contactValidation';
import styles from '@/public/styles/Profile/editProfile'
import style from '@/public/styles/ChatSetting/customizationOptions'
import axios from 'axios';
import { Formik } from 'formik';
import InputField from '../form/InputField';
import { AiOutlineDelete } from 'react-icons/ai';
import Chat from '../chatList/Chat';

interface MessageRequestModal {
    messageRequestModalDisclosure: Disclosure
}

const MessageRequestModal: FunctionComponent<MessageRequestModal> = ({ messageRequestModalDisclosure }) => {
    const { isOpen, onClose, onOpenChange } = messageRequestModalDisclosure;

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
                                Message request
                            </ModalHeader>
                            <ModalBody className={style.modalBody}>
                                <div className={'flex items-center justify-between'}>
                                    <Chat />
                                    <Button color={'danger'}><AiOutlineDelete className={'mb-0.5'} />Delete</Button>
                                </div>
                                <div className={'flex items-center justify-between'}>
                                    <Chat />
                                    <Button color={'danger'}><AiOutlineDelete className={'mb-0.5'} />Delete</Button>
                                </div><div className={'flex items-center justify-between'}>
                                    <Chat />
                                    <Button color={'danger'}><AiOutlineDelete className={'mb-0.5'} />Delete</Button>
                                </div><div className={'flex items-center justify-between'}>
                                    <Chat />
                                    <Button color={'danger'}><AiOutlineDelete className={'mb-0.5'} />Delete</Button>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default MessageRequestModal;