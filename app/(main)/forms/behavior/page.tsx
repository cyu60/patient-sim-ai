import { Separator } from "@/components/ui/separator"
import { BehaviorForm } from "@/app/(main)/forms/behavior/behavior-form"

export default function SettingsPatientBehaviorPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Patient Behavior</h3>
        <p className="text-sm text-muted-foreground">
          Behavioral information about the patient
        </p>
      </div>
      <Separator />
      <BehaviorForm />
    </div>
  )
}
