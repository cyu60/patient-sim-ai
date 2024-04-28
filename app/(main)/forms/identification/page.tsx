import { Separator } from "@/registry/new-york/ui/separator"
import { IdentificationForm } from "@/app/(main)/forms/identification/identification-form"

export default function SettingsIdentificationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Identification</h3>
        <p className="text-sm text-muted-foreground">
          Update basic information about a patient
        </p>
      </div>
      <Separator />
      <IdentificationForm />
    </div>
  )
}
