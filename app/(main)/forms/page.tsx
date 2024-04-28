import { Separator } from "@/components/ui/separator"
import { ProfileForm } from "@/app/(main)/forms/profile-form"
import { IdentificationForm } from "./identification/identification-form"

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Identification</h3>
        <p className="text-sm text-muted-foreground">
          Basic patient identification information
        </p>
      </div>
      <Separator />
      <IdentificationForm />
    </div>
  )
}
