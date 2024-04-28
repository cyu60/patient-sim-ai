import { Separator } from "@/components/ui/separator"
import { PhysicalTraitsForm } from "@/app/(main)/forms/physicalTraits/physicalTraits-form"
import { MedicalHistoryForm } from "./medicalHistory-form"

export default function SettingsPhysicalTraitsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Physical Traits</h3>
        <p className="text-sm text-muted-foreground">
          Physical information about the patient
        </p>
      </div>
      <Separator />
      <MedicalHistoryForm />
    </div>
  )
}
