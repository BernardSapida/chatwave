"use client"

import { FunctionComponent } from 'react';

import style from '@/public/styles/window/emptyChatWindow'

interface EmptyChatWindowProps {

}

const EmptyChatWindow: FunctionComponent<EmptyChatWindowProps> = () => {
    return (
        <section className={style.section}>
            <div className={style.container}>
                <p>Select a chat or start a new conversation</p>
            </div>
        </section>
    );
}

export default EmptyChatWindow;