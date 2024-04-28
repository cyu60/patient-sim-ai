"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import { Calendar } from "@/registry/new-york/ui/calendar"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/registry/new-york/ui/command"
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"
import { toast } from "@/registry/new-york/ui/use-toast"

const MedicalHistoryFormSchema = z.object({
  primaryComplaint: z.string(),
  symptomHistory: z.string(),
  healthBelief: z.string(),
  externalConcerns: z.string(),
  generalHistory: z.string(),
  gynObHistory: z.string(),
  exposureHistory: z.string(),
  immunizations: z.string(),
  medications: z.string(),
  allergies: z.string(),
  preventiveCareHistory: z.string(),
  previousTestResults: z.string(),
  familyHistory: z.string(),
  socialHistory: z.string(),
  habits: z.string()
})

type MedicalHistoryFormValues = z.infer<typeof MedicalHistoryFormSchema>

// This can come from your database or API.
const defaultValues: Partial<MedicalHistoryFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

export function PhysicalTraitsForm() {
  const form = useForm<MedicalHistoryFormValues>({
    resolver: zodResolver(MedicalHistoryFormSchema),
    defaultValues,
  })

  function onSubmit(data: MedicalHistoryFormValues) {
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
          name="primaryComplaint"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primary Complaint</FormLabel>
              <FormControl>
                <Input placeholder="Fever, pain, coughing, etc." {...field} />
              </FormControl>
              <FormDescription>
                This is the patient's primary general complaint
              </FormDescription>
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="symptomHistory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Symptom history & details</FormLabel>
              <FormControl>
                <Input placeholder="Last fever 1 year ago, sometime stomachache, etc." {...field} />
              </FormControl>
              <FormDescription>
                This is the patient's symptom history and details, intensity levels, etc.
              </FormDescription>
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="healthBelief"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Patient's Health Belief</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                This is what the patient believes is going on with their health
              </FormDescription>
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="externalConcerns"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Patient's Health Belief</FormLabel>
              <FormControl>
                <Input placeholder="General concerns" {...field} />
              </FormControl>
              <FormDescription>
              External or general concerns the patient has surrounding their health and health outcomes
              </FormDescription>
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="externalConcerns"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Patient's Health Belief</FormLabel>
              <FormControl>
                <Input placeholder="General concerns" {...field} />
              </FormControl>
              <FormDescription>
              External or general concerns the patient has surrounding their health and health outcomes
              </FormDescription>
            </FormItem>
          )}
        />

  generalHistory: z.string(),
  gynObHistory: z.string(),
  exposureHistory: z.string(),
  immunizations: z.string(),
  medications: z.string(),
  allergies: z.string(),
  preventiveCareHistory: z.string(),
  previousTestResults: z.string(),
  familyHistory: z.string(),
  socialHistory: z.string(),
  habits: z.string()

        <Button type="submit">Save</Button>
      </form>
    </Form>
  )
}
