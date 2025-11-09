"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  post: z.string().min(200).max(800),
})

const NewPostForm = () => {
    // Form definition
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        post: "",
        },
    })

    // Submit handler
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="post"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Blog Post</FormLabel>
                        <FormControl>
                        <Input placeholder="Add post" {...field} type="text"/>
                        </FormControl>
                    </FormItem>
                    )}
                />
                <Button type="submit" variant="outline">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default NewPostForm