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

const DiagnosisFormSchema = z.object({
  workingDiagnosis: z.string(),
  diagnosisReason: z.string(),
  differentialDiagnosis: z.string(),
  differentialReasons: z.string()
})

type DiagnosisFormValues = z.infer<typeof DiagnosisFormSchema>

// This can come from your database or API.
const defaultValues: Partial<DiagnosisFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

export function DiagnosisForm() {
  const form = useForm<DiagnosisFormValues>({
    resolver: zodResolver(DiagnosisFormSchema),
    defaultValues,
  })

  function onSubmit(data: DiagnosisFormValues) {
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
          name="workingDiagnosis"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Working Diagnosis</FormLabel>
              <FormControl>
                <Input placeholder="Diagnosis" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="diagnosisReason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Working Diagnosis</FormLabel>
              <FormControl>
                <Input placeholder="Diagnosis Rationale" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="differentialDiagnosis"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Differential Diagnosis</FormLabel>
              <FormControl>
                <Input placeholder="Differential Diagnosis" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="differentialReasons"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Differential Diagnosis Rationales</FormLabel>
              <FormControl>
                <Input placeholder="Differential Diagnosis Rationales" {...field} />
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
