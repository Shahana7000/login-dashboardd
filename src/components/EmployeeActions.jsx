import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EmployeeActions = ({ onRegister, onBulkRegister, onBulkUpdate }) => {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5 shadow-sm">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex-1 bg-[#157395] hover:bg-[#126280] h-12 text-sm font-medium">
            Register Employee
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Register Employee</DialogTitle>
            <DialogDescription>
              Add New People to your team to collaborate on projects.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter full name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter email address" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Enter phone number" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" placeholder="Enter role" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button 
              className="bg-[#157395] hover:bg-[#126280]"
              onClick={() => {
                console.log("Saving...");
                // In a real app, you'd handle form submission here
              }}
            >
              Save Employee
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Button
        variant="outline"
        onClick={onBulkRegister}
        className="flex-1 border-[#157395] text-[#157395] hover:bg-[#157395]/5 h-12 text-sm font-medium"
      >
        Bulk Register
      </Button>

      <Button
        variant="outline"
        onClick={onBulkUpdate}
        className="flex-1 border-[#157395] text-[#157395] hover:bg-[#157395]/5 h-12 text-sm font-medium"
      >
        Bulk Update
      </Button>
    </div>
  );
};

export default EmployeeActions;