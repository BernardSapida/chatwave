'use client'

import { FunctionComponent, useEffect, useRef, useState } from 'react';

import { AiOutlineCamera } from 'react-icons/ai';

import { Modal, ModalContent, ModalHeader, ModalBody, Button, ModalFooter, Avatar, Badge } from '@nextui-org/react';

import { useContext } from 'react';

import axios from 'axios';

import { Formik } from 'formik';

import InputField from '../form/InputField';

import { initialValues, validationSchema } from '@/src/helpers/contactValidation';

import { UserContext } from '@/src/store/UserContext';

import style from '@/public/styles/ChatSetting/customizationOptions'

interface MyProfileModalProps {
    myProfileModalDisclosure: Disclosure
}

const MyProfileModal: FunctionComponent<MyProfileModalProps> = ({ myProfileModalDisclosure }) => {
    const { isOpen, onClose, onOpenChange } = myProfileModalDisclosure;
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [photoFile, setPhotoFile] = useState<File>();
    const photoRef = useRef<HTMLInputElement>(null);
    const [photo, setPhoto] = useState<string>();
    const userContext = useContext(UserContext);

    useEffect(() => setPhoto(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/${userContext.image_public_id}.jpg`), [])

    const handleSubmit = async (
        values: { firstname: string; lastname: string; email: string; image_public_id: string; },
        { resetForm }: { resetForm: any }
    ) => {
        try {
            setLoading(true);
            let imagePublicId: string = '';

            // If user uploads a photo
            if (photoFile) {
                imagePublicId = await saveNewPhoto(photoFile);
                values.image_public_id = imagePublicId;
            }

            // save to database
            console.log(values)

            updateUserInfo(values);

            setPhoto(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/${imagePublicId}`);
            setLoading(false);
            onClose();
        } catch (error: any) {
            setLoading(false);
            console.log(error)
        }
    }

    const updateUserInfo = (data: User) => {
        userContext.setFirstname(data.firstname);
        userContext.setLastname(data.lastname);
        userContext.setEmail(data.email);
        userContext.setImagePublicId(data.image_public_id!);
    }

    const saveNewPhoto = async (photoFile: File): Promise<string> => {
        const formData = new FormData();
        formData.append('file', photoFile);
        formData.append('upload_preset', 'display-pictures');

        const imagePublicId = await postCloudinaryImage(formData);

        // Update display picture with new display picture
        return imagePublicId;
    }

    const postCloudinaryImage = async (formData: FormData): Promise<string> => {
        const res = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`, formData);
        const imagePublicId = res.data.public_id;

        return imagePublicId;
    }

    const handleFileChange = (event: any) => {
        const selectedFile = event.target.files[0];

        setPhoto(URL.createObjectURL(selectedFile));
        setPhotoFile(selectedFile);
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement={'center'}
                scrollBehavior={'inside'}
                portalContainer={document.body}
            >
                <ModalContent>
                    <ModalHeader className={style.modalHeader}>
                        My Profile
                    </ModalHeader>
                    <ModalBody className={style.modalBody}>
                        <div className={style.photoContainer}>
                            <Badge
                                isOneChar
                                content={
                                    <>
                                        <AiOutlineCamera
                                            className={style.cameraIcon}
                                            onClick={() => photoRef.current?.click()}
                                        />
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
                                    src={photo}
                                    className={style.photo}
                                />
                            </Badge>
                        </div>
                        <Formik
                            initialValues={userContext}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, handleSubmit, handleChange, values }) => (
                                <form
                                    className={style.form}
                                    onSubmit={handleSubmit}
                                    id='profileForm'
                                >
                                    <div className={style.fullnameContainer}>
                                        <InputField
                                            type='text'
                                            name='firstname'
                                            label='Firstname'
                                            value={values.firstname}
                                            loading={loading}
                                            error={errors.firstname}
                                            handleChange={handleChange}
                                            formSubmitted={formSubmitted}
                                        />
                                        <InputField
                                            type='text'
                                            name='lastname'
                                            label='Lastname'
                                            value={values.lastname}
                                            loading={loading}
                                            error={errors.lastname}
                                            handleChange={handleChange}
                                            formSubmitted={formSubmitted}
                                        />
                                    </div>
                                    <div className={style.emailContainer}>
                                        <InputField
                                            type='email'
                                            name='email'
                                            label='Email'
                                            value={values.email}
                                            loading={loading}
                                            error={errors.email}
                                            handleChange={handleChange}
                                            formSubmitted={formSubmitted}
                                        />
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            type='submit'
                            form='profileForm'
                            color='primary'
                            onClick={() => setFormSubmitted(true)}
                            isLoading={loading}
                        >
                            {
                                loading ?
                                    'Saving...' :
                                    'Save changes'
                            }
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default MyProfileModal;