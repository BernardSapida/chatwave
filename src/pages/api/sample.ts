// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pusherServer } from '@/lib/pusher'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    pusherServer.trigger(
        'subscribeFromClient',
        'myEvent',
        100
    );

    res.status(200).json({ name: 'John Doe' })
}
