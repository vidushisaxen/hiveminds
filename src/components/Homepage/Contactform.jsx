import { useForm } from "react-hook-form";
import { useState } from 'react';
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
    <div className="w-full h-full p-[2vw] pb-[3vw] rounded-[0.5vw] fadeup">
      <Form {...form}>  
        <form className="space-y-8">
          {/* Name Field */}
          <div className="w-full flex gap-[1vw] items-center ">
            <div className="w-[90vw] h-fit">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="required">
                    <FormControl>
                      <Input placeholder="First Name *" {...field} className="h-[4vw] rounded-[0.5vw] drop-shadow-none  shadow-none"/>
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
                      <Input placeholder="Email Address *" {...field} className="h-[4vw] rounded-[0.5vw] drop-shadow-none  shadow-none"/>
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
                      <Input placeholder="Phone Number *" {...field} className="h-[4vw] rounded-[0.5vw] drop-shadow-none shadow-none"/>
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
                      <Input placeholder="Company Name *" {...field} className="h-[4vw] rounded-[0.5vw] drop-shadow-none  shadow-none"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Select>
      <SelectTrigger className="w-full h-[4vw] drop-shadow-none  shadow-none">
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

          {/* Message Field */}
          <div className="w-full flex gap-[1vw] items-center">
            <div className="w-[90vw] h-fit">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="required">
                    <FormControl>
                      <Input placeholder="Message" {...field} className="h-[6vw] rounded-[0.5vw] drop-shadow-none  shadow-none"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Checkbox Field */}
          <div className="w-full flex gap-[1vw]  justify-center">
            <Checkbox/>
                  <span className="text-[1.1vw] text-black/70">
                  Sign me up to receive future marketing communications regarding Hiveminds, services and events.
                  </span>
                
            
          
          </div>

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
