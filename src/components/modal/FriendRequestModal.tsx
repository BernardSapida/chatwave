"use client"

import { FunctionComponent } from 'react';

import { Modal, ModalContent, ModalHeader, ModalBody, Button, ModalFooter, User, Input } from "@nextui-org/react";

import { initialValues, validationSchema } from '@/src/helpers/contactValidation';
import styles from '@/public/styles/Profile/editProfile'
import style from '@/public/styles/ChatSetting/customizationOptions'
import axios from 'axios';
import { Formik } from 'formik';
import InputField from '../form/InputField';
import { BiSearch } from 'react-icons/bi';

interface FriendRequestModal {
    friendRequestModalDisclosure: Disclosure
}

const FriendRequestModal: FunctionComponent<FriendRequestModal> = ({ friendRequestModalDisclosure }) => {
    const { isOpen, onClose, onOpenChange } = friendRequestModalDisclosure;

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
                                Friend request
                            </ModalHeader>
                            <ModalBody className={style.modalBody}>
                                <div className={'flex items-center justify-between mb-3'}>
                                    <User
                                        name="Jane Doe"
                                        description="Product Designer"
                                        avatarProps={{
                                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                        }}
                                    />
                                    <div className={'flex gap-1'}>
                                        <Button color={'primary'}>Confirm</Button>
                                        <Button>Delete</Button>
                                    </div>
                                </div>
                                <div className={'flex items-center justify-between mb-3'}>
                                    <User
                                        name="Jane Doe"
                                        description="Product Designer"
                                        avatarProps={{
                                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                        }}
                                    />
                                    <div className={'flex gap-1'}>
                                        <Button color={'primary'}>Confirm</Button>
                                        <Button>Delete</Button>
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default FriendRequestModal;