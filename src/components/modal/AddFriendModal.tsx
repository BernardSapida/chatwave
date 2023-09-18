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

interface AddFriendModal {
    addFriendModalDisclosure: Disclosure
}

const AddFriendModal: FunctionComponent<AddFriendModal> = ({ addFriendModalDisclosure }) => {
    const { isOpen, onClose, onOpenChange } = addFriendModalDisclosure;

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
                                Add friend
                            </ModalHeader>
                            <ModalBody className={style.modalBody}>
                                <Input
                                    label="Search"
                                    isClearable
                                    radius="lg"
                                    placeholder="Search friends"
                                    startContent={
                                        <BiSearch className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                                    }
                                />
                                <div>
                                    <p className='mb-3 text-tiny'>Found users:</p>
                                    <div className={'flex items-center justify-between mb-3'}>
                                        <User
                                            name="Jane Doe"
                                            description="Product Designer"
                                            avatarProps={{
                                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                            }}
                                        />
                                        <div className={'flex gap-1'}>
                                            <Button color={'primary'}>Add friend</Button>
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
                                            <Button color={'primary'}>Add friend</Button>
                                        </div>
                                    </div>
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

export default AddFriendModal;