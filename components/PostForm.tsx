'use client'

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

import { postDataSchema } from "@/validation/postSchema"
import { Textarea } from "./ui/textarea"

type Props = {
    submitButtonLabel: React.ReactNode;
    handleSubmit: (data: z.infer<typeof postDataSchema>) => void;
}

export default function PostForm({ handleSubmit, submitButtonLabel }: Props) {
    // Form definition
    const form = useForm<z.infer<typeof postDataSchema>>({
        resolver: zodResolver(postDataSchema),
        defaultValues: {
            title: "",
            body: "",
            imageUrl: ""
        },
    })

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                            <Input placeholder="Add Title" {...field} type="text"/>
                            </FormControl>
                        </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="body"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Body</FormLabel>
                            <FormControl>
                            <Textarea {...field} rows={10} className="resize-none"/>
                            </FormControl>
                        </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Image Url</FormLabel>
                            <FormControl>
                            <Input placeholder="Add Image Url" {...field} type="text"/>
                            </FormControl>
                        </FormItem>
                        )}
                    />

                    <Button type="submit" className="max-w-md mx-auto mt-2 w-full flex gap-2">{submitButtonLabel}</Button>
                </form>
            </Form>
        </div>
    )
}