// import { 
//   Search, 
//   Settings, 
//   CheckCircle2, 
//   Clock, 
//   Award,
//   Layers,
//   ChevronDown
// } from 'lucide-react';
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Checkbox } from "@/components/ui/checkbox";

// const WorkCentre = () => {
//   const data = [
//     { id: 1, practiceId: 'XYZ', status: 'Pending', subStatus: 'Pending' },
//     { id: 2, practiceId: 'XYZ', status: 'Approved', subStatus: 'Approved' },
//     { id: 3, practiceId: 'XYZ', status: 'Success', subStatus: 'Success' },
//     { id: 4, practiceId: 'XYZ', status: 'Pending', subStatus: 'Pending' },
//     { id: 5, practiceId: 'XYZ', status: 'Approved', subStatus: 'Approved' },
//     { id: 6, practiceId: 'XYZ', status: 'Success', subStatus: 'Success' },
//   ];

//   const getStatusItem = (status) => {
//     switch (status) {
//       case 'Pending':
//         return {
//           icon: <Clock className="w-3.5 h-3.5" />,
//           colorText: 'text-[#E88B46]',
//           colorBg: 'bg-[#FFF4ED]',
//           label: 'Pending'
//         };
//       case 'Approved':
//         return {
//           icon: <CheckCircle2 className="w-3.5 h-3.5" />,
//           colorText: 'text-[#5EBC69]',
//           colorBg: 'bg-[#F2FAF4]',
//           label: 'Approved'
//         };
//       case 'Success':
//         return {
//           icon: <Award className="w-3.5 h-3.5" />,
//           colorText: 'text-[#6190FF]',
//           colorBg: 'bg-[#F0F5FF]',
//           label: 'Success'
//         };
//       default:
//         return { icon: null, colorText: '', colorBg: '', label: status };
//     }
//   };

//   return (
//     <div className="flex flex-col h-full bg-[#F0F3F8] pt-2 pb-6 px-4 lg:px-0">
//       <div className="flex flex-col flex-shrink-0 w-full">
//         <h1 className="text-xl font-semibold text-[#157395] mb-6">Work Centre</h1>

//         <div className="flex flex-row gap-4 mb-6 justify-between items-center w-full">
//           <div className="flex gap-4 items-center">
//             <div className="relative w-[340px]">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//               <Input 
//                 placeholder="Search" 
//                 className="pl-9 bg-white border-none h-10 rounded-md shadow-sm w-full text-sm ring-0 focus-visible:ring-0"
//               />
//             </div>
//             <Select>
//               <SelectTrigger className="w-[340px] bg-white border-none h-10 rounded-md shadow-sm text-sm ring-0 focus-visible:ring-0">
//                 <SelectValue placeholder="Select" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All</SelectItem>
//                 <SelectItem value="active">Active</SelectItem>
//                 <SelectItem value="inactive">Inactive</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
          
//           <Button 
//             variant="outline"
//             className="text-[#157395] border-[#157395] hover:bg-[#157395]/5 h-10 px-4 rounded-md flex gap-2 items-center shadow-sm text-[13px] font-semibold"
//           >
//             <Layers className="w-4 h-4" />
//             Multiple selection
//           </Button>
//         </div>
//       </div>

//       <div className="flex-1 bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden border border-gray-100/50">
//         <Table>
//           <TableHeader className="bg-[#F8FAFC]">
//             <TableRow className="hover:bg-transparent border-b border-gray-100/50">
//               <TableHead className="w-[60px] pl-6">
//                 <Checkbox className="rounded-sm border-gray-300" />
//               </TableHead>
//               <TableHead className="text-[#157395] font-bold text-center text-[13px] py-4">Practice ID</TableHead>
//               <TableHead className="text-[#157395] font-bold text-center text-[13px] py-4">Comment</TableHead>
//               <TableHead className="text-[#157395] font-bold text-center text-[13px] py-4">Status</TableHead>
//               <TableHead className="text-[#157395] font-bold text-center text-[13px] py-4">Sub-Status</TableHead>
//               <TableHead className="text-[#157395] font-bold text-center text-[13px] py-4">Action</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {data.map((row, index) => {
//               const statusItem = getStatusItem(row.status);
//               const subStatusItem = getStatusItem(row.subStatus);
              
