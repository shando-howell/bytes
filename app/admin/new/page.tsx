import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import NewPostForm from "./new-post-form"

const NewPost = () => {
  return (
    <div>
        <Card>
            <CardHeader>
                <CardTitle>New Post</CardTitle>
            </CardHeader>
            <CardContent>
                <NewPostForm />
            </CardContent>
        </Card>
    </div>
  )
}

export default NewPost