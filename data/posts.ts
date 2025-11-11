import "server-only"
import { firestore } from "@/firebase/server";
import { Post } from "@/types/post";

type GetPostsOptions = {
    pagination?: {
        pageSize?: number;
        page?: number;
    }
}

export const getPosts = async (options?: GetPostsOptions) => {
    const page = options?.pagination?.page || 1;
    const pageSize = options?.pagination?.pageSize || 4;

    let postsQuery = firestore.collection("posts").orderBy("updated", "desc");

    const postsSnapshot = await postsQuery
        .limit(pageSize)
        .offset((page - 1) * pageSize).get();

    const posts = postsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    } as Post));

    return { data: posts };
}