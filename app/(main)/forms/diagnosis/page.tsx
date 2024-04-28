import { Separator } from "@/components/ui/separator"
import { DiagnosisForm } from "@/app/(main)/forms/diagnosis/diagnosis-form"

export default function SettingsPatientDiagnosisPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Patient Behavior</h3>
        <p className="text-sm text-muted-foreground">
          The patient's diagnosis
        </p>
      </div>
      <Separator />
      <DiagnosisForm />
    </div>
  )
}
