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

const PhysicalTraitsFormSchema = z.object({
  weight: z.string(),
  height: z.string(),
  details: z.string()
})

type PhysicalTraitsFormValues = z.infer<typeof PhysicalTraitsFormSchema>

// This can come from your database or API.
const defaultValues: Partial<PhysicalTraitsFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

export function PhysicalTraitsForm() {
  const form = useForm<PhysicalTraitsFormValues>({
    resolver: zodResolver(PhysicalTraitsFormSchema),
    defaultValues,
  })

  function onSubmit(data: PhysicalTraitsFormValues) {
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
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight</FormLabel>
              <FormControl>
                <Input placeholder="Patient's Weight" {...field} />
              </FormControl>
              <FormDescription>
                This is the weight of the patient
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Height</FormLabel>
              <FormControl>
                <Input placeholder="Patient's Height" {...field} />
              </FormControl>
              <FormDescription>
                This is the height of the patient.
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Important Physical Details</FormLabel>
              <FormControl>
                <Input placeholder="Details" {...field} />
              </FormControl>
              <FormDescription>
                Any additional important physical details?
              </FormDescription>
            </FormItem>
          )}
        />

        <Button type="submit">Save</Button>
      </form>
    </Form>
  )
}
