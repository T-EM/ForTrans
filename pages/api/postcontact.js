import * as fs from 'fs'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Post
        // let data = await fs.promises.readdir('contactdata');

        // fs.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body), () => { })
        res.status(200).json(req.body)
    } else {
        res.status(200).json(["allBlogs"])
    }
}