import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Pencil} from "lucide-react";
export default function CartEdit() {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer" render={<Button variant="outline"><Pencil size={16} /></Button>} />
      <DialogContent className="sm:max-w-md z-[999999999999999999999999]">
        <DialogHeader>
          <DialogTitle>
              Cami Tank Top (Blue)
            </DialogTitle>
          <DialogDescription>
            $14.25
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose render={<Button type="button">Close</Button>} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
