"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Form, useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"

import { FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


const indentificationFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  age: z.string(),
  gender: z.string(),
  ethnicity: z.string()
})

type IdentificationFormValues = z.infer<typeof indentificationFormSchema>

// This can come from your database or API.
const defaultValues: Partial<IdentificationFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

export function IdentificationForm() {
  const form = useForm<IdentificationFormValues>({
    resolver: zodResolver(indentificationFormSchema),
    defaultValues,
  })

  function onSubmit(data: IdentificationFormValues) {
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Patient's name" {...field} />
              </FormControl>
              <FormDescription>
                This is the name that will be displayed when students see a patient.
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input placeholder="Patient's Age" {...field} />
              </FormControl>
              <FormDescription>
                This is the age of the patient.
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <Input placeholder="Patient's Gender" {...field} />
              </FormControl>
              <FormDescription>
                This is the gender of the patient.
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ethnicity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Race/Ethnicity</FormLabel>
              <FormControl>
                <Input placeholder="Patient's Race/Ethnicity" {...field} />
              </FormControl>
              <FormDescription>
                This is the race/ethnicity of the patient.
              </FormDescription>
            </FormItem>
          )}
        />

        <Button type="submit">Save</Button>
      </form>
    </Form>
  )
}
