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
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import LinkButton from "../Button/LinkButton";

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
    <div className="w-full h-full p-[2vw] pb-[3vw] rounded-[1vw]">
      <Form {...form}>  
        <form className="space-y-8">
          {/* Name Field */}
          <div className="w-full flex gap-[1vw] items-center ">
            <div className="w-[90vw] h-[5vw]   shadow-xl drop-shadow-l">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="required">
                    <FormControl>
                      <Input placeholder="First Name *" {...field} className="h-[5vw] rounded-[20px]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="w-full flex gap-[1vw] items-center ">
            <div className="w-[90vw] h-[5vw] shadow-xl drop-shadow-l">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="required">
                    <FormControl>
                      <Input placeholder="Email Address *" {...field} className="h-[5vw] rounded-[20px]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="w-full flex gap-[1vw] items-center ">
            <div className="w-[90vw] h-[5vw] shadow-xl drop-shadow-l">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="required">
                    <FormControl>
                      <Input placeholder="Phone Number *" {...field} className="h-[5vw] rounded-[20px]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Company Field */}
          <div className="w-full flex gap-[1vw] items-center ">
            <div className="w-[90vw] h-[5vw] shadow-xl drop-shadow-l">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="required">
                    <FormControl>
                      <Input placeholder="Company Name *" {...field} className="h-[5vw] rounded-[20px]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Services Select Field */}
          {/* <Select onValueChange={handleValueChange}>
            <SelectTrigger aria-label="Select Service" className="w-full state placeholder:text-[2vw] pl-[3vw] ">
              <SelectValue placeholder="Services" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              <SelectGroup>
                <SelectLabel>Services</SelectLabel>
                <SelectItem value="service1">Service1</SelectItem>
                <SelectItem value="service2">Service2</SelectItem>
                <SelectItem value="service3">Service3</SelectItem>
                <SelectItem value="service4">Service4</SelectItem>
                <SelectItem value="service5">Service5</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select> */}

          {/* Message Field */}
          <div className="w-full flex gap-[1vw] items-center ">
            <div className="w-[90vw] h-[5vw] shadow-xl drop-shadow-l">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="required">
                    <FormControl>
                      <Input placeholder="Message" {...field} className="h-[5vw] rounded-[20px]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Checkbox Field */}
          <div className="w-full flex items-center justify-center">
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between w-full">
                  <FormControl>
                    <Input type="checkbox" {...field} className="w-[2vw] h-[2vw]" />
                  </FormControl>
                  <span className="content w-[80vw]">
                  Sign me up to receive future marketing communications regarding Hiveminds, services and events.
                  </span>
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <div className="w-full flex">
            <LinkButton
              link={"#"}
              text={"Submit"}
              type="submit"
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
