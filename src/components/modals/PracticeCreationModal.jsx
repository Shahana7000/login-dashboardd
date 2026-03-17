import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PracticeCreationModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] bg-white rounded-3xl p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Practice Creation
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-600">Team Management ID</Label>
            <Select>
              <SelectTrigger className="h-12 bg-gray-50 border-gray-100 rounded-lg text-gray-400">
                <SelectValue placeholder="Team Management ID" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tm-1">TM-001</SelectItem>
                <SelectItem value="tm-2">TM-002</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-600">Practice ID</Label>
            <Input 
              placeholder="Enter Zip Code" 
              className="h-12 bg-gray-50 border-gray-100 rounded-lg placeholder:text-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-600">Practice Name</Label>
            <Input 
              placeholder="Enter Name" 
              className="h-12 bg-gray-50 border-gray-100 rounded-lg placeholder:text-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-600">Zip Code</Label>
            <Input 
              placeholder="Enter Zip Code" 
              className="h-12 bg-gray-50 border-gray-100 rounded-lg placeholder:text-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-600">Street</Label>
            <Input 
              placeholder="Enter Street" 
              className="h-12 bg-gray-50 border-gray-100 rounded-lg placeholder:text-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-600">City</Label>
            <Input 
              placeholder="Enter City" 
              className="h-12 bg-gray-50 border-gray-100 rounded-lg placeholder:text-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-600">State</Label>
            <Input 
              placeholder="Enter State" 
              className="h-12 bg-gray-50 border-gray-100 rounded-lg placeholder:text-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-600">Country</Label>
            <Input 
              placeholder="Enter Country" 
              className="h-12 bg-gray-50 border-gray-100 rounded-lg placeholder:text-gray-300"
            />
          </div>
        </div>

        <DialogFooter className="mt-10 gap-4 sm:justify-center">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="flex-1 h-12 bg-blue-50/50 border-none text-[#157395] hover:bg-blue-50/80 rounded-lg font-medium text-base shadow-none"
          >
            Cancel
          </Button>
          <Button 
            className="flex-1 h-12 bg-[#157395] hover:bg-[#126280] rounded-lg font-medium text-base shadow-none"
            onClick={onClose}
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PracticeCreationModal;
