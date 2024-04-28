// import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Diagnosis
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Diagnosis</DialogTitle>
          <DialogDescription>
            Explain your assessment of the patient to your medical team,
            including your evidence for your working or differential diagnosis.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Diagnosis
            </Label>
            <Textarea />

            {/* <Input id="link" defaultValue="" /> */}
          </div>
          {/* <Button type="submit" size="sm" className="px-3"> */}
          {/* <span className="sr-only">Copy</span> */}
          {/* <Copy className="h-4 w-4" /> */}
          {/* </Button> */}
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              {/* Need to be a submit button that the teachers can help to run the diagnosis -- need to be able to send in the information to the user??? */}
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
