// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const cloudinary = require('cloudinary');

cloudinary.v2.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

export default async function GET(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const public_id = "display-pictures/bpuhautig7xhvoxx2r5s";
    const result = await cloudinary.v2.api
        .delete_resources([public_id],
            { type: 'upload', resource_type: 'image' });

    res.status(200).json({ result: result })
}
