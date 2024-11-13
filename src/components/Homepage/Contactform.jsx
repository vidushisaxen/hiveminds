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
import LinkButton from "../Button/LinkButton";
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
    <div className="w-full h-full p-[2vw] pb-[3vw] rounded-[1vw]">
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
                      <Input placeholder="First Name *" {...field} className="h-[4vw] rounded-[1vw]"/>
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
                      <Input placeholder="Email Address *" {...field} className="h-[4vw] rounded-[1vw]"/>
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
                      <Input placeholder="Phone Number *" {...field} className="h-[4vw] rounded-[1vw]"/>
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
                      <Input placeholder="Company Name *" {...field} className="h-[4vw] rounded-[1vw]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Select>
      <SelectTrigger className="w-full h-[4vw]">
        <SelectValue placeholder="Services" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
          <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe & Africa</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
          <SelectItem value="west">
            Western European Summer Time (WEST)
          </SelectItem>
          <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
          <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
          <SelectItem value="ist">India Standard Time (IST)</SelectItem>
          <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
          <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
          <SelectItem value="ist_indonesia">
            Indonesia Central Standard Time (WITA)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Australia & Pacific</SelectLabel>
          <SelectItem value="awst">
            Australian Western Standard Time (AWST)
          </SelectItem>
          <SelectItem value="acst">
            Australian Central Standard Time (ACST)
          </SelectItem>
          <SelectItem value="aest">
            Australian Eastern Standard Time (AEST)
          </SelectItem>
          <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
          <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>South America</SelectLabel>
          <SelectItem value="art">Argentina Time (ART)</SelectItem>
          <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
          <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
          <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

          {/* Message Field */}
          <div className="w-full flex gap-[1vw] items-center ">
            <div className="w-[90vw] h-fit">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="required">
                    <FormControl>
                      <Input placeholder="Message" {...field} className="h-[4vw] rounded-[1vw]"/>
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
