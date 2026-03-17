import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { 
  SquarePen, 
  Download, 
  RotateCw, 
  Trash2, 
  Lock 
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";

// Mock data fetching
const fetchPractices = async () => {
  // Simulating API call
  return [
    {
      id: "1",
      teamName: "Web Designer",
      practiceId: "P-XY-1",
      practiceName: "P-XY-1",
      isLocked: true,
    },
    {
      id: "2",
      teamName: "Frontend",
      practiceId: "P-XY-1",
      practiceName: "",
      isLocked: false,
    },
    {
      id: "3",
      teamName: "Backend",
      practiceId: "P-XY-1",
      practiceName: "",
      isLocked: false,
    },
  ];
};

const PracticeTable = ({ onEdit, onDownload, onSync, onDelete }) => {
  const { data: practices = [], isLoading } = useQuery({
    queryKey: ["practices"],
    queryFn: fetchPractices,
  });

  const columns = useMemo(
    () => [
      {
        accessorKey: "teamName",
        header: "Team Name",
        cell: ({ row }) => (
          <div className="text-gray-500 font-medium">{row.getValue("teamName")}</div>
        ),
      },
      {
        accessorKey: "practiceId",
        header: "Practice ID",
        cell: ({ row }) => (
          <div className="text-gray-400">{row.getValue("practiceId")}</div>
        ),
      },
      {
        accessorKey: "practiceName",
        header: "Practice Name",
        cell: ({ row }) => (
          <div className="text-gray-400">{row.getValue("practiceName") || ""}</div>
        ),
      },
      {
        accessorKey: "isLocked",
        header: "Locking",
        cell: ({ row }) => (
          <div className="flex justify-center">
            {row.getValue("isLocked") ? (
              <Lock className="w-4 h-4 text-[#157395]" />
            ) : (
              <Lock className="w-4 h-4 text-[#157395]/40" />
            )}
          </div>
        ),
      },
      {
        id: "actions",
        header: "Action",
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onEdit(row.original)}
              className="p-1.5 rounded-md hover:bg-gray-50 text-[#157395] transition-colors"
            >
              <SquarePen className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onDownload(row.original)}
              className="p-1.5 rounded-md hover:bg-gray-50 text-[#157395] transition-colors"
            >
              <Download className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onSync(row.original)}
              className="p-1.5 rounded-md hover:bg-gray-50 text-[#157395] transition-colors"
            >
              <RotateCw className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onDelete(row.original)}
              className="p-1.5 rounded-md bg-orange-50 hover:bg-orange-100 text-orange-400 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ),
      },
    ],
    [onEdit, onDownload, onSync, onDelete]
  );

  const table = useReactTable({
    data: practices,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return <div className="p-8 text-center text-gray-500">Loading practices...</div>;
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-blue-50/30">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-none hover:bg-transparent">
                {headerGroup.headers.map((header) => (
                  <TableHead 
                    key={header.id}
                    className="h-14 px-6 text-[#157395] font-semibold text-sm"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow 
                  key={row.id} 
                  className="border-b border-gray-50 last:border-none hover:bg-gray-50/50 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-6 py-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-gray-400">
                  No practices found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Footer spacing to match design */}
      <div className="h-12 bg-white" />
    </div>
  );
};

export default PracticeTable;
