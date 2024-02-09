import { useState } from "react";

import * as z from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoaderData, useNavigate } from "react-router-dom";

import { Patient } from "../../../backend/node_modules/@prisma/client";
import Heading from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import AlertModal from "@/components/modals/alert-modal";

const formSchema = z.object({
  fullName: z.string().min(1),
  sex: z.string().min(1),
  age: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().min(1),
  doctor: z.string().min(1),
  injury: z.string().min(1),
});

type PatientFormValues = z.infer<typeof formSchema>;

const PatientForm: React.FC = () => {
  const navigate = useNavigate();
  const initialData = useLoaderData() as Patient | null;

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData
    ? "Edit patient information"
    : "Create patient information";
  const description = initialData
    ? "Edit a patient information"
    : "Add a new patient information";
  const toastMessage = initialData
    ? "Patient information updated."
    : "Patient information created.";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<PatientFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      fullName: "",
      sex: "",
      age: "",
      phone: "",
      email: "",
      doctor: "",
      injury: "",
    },
  });

  const onSubmit = async (data: PatientFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(
          `http://localhost:3000/api/patients/${initialData.id}`,
          data
        );
      } else {
        await axios.post(`http://localhost:3000/api/patients`, data);
      }
      navigate(`/dashboard`);
      toast.success(toastMessage);
    } catch (error) {
      toast.error("Something went wrong!,please try again");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(
        `http://localhost:3000/api/patients/${initialData?.id}`
      );
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
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant={"destructive"}
            size={"icon"}
            onClick={() => {
              setOpen(true);
            }}
          >
            <Trash className="w-4 h-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Patient name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="full name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sex"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sex</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="M" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="30" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="doctor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Doctor name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Dr. aklilu "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="injury"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Injury/Condition</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="allergy"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={loading}>
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default PatientForm;
