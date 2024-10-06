/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import ReturnCarModal from "./returncarmodal/ReturnCarModal";



export const columns: ColumnDef< any>[] = [
  {
    header: "ID",
    cell: ({ row }) => <p className="text-14-medium">{row.index + 1}</p>,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <p className="text-14-medium">{row.original.user?.name}</p>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="min-w-[115px]">
        <Badge  style={
                  row.original.car?.status === "available"
                    ? { backgroundColor: "#86efac", color: "#fff"}
                    : { backgroundColor: "#fb7185", color: "#fff"}
                }
                variant={"outline"}>{row.original.car?.status}</Badge>
      </div>
    ),
  },
  {
    accessorKey: "pricePerHour",
    header: "Price Per Hour",
    cell: ({ row }) => (
      <p className="text-14-medium">$ {row.original.car?.pricePerHour}/h</p>
    ),
  },
  {
    accessorKey: "totalCost",
    header: "Total Cost",
    cell: ({ row }) => (
      <p className="text-14-medium">$ {row.original.totalCost}</p>
    ),
  },
  
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
        <p className="text-14-regular min-w-[100px]">
        {row.original.date.split('T')[0]}
      </p>
    ),
  },
  {
    accessorKey: "car",
    header: "Car",
    cell: ({ row }) => {
    <p className="text-14-regular min-w-[100px]">
        {row.original.car?.name}
      </p>

      return (
        <div className="flex items-center gap-3">
          <img
            src={row.original.car?.image}
            alt={row.original.car?.name}
            width={100}
            height={100}
            className="size-8"
          />
          <p className=" whitespace-nowrap">{row.original.car?.name}</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row }) => (
        <div className="flex gap-1">
          <ReturnCarModal
          type="Confirm Return"
          booking={row.original}
        >
          <Button className="cursor-pointer btn-primary">
         <span className=" relative z-10">Return Car</span>
          </Button>
        </ReturnCarModal>
      
      </div>
    ),
  },
];
