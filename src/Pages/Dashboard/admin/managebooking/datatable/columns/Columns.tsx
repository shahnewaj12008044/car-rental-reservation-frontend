/* eslint-disable @typescript-eslint/no-explicit-any */

import { Badge } from "@/components/ui/badge";

import { ColumnDef } from "@tanstack/react-table";
import CancelModal from "./CancelModal";
import CarModal from "@/components/shared/CarModal";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<any>[] = [
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
    accessorKey: "isBooked",
    header: "Booked",
    cell: ({ row }) => (
      <div className="min-w-[115px]">
        <Badge
          style={
            row.original.isBooked === "approved"
              ? { backgroundColor: "#86efac", color: "#fff" }
              : { backgroundColor: "#fb7185", color: "#fff" }
          }
          variant={"outline"}
        >
          {row.original.isBooked}
        </Badge>
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <p className="text-14-regular min-w-[100px]">
        {row.original.date.split("T")[0]}
      </p>
    ),
  },
  {
    accessorKey: "car",
    header: "Car",
    cell: ({ row }) => {
      <p className="text-14-regular min-w-[100px]">{row.original.car?.name}</p>;

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
    cell: ({ row }) => {
      return (
        <div className="flex gap-1">
          {/* Conditionally render CarModal based on status */}

          <CarModal type="Approved" booking={row.original}>
            <Button className="btn-primary  rounded-full">
              <span className="text-xs">Approve</span>
            </Button>
          </CarModal>

          {/* Conditionally render CancelModal based on status */}

          <CancelModal
            type="cancel"
            car={row.original.car?._id}
            user={row.original.user?._id}
            booking={row.original}
          >
            <Button className="bg-red-500 rounded-full">Cancel</Button>
          </CancelModal>
        </div>
      );
    },
  },
];
