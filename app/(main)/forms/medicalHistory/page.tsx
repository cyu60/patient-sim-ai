import { Separator } from "@/components/ui/separator"
import { PhysicalTraitsForm } from "@/app/(main)/forms/physicalTraits/physicalTraits-form"
import { MedicalHistoryForm } from "./medicalHistory-form"

export default function SettingsPhysicalTraitsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Medical History</h3>
        <p className="text-sm text-muted-foreground">
          Patient medical history
        </p>
      </div>
      <Separator />
      <MedicalHistoryForm />
    </div>
  )
}
