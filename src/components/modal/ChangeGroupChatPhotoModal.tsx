"use client"

import { Dispatch, FunctionComponent, SetStateAction, useRef, useState, } from 'react';

import { AiOutlineCamera, AiOutlineDelete } from 'react-icons/ai';

import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, ModalFooter, Badge, Avatar } from "@nextui-org/react";

import style from '@/public/styles/ChatSetting/customizationOptions'

interface ChangeGroupChatPhotoModalProps {
    isOpen: boolean,
    onOpen: () => void,
    onOpenChange: () => void,
    displayPicture: string,
    setDisplayPicture: Dispatch<SetStateAction<string>>,
}

const ChangeGroupChatPhotoModal: FunctionComponent<ChangeGroupChatPhotoModalProps> =
    ({ isOpen, onOpen, onOpenChange, displayPicture, setDisplayPicture }) => {
        const photoRef = useRef<HTMLInputElement>(null);
        const [picture, setPicture] = useState<string>(displayPicture);
        const [displayPictureFile, setDisplayPictureFile] = useState<File>();

        const ChangeGroupChatPhotoModal = (onClose: Function) => {
            setDisplayPicture('https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-6/344860652_621561826532042_6530412289714137988_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeHl6K7d9sbyiTsPVIwMUg5TPmxE2MHIAo8-bETYwcgCj2Fo7qmXIvT7qXun9v6E4QlG9Dj6GgJPyPA9IudZoEAA&_nc_ohc=wq9t8ZQwarAAX_ZgU4a&_nc_ht=scontent.fmnl30-3.fna&oh=00_AfCICG5VMEqTKYIcNTYVgXH4QlIJtzoyXeVeLTY4xxkq6w&oe=650CCDBE');
            onClose()
        }

        const handleFileChange = (event: any) => {
            const selectedFile = event.target.files[0];
            setPicture(URL.createObjectURL(selectedFile));
            setDisplayPictureFile(selectedFile);
            onOpen();
        };

        return (
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement={'center'}
                scrollBehavior={'inside'}
                isDismissable={false}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className={style.modalHeader}>
                                Group chat photo
                            </ModalHeader>
                            <ModalBody className={style.modalBody}>
                                <div className='mx-auto'>
                                    <Badge
                                        isOneChar
                                        content={
                                            <>
                                                <AiOutlineCamera className={'h-4 w-4 cursor-pointer'} onClick={() => photoRef.current?.click()} />
                                                <input
                                                    type="file"
                                                    name="photo"
                                                    ref={photoRef}
                                                    onChange={handleFileChange}
                                                    accept="image/png, image/jpeg, image/jpg"
                                                    className='hidden'
                                                />
                                            </>
                                        }
                                        size='lg'
                                        color={'default'}
                                        placement="bottom-right"
                                        className='h-8 w-8 bottom-3 right-3'
                                    >
                                        <Avatar
                                            radius="full"
                                            src={picture}
                                            className='h-20 w-20'
                                        />
                                    </Badge>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="default" variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="primary" onPress={() => ChangeGroupChatPhotoModal(onClose)}>
                                    Change
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        );
    }

export default ChangeGroupChatPhotoModal;