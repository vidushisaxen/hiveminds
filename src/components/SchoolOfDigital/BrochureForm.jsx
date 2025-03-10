import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "../ui/checkbox";
import { Input } from "@/components/ui/input";
import FormButton from "../Button/FormButton";
// import { Checkbox } from "@radix-ui/react-checkbox";

export default function Brochureform() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      services: "service1",
      terms: false,
      pageURL: typeof window !== 'undefined' ? window.location.href : '',
    },
  });

  const handleValueChange = (value) => {
    setSelectedRole(value);
  };

  return (
    <div className="w-full h-full p-[2vw] pb-[3vw] rounded-[0.5vw] fadein bg-white">
      <p className="text-[2vw] font-medium text-center py-[2vw]">Fill in the Details and Get your Brochure Now!</p>
      <Form {...form}>
        <form className="space-y-4">
          {/* Name Field */}
          <div className="w-full flex gap-[1vw] items-center ">
            <div className="w-[90vw] h-fit ">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="required">
                    <FormControl>
                      <Input placeholder="First Name *" {...field} className="h-[4vw] rounded-[0.5vw] drop-shadow-none shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl bg-[#F2F2F2]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="w-full flex gap-[1vw] items-center ">
            <div className="w-[90vw] h-fit ">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="required">
                    <FormControl>
                      <Input placeholder="Email Address *" {...field} className="h-[4vw] rounded-[0.5vw] drop-shadow-none  shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl bg-[#F2F2F2]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="w-full flex gap-[1vw] items-center ">
            <div className="w-[90vw] h-fit">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="required">
                    <FormControl>
                      <Input placeholder="Phone Number *" {...field} className="h-[4vw] rounded-[0.5vw] drop-shadow-none shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl bg-[#F2F2F2]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Company Field */}
          <div className="w-full flex gap-[1vw] items-center ">
            <div className="w-[90vw] h-fit ">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem >
                    <FormControl>
                      <Input placeholder="City" {...field} className="h-[4vw] rounded-[0.5vw] drop-shadow-none  shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl bg-[#F2F2F2]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Select>
            <SelectTrigger className="w-full h-[4vw] drop-shadow-none  shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl bg-[#F2F2F2]">
              <SelectValue placeholder="Mode of Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Modes Offered</SelectLabel>
                <SelectItem value="1">Mode 1</SelectItem>
                <SelectItem value="2">Mode 2</SelectItem>
                <SelectItem value="3">Mode 3</SelectItem>
                <SelectItem value="4">Mode 4</SelectItem>
                <SelectItem value="5">Mode 5</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
         

          {/* Submit Button */}
          <div className="w-full flex">
            <FormButton
              text="Submit"
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
