"use server"

import { auth, firestore } from "@/firebase/server";
import { postDataSchema } from "@/validation/postSchema";

export const saveNewPost = async (data: {
    title: string;
    body: string;
    imageUrl: string;
    // token: string;
}) => {
    const { ...postData } = data;
    // Verify auth token
    // const verifiedToken = await auth.verifyIdToken(token);

    // if (!verifiedToken.admin) {
    //     return {
    //         error: true,
    //         message: "Unauthorized"
    //     }
    // }

    const validation = postDataSchema.safeParse(postData);
    if (!validation.success) {
        return {
            error: true,
            message: validation.error.issues[0]?.message ?? "An error occurred",
        };
    }

    const post = await firestore.collection("posts").add({
        ...postData,
        created: new Date(),
        updated: new Date()
    })

    return {
        postId: post.id,
    };
};