//               return (
//                 <TableRow key={row.id} className="hover:bg-gray-50/30 transition-colors border-b border-gray-50 h-[64px]">
//                   <TableCell className="pl-6">
//                     <Checkbox className="rounded-sm border-gray-200" />
//                   </TableCell>
//                   <TableCell className="text-center text-[13px] text-gray-800 font-medium">{row.practiceId}</TableCell>
//                   <TableCell className="text-center">
//                     <button className="bg-[#D1F3FD] text-[#157395] px-4 py-1.5 rounded-md text-[13px] font-semibold hover:bg-[#BEEBFA] transition-colors">
//                       Comments
//                     </button>
//                   </TableCell>
//                   <TableCell className="text-center">
//                     <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold text-[13px] ${statusItem.colorBg} ${statusItem.colorText}`}>
//                       {statusItem.icon}
//                       {statusItem.label}
//                     </div>
//                   </TableCell>
//                   <TableCell className="text-center">
//                     <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold text-[13px] ${subStatusItem.colorBg} ${subStatusItem.colorText}`}>
//                       {subStatusItem.icon}
//                       {subStatusItem.label}
//                     </div>
//                   </TableCell>
//                   <TableCell className="text-center">
//                     <button className="text-[#157395] hover:bg-[#D1F3FD] p-1.5 rounded-md transition-all">
//                       <Settings className="w-5 h-5" />
//                     </button>
//                   </TableCell>
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default WorkCentre;

import { 
  Search, 
  Settings, 
  CheckCircle2, 
  Clock, 
  Award,
  Layers
} from 'lucide-react';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Checkbox } from "@/components/ui/checkbox";

