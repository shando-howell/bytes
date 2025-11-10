"use client"

import PostForm from "@/components/PostForm"

const NewPostForm = () => {
    const handleSubmit = () => {
        console.log("data")
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