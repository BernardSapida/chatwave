"use client"

import { FunctionComponent, } from 'react';

import { BsPersonFillExclamation } from 'react-icons/bs';

import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, ModalFooter } from "@nextui-org/react";

import style from '@/public/styles/ChatSetting/customizationOptions'

interface BlockProps {

}

const Block: FunctionComponent<BlockProps> = () => {
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
                <BsPersonFillExclamation className={style.optionIcon} /> Block
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
                                Are you sure, you want to block Jullianne Cabagay?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="default" variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="danger" onPress={() => block(onClose)}>
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