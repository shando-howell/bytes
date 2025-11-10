"use client"

import PostForm from "@/components/PostForm"
import { postDataSchema } from "@/validation/postSchema"
import { z } from "zod"

const NewPostForm = () => {
    const handleSubmit = async (data: z.infer<typeof postDataSchema>) => {
        console.log({ data });
    }

    return (
        <div className="px-24">
            <PostForm 
                handleSubmit={handleSubmit} 
                submitButtonLabel="Add Post"
            />
        </div>
    )
}

export default NewPostForm