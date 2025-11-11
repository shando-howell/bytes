"use client"

import PostForm from "@/components/PostForm"
import { postDataSchema } from "@/validation/postSchema"
import { z } from "zod"
import { saveNewPost } from "./actions"

const NewPostForm = () => {
    const handleSubmit = async (data: z.infer<typeof postDataSchema>) => {
        const response = await saveNewPost({ ...data });
        console.log({ response });
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