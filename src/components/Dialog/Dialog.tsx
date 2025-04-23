import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

type DialogContentProps = {
  title: string
  value?: string | undefined
  isDelete: boolean
  description: string
  setValue?: (value?: string) => void
  handleClick: () => void
}

export const ComponentsDialogContent = ({
  title,
  description,
  value,
  isDelete,
  setValue,
  handleClick,
}: DialogContentProps) => {
  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <div className="flex items-center space-x-2">
        {!isDelete && (
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={value} onChange={(e) => setValue?.(e.target.value)} />
          </div>
        )}
        <Button
          type="submit"
          variant={isDelete ? "destructive" : "default"}
          className={`rounded-md px-3 ${isDelete ? "w-full" : ""}`}
          onClick={() => handleClick()}
        >
          <span>{isDelete ? "Setuju" : "Simpan"}</span>
        </Button>
      </div>
    </DialogContent>
  )
}
