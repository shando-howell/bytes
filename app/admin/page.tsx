'use client'

import { Button } from "@/components/ui/button"
import { PlusCircleIcon } from "lucide-react"
import { useRouter } from "next/navigation"

const AdminDashboard = () => {
    const router = useRouter();

    const goNewPost = () => {
        router.push("/admin/new")
    }

    const goHome = () => {
        router.push('/')
    }
    
    return (
        <div className="p-2">
            <div className="flex">
                <div className="flex-1">
                    <h1>Admin Dashboard</h1>
                </div>
                <div className="flex">
                    <Button onClick={goNewPost} variant="outline">
                        New Post
                        <PlusCircleIcon />
                    </Button>
                </div>
            </div>

            <div>
                <h1>All Posts</h1>
            </div>
        </div>
  )
}

export default AdminDashboard