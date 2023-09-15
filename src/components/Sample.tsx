"use client"

import { useEffect, useState } from 'react'
import axios from 'axios';
import { pusherClient } from '@/lib/pusher'

export default function Sample() {
    const [number, setNumber] = useState<number>(0);

    useEffect(() => {
        pusherClient.subscribe('subscribeFromClient')
        pusherClient.bind('myEvent', changesHandler)

        return () => {
            pusherClient.unsubscribe('subscribeFromClient')
            pusherClient.unbind('myEvent', changesHandler)
        }
    }, [number]);

    const changesHandler = (num: number) => {
        setNumber(prev => prev + num)
    }

    const sendMessage = () => {
        const res = axios.get('/api/sample');
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <button onClick={sendMessage}>Send {number}</button>
        </main>
    )
}
