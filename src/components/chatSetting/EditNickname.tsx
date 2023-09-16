"use client"

import { FunctionComponent, } from 'react';

import { TbAbc } from 'react-icons/tb';
import { AiOutlineEdit } from 'react-icons/ai';

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, User } from "@nextui-org/react";

import style from '@/public/styles/ChatSetting/customizationOptions'

interface EditNicknameProps {

}

const EditNickname: FunctionComponent<EditNicknameProps> = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <div
                className={style.customizationOptions}
                onClick={onOpen}
            >
                <TbAbc className={style.optionIcon} /> Edit nickname
            </div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior={'inside'}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Edit nickname
                            </ModalHeader>
                            <ModalBody className={style.modalBody}>
                                <div className={style.userNicknames}>
                                    <User
                                        name="Bernard Sapida"
                                        description="Bernard Sapida"
                                        avatarProps={{
                                            src: "/images/profile_pictures/bernardsapida.jpg"
                                        }}
                                        className='mr-auto'
                                    />
                                    <Button isIconOnly className='border-1 bg-white'>
                                        <AiOutlineEdit className={style.editIcon} />
                                    </Button>
                                </div>
                                <div className={style.userNicknames}>
                                    <User
                                        name="Jullianne Cabagay"
                                        description="Jullianne Cabagay"
                                        avatarProps={{
                                            src: "/images/profile_pictures/julliannecabagay.jpg"
                                        }}
                                        className='mr-auto'
                                    />
                                    <Button isIconOnly className='border-1 bg-white'>
                                        <AiOutlineEdit className={style.editIcon} />
                                    </Button>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default EditNickname;