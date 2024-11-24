import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { ColumnDef } from "@tanstack/react-table";
import { Plus, Edit, MoreHorizontal, Trash } from "lucide-react";
import { useLoaderData, useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AlertModal from "@/components/modals/alert-modal";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { format } from "date-fns";

export type PatientColumn = {
  id: string;
  fullName: string;
  age: string;
  sex: string;
  phone: string;
  email: string;
  doctor: string;
  injury: string;
  dateOfVisit: string;
};

export const patientsDataLoader = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/patients");
    return response.data.map((item: PatientColumn) => ({
      ...item,
      dateOfVisit: format(item.dateOfVisit, "MMMM do, yyyy (h:mm a)"),
    }));
  } catch (err) {
    console.log(err);
    return [];
  }
};

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const data = useLoaderData() as PatientColumn[];

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-1">
        <div className="flex items-center justify-between">
          <Heading
            title={`Patients List (${data.length})`}
            description="Manage patients information"
          />
          <Button onClick={() => navigate(`/dashboard/patient`)}>
            <Plus className="mr-2 w-4 h-4" />
            Add New
          </Button>
        </div>
        <Separator />
        <DataTable columns={columns} data={data} searchKey="fullName" />
      </div>
    </div>
  );
};

export default DashboardPage;

const columns: ColumnDef<PatientColumn>[] = [
  {
    accessorKey: "fullName",
    header: "Full name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "sex",
    header: "Sex",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "doctor",
    header: "Doctor",
  },
  {
    accessorKey: "injury",
    header: "Injury/Condition",
  },
  {
    accessorKey: "dateOfVisit",
    header: "Visit Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

interface CellActionProps {
  data: PatientColumn;
}

const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:3000/api/patients/${data.id}`);
      navigate("/dashboard");
      toast.success("Patient information deleted successfully!");
    } catch (error) {
      toast.error("Something went wrong!,please try again");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-8 h-8 p-0" variant={"ghost"}>
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => navigate(`/dashboard/patient/${data.id}`)}
          >
            <Edit className="mr-2 w-4 h-4" />
            Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 w-4 h-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