const WorkCentre = () => {

  const data = [
    { id: 1, practiceId: 'XYZ', status: 'Pending', subStatus: 'Pending' },
    { id: 2, practiceId: 'XYZ', status: 'Approved', subStatus: 'Approved' },
    { id: 3, practiceId: 'XYZ', status: 'Success', subStatus: 'Success' },
    { id: 4, practiceId: 'XYZ', status: 'Pending', subStatus: 'Pending' },
    { id: 5, practiceId: 'XYZ', status: 'Approved', subStatus: 'Approved' },
    { id: 6, practiceId: 'XYZ', status: 'Success', subStatus: 'Success' },
  ];

  const getStatusItem = (status) => {
    switch (status) {
      case 'Pending':
        return {
          icon: <Clock className="w-3.5 h-3.5" />,
          colorText: 'text-[#E88B46]',
          colorBg: 'bg-[#FFF4ED]',
          label: 'Pending'
        };
      case 'Approved':
        return {
          icon: <CheckCircle2 className="w-3.5 h-3.5" />,
          colorText: 'text-[#5EBC69]',
          colorBg: 'bg-[#F2FAF4]',
          label: 'Approved'
        };
      case 'Success':
        return {
          icon: <Award className="w-3.5 h-3.5" />,
          colorText: 'text-[#6190FF]',
          colorBg: 'bg-[#F0F5FF]',
          label: 'Success'
        };
      default:
        return { icon: null, colorText: '', colorBg: '', label: status };
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#EEF2F6] pt-2 pb-6 px-4 lg:px-0">

      {/* TITLE */}
      <h1 className="text-xl font-semibold text-[#157395] mb-6">
        Work Centre
      </h1>

      {/* FILTER BAR */}
      <div className="flex gap-4 mb-6 justify-between items-center">

        <div className="flex gap-4 items-center">

  {/* SEARCH */}
  <div className="relative w-[340px]">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

    <Input
      placeholder="Search"
      className="
        h-[42px]
        w-full
        pl-9
        bg-white
        border border-[#E6E6E6]
        rounded-md
        text-sm
        shadow-none
        focus-visible:ring-0
        focus-visible:border-[#157395]
      "
    />
  </div>

  {/* SELECT */}
  <Select>
    <SelectTrigger
      className="
        w-[340px]
        h-[42px]
        bg-white
        border border-[#E6E6E6]
        rounded-md
        text-sm
        shadow-none
        focus:ring-0
        focus:border-[#157395]
      "
    >
      <SelectValue placeholder="Select" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="all">All</SelectItem>
      <SelectItem value="active">Active</SelectItem>
      <SelectItem value="inactive">Inactive</SelectItem>
    </SelectContent>
  </Select>



        </div>

        {/* MULTIPLE BUTTON */}
        <Button
          variant="outline"
          className="text-[#157395] border-[#157395] hover:bg-[#157395]/5 h-10 px-4 rounded-md flex gap-2 items-center shadow-sm text-[13px] font-semibold"
        >
          <Layers className="w-4 h-4" />
          Multiple selection
        </Button>

      </div>

      {/* TABLE CARD */}
      <div className="flex-1 bg-[#F6F7F9] rounded-md overflow-hidden border border-[#ECECEC]">

        <Table>

          {/* HEADER */}
          <TableHeader className="bg-[#F3EFEA]">
            <TableRow className="border-b border-[#ECECEC] h-[56px]">

              <TableHead className="w-[60px] pl-6">
                <Checkbox className="border-[#D6D6D6]" />
              </TableHead>

              <TableHead className="text-[#157395] font-bold text-center text-[13px]">
                Practice ID
              </TableHead>

              <TableHead className="text-[#157395] font-bold text-center text-[13px]">
                Comment
              </TableHead>

              <TableHead className="text-[#157395] font-bold text-center text-[13px]">
                Status
              </TableHead>

              <TableHead className="text-[#157395] font-bold text-center text-[13px]">
                Sub-Status
              </TableHead>

              <TableHead className="text-[#157395] font-bold text-center text-[13px]">
                Action
              </TableHead>

            </TableRow>
          </TableHeader>

          {/* BODY */}
          <TableBody>
            {data.map((row, index) => {

              const statusItem = getStatusItem(row.status);
              const subStatusItem = getStatusItem(row.subStatus);

              return (
                <TableRow
                  key={row.id}
                  className={`h-[58px] border-b border-[#ECECEC] ${
                    index % 2 === 0 ? "bg-[#F9F9F9]" : "bg-[#F1F1F1]"
                  }`}
                >

                  <TableCell className="pl-6">
                    <Checkbox className="border-[#D6D6D6]" />
                  </TableCell>

                  <TableCell className="text-center text-[13px] text-gray-800 font-medium">
                    {row.practiceId}
                  </TableCell>

                  {/* COMMENT BUTTON */}
                  <TableCell className="text-center">
                    <button className="bg-[#CFEAF5] text-[#157395] px-3 py-1 rounded text-[12.5px] font-medium hover:bg-[#B9DEEC] transition">
                      Comments
                    </button>
                  </TableCell>

                  {/* STATUS */}
                  <TableCell className="text-center">
                    <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded font-medium text-[12.5px] ${statusItem.colorBg} ${statusItem.colorText}`}>
                      {statusItem.icon}
                      {statusItem.label}
                    </div>
                  </TableCell>

                  {/* SUB STATUS */}
                  <TableCell className="text-center">
                    <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded font-medium text-[12.5px] ${subStatusItem.colorBg} ${subStatusItem.colorText}`}>
                      {subStatusItem.icon}
                      {subStatusItem.label}
                    </div>
                  </TableCell>

                  {/* ACTION */}
                  <TableCell className="text-center">
                    <button className="text-[#157395] bg-[#D7EEF7] hover:bg-[#C2E3F1] p-2 rounded-full transition">
                      <Settings className="w-4.5 h-4.5" />
                    </button>
                  </TableCell>

                </TableRow>
              );
            })}
          </TableBody>

        </Table>

      </div>

    </div>
  );
};

export default WorkCentre;