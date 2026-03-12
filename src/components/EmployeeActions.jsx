
      {/* <button 
        onClick={onRegister}
        className="flex-1 bg-[#157395] text-white py-3 px-6 rounded-md font-medium text-sm hover:bg-[#126280] transition-colors"
      >
        Register Employee
      </button> */}
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
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

{/* export function DialogDemo() { */}
const EmployeeActions = ({ onRegister, onBulkRegister, onBulkUpdate }) => {
  // return (
    <div className="bg-white p-4 rounded-lg flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5 shadow-sm">
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Register Employee</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
             Add New People to your team to collaborate on projects.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )


      <button 
        onClick={onBulkRegister}
        className="flex-1 border border-[#157395] text-[#157395] py-3 px-6 rounded-md font-medium text-sm hover:bg-[#157395]/5 transition-colors"
      >
        Bulk Register
      </button>
      <button 
        onClick={onBulkUpdate}
        className="flex-1 border border-[#157395] text-[#157395] py-3 px-6 rounded-md font-medium text-sm hover:bg-[#157395]/5 transition-colors"
      >
        Bulk Update
      </button>
    </div>
);
};

export default EmployeeActions;