"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/registry/new-york/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/new-york/ui/form"
import { Input } from "@/registry/new-york/ui/input"
import { toast } from "@/registry/new-york/ui/use-toast"

const BehaviorFormSchema = z.object({
  behavior: z.string(),
  responsiveness: z.string()
})

type BehaviorFormValues = z.infer<typeof BehaviorFormSchema>

// This can come from your database or API.
const defaultValues: Partial<BehaviorFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

export function BehaviorForm() {
  const form = useForm<BehaviorFormValues>({
    resolver: zodResolver(BehaviorFormSchema),
    defaultValues,
  })

  function onSubmit(data: BehaviorFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        <FormField
          control={form.control}
          name="behavior"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Patient Behavior</FormLabel>
              <FormControl>
                <Input placeholder="Behaviors" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="responsiveness"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Patient Responsiveness</FormLabel>
              <FormControl>
                <Input placeholder="Responsiveness" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
            </FormItem>
          )}
        />



        <Button type="submit">Save</Button>
      </form>
    </Form>
  )
}
