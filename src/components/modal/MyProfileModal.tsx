"use client"

import { FunctionComponent, useRef, useState } from 'react';

import { Modal, ModalContent, ModalHeader, ModalBody, Button, ModalFooter, Avatar, Badge } from "@nextui-org/react";

import { initialValues, validationSchema } from '@/src/helpers/contactValidation';
import styles from '@/public/styles/Profile/editProfile'
import style from '@/public/styles/ChatSetting/customizationOptions'
import axios from 'axios';
import { Formik } from 'formik';
import InputField from '../form/InputField';
import { AiOutlineCamera } from 'react-icons/ai';

interface MyProfileModalProps {
    myProfileModalDisclosure: Disclosure
}

const MyProfileModal: FunctionComponent<MyProfileModalProps> = ({ myProfileModalDisclosure }) => {
    const { isOpen, onClose, onOpenChange } = myProfileModalDisclosure;

    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [displayPicture, setDisplayPicture] = useState<string>('https://res.cloudinary.com/dwwdihklx/image/upload/v1694866352/display-pictures/lyv8fagduswrloey8mpb.jpg');
    const [displayPictureFile, setDisplayPictureFile] = useState<File>();
    const photoRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (
        values: { firstname: string; lastname: string; email: string; },
        { resetForm }: { resetForm: any }
    ) => {
        console.log(values)
        console.log(displayPictureFile)

        if (displayPictureFile) saveNewDisplayPicture(displayPictureFile);

        onClose();
    }

    const saveNewDisplayPicture = (displayPictureFile: File) => {
        const formData = new FormData();
        formData.append('file', displayPictureFile);
        formData.append('upload_preset', 'display-pictures');

        console.log(displayPictureFile);
        // const res = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`, formData);
        // const public_id = res.data.public_id;
        // const display_picture_url = `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/${public_id}`;
        // setDisplayPicture(display_picture_url);
    }

    const handleFileChange = (event: any) => {
        const selectedFile = event.target.files[0];
        setDisplayPicture(URL.createObjectURL(selectedFile));
        setDisplayPictureFile(selectedFile);
    };

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
                                My Profile
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
                                            src={displayPicture}
                                            className='h-20 w-20'
                                        />
                                    </Badge>
                                </div>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ errors, handleSubmit, handleChange, values }) => (
                                        <form className={styles.form} onSubmit={handleSubmit} id='profileForm'>
                                            <div className='w-full flex gap-1'>
                                                <InputField
                                                    type='text'
                                                    name='firstname'
                                                    label='Firstname'
                                                    error={errors.firstname}
                                                    formSubmitted={formSubmitted}
                                                    value={values.firstname}
                                                    // loading={loading}
                                                    handleChange={handleChange}
                                                />
                                                <InputField
                                                    type='text'
                                                    name='lastname'
                                                    label='Lastname'
                                                    error={errors.lastname}
                                                    formSubmitted={formSubmitted}
                                                    value={values.lastname}
                                                    // loading={loading}
                                                    handleChange={handleChange}
                                                />
                                            </div>
                                            <div className='w-full mt-2'>
                                                <InputField
                                                    type='email'
                                                    name='email'
                                                    label='Email'
                                                    error={errors.email}
                                                    formSubmitted={formSubmitted}
                                                    value={values.email}
                                                    // loading={loading}
                                                    handleChange={handleChange}
                                                />
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="default" variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button
                                    type='submit'
                                    form='profileForm'
                                    color="primary"
                                    onClick={() => setFormSubmitted(true)}
                                >
                                    Save changes
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default MyProfileModal;