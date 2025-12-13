import axios from 'axios';
import React, { useEffect } from 'react'

function Post() {
    useEffect(() => {
        const getData = async () => {
            try {
                const req = await axios.post("https://jsonplaceholder.typicode.com/posts",
                    {
                        "userId": 5,
                        "title": "my title",
                        "body": "my body"
                    },
                )
                console.log(req);

            } catch (error) {
                console.log(error.message)
            }
        }
        getData()
    }, [])
    return (
        <div>Post</div>
    )
}

export default Post