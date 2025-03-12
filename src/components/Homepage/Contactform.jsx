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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Input } from "@/components/ui/input";
import FormButton from "../Button/FormButton";



export default function Contactform() {
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
    <div className="w-full h-full p-[2vw] pb-[3vw] rounded-[0.5vw] fadein">
      <Form {...form}>
        <form className="space-y-4">
          {/* Name Field */}
          <div className="w-full flex gap-[1vw] items-center ">
            <div className="w-[90vw] h-fit">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="required">
                    <FormControl>
                      <Input placeholder="Name *" {...field} className="h-[4vw] rounded-[0.5vw] border drop-shadow-none shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl tablet:h-[8vw]" />
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
                      <Input placeholder="Email Address *" {...field} className="h-[4vw] rounded-[0.5vw] border drop-shadow-none  shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl  tablet:h-[8vw]" />
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
                      <Input placeholder="Phone Number *" {...field} className="h-[4vw] rounded-[0.5vw] border drop-shadow-none shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl  tablet:h-[8vw]" />
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
                name="company"
                render={({ field }) => (
                  <FormItem className="required">
                    <FormControl>
                      <Input placeholder="Company Name *" {...field} className="h-[4vw] rounded-[0.5vw] border drop-shadow-none  shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl  tablet:h-[8vw]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Select>
            <SelectTrigger className="w-full h-[4vw] drop-shadow-none border  shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl tablet:px-[5vw]  tablet:h-[8vw]">
              <SelectValue placeholder="Services" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Services Offered</SelectLabel>
                <SelectItem value="1">Service 1</SelectItem>
                <SelectItem value="2">Service 2</SelectItem>
                <SelectItem value="3">Service 3</SelectItem>
                <SelectItem value="4">Service 4</SelectItem>
                <SelectItem value="5">Service 5</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="w-full flex gap-[1vw] items-center">
            <div className="w-[90vw] h-fit">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="required">
                    <FormControl>
                      <Textarea  placeholder="Message" {...field} className="h-[6vw] rounded-[0.5vw] px-[1vw] placeholder:text-[#111111] placeholder:text-[1vw] bg-white drop-shadow-none shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 mobile:rounded-xl tablet:placeholder:text-[1.8vw] tablet:px-[5vw] tablet:h-[12vw] tablet:py-[2vw]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Checkbox Field */}
          <div className="w-full flex gap-[1vw] justify-center mobile:justify-start mobile:items-start mobile:gap-3 tablet:block tablet:w-4/5 ">
            <Checkbox className=""/>
            <span className="text-[1.1vw] text-black/70  capitalize mobile:text-[1rem] tablet:text-[2vw] tablet:px-[3vw]">
              Sign me up to receive future marketing communications regarding Hiveminds, services and events.
            </span>
          </div>

          {/* Submit Button */}
          <div className="w-full flex tablet:pt-[5vw]">
            <FormButton
              text="Submit"
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
