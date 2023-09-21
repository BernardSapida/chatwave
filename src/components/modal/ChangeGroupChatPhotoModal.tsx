'use client'

import { Dispatch, FunctionComponent, SetStateAction, useRef, useState, } from 'react';

import { AiOutlineCamera } from 'react-icons/ai';

import { Modal, ModalContent, ModalHeader, ModalBody, Button, ModalFooter, Badge, Avatar } from '@nextui-org/react';

import style from '@/public/styles/ChatSetting/customizationOptions'

interface ChangeGroupChatPhotoModalProps {
    isOpen: boolean,
    onOpen: () => void,
    onOpenChange: () => void,
    displayPicture: string,
    setImagePublicId: Dispatch<SetStateAction<string | undefined>>,
}

const ChangeGroupChatPhotoModal: FunctionComponent<ChangeGroupChatPhotoModalProps> =
    ({ isOpen, onOpen, onOpenChange, displayPicture, setImagePublicId }) => {
        const photoRef = useRef<HTMLInputElement>(null);
        const [picture, setPicture] = useState<string>(displayPicture);
        const [displayPictureFile, setDisplayPictureFile] = useState<File>();

        const ChangeGroupChatPhotoModal = (onClose: Function) => {
            setImagePublicId('display-pictures/svyk0zmcltnytwyuebpg');
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
                                <div className={style.badgeContainer}>
                                    <Badge
                                        isOneChar
                                        content={
                                            <>
                                                <AiOutlineCamera className={style.cameraIcon} onClick={() => photoRef.current?.click()} />
                                                <input
                                                    type='file'
                                                    name='photo'
                                                    ref={photoRef}
                                                    onChange={handleFileChange}
                                                    accept='image/png, image/jpeg, image/jpg'
                                                    className={style.fileInput}
                                                />
                                            </>
                                        }
                                        size='lg'
                                        color={'default'}
                                        placement='bottom-right'
                                        className={style.badge}
                                    >
                                        <Avatar
                                            radius='full'
                                            src={picture}
                                            className={style.photo}
                                        />
                                    </Badge>
                                </div>
                            </ModalBody>
                            <ModalFooter className={style.modalFooter}>
                                <Button color='primary' onPress={() => ChangeGroupChatPhotoModal(onClose)}>
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