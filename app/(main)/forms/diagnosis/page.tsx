import { Separator } from "@/components/ui/separator"
import { DiagnosisForm } from "@/app/(main)/forms/diagnosis/diagnosis-form"

export default function SettingsPatientDiagnosisPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Possible Diagnosis</h3>
        <p className="text-sm text-muted-foreground">
          The diagnosis of the patient
        </p>
      </div>
      <Separator />
      <DiagnosisForm />
    </div>
  )
}
