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

export function MedicalHistoryForm() {
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
              <FormLabel>Patient's General Concerns</FormLabel>
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
          name="generalHistory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Patient's General Medical History</FormLabel>
              <FormControl>
                <Input placeholder="Medical History" {...field} />
              </FormControl>
              <FormDescription>
                Describe any past medical history including hospitalizations, medical illnesses/chronic problems, past surgeries, accidents, or injuries
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gynObHistory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Patient's OB / Gynecologist History</FormLabel>
              <FormControl>
                <Input placeholder="Medical History" {...field} />
              </FormControl>
              <FormDescription>
                Patient's OB / Gynecologist History
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="exposureHistory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Exposure History</FormLabel>
              <FormControl>
                <Input placeholder="Exposure History" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="immunizations"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Immunization History</FormLabel>
              <FormControl>
                <Input placeholder="Immunizations" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="medications"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Medications</FormLabel>
              <FormControl>
                <Input placeholder="Medications" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="allergies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allergies</FormLabel>
              <FormControl>
                <Input placeholder="Allergies" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="preventiveCareHistory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preventive Healthcare History</FormLabel>
              <FormControl>
                <Input placeholder="Healthcare" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="previousTestResults"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Previous Important Test Results</FormLabel>
              <FormControl>
                <Input placeholder="Tests" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="familyHistory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Related Family History</FormLabel>
              <FormControl>
                <Input placeholder="Family History" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="socialHistory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Related Social History</FormLabel>
              <FormControl>
                <Input placeholder="Social History" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="habits"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Related Habits</FormLabel>
              <FormControl>
                <Input placeholder="Habits" {...field} />
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
