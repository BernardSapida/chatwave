'use client'

import { useState, createContext } from "react";

interface UserContextProps {
    children: React.ReactNode
}

export const UserContext = createContext({
    _id: '',
    firstname: '',
    lastname: '',
    email: '',
    image_public_id: '',
    setId: (id: string): void => { },
    setFirstname: (firstname: string): void => { },
    setLastname: (lastname: string): void => { },
    setEmail: (email: string): void => { },
    setImagePublicId: (imagePublicId: string): void => { },
});

export const UserContextProvider = ({ children }: UserContextProps) => {
    const [id, setId] = useState<string>('');
    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [imagePublicId, setImagePublicId] = useState<string>('');

    const context = {
        _id: id,
        firstname: firstname,
        lastname: lastname,
        email: email,
        image_public_id: imagePublicId,
        setId: (id: string): void => setId(id),
        setFirstname: (firstname: string): void => setFirstname(firstname),
        setLastname: (lastname: string): void => setLastname(lastname),
        setEmail: (email: string): void => setEmail(email),
        setImagePublicId: (imagePublicId: string): void => setImagePublicId(imagePublicId),
    };

    return (
        <UserContext.Provider value={context} >
            {children}
        </UserContext.Provider>
    )
}