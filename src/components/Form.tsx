"use client";

import { useState, ChangeEvent, FocusEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronRight } from "lucide-react"

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  designation: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  designation?: string;
}

const Form = () => {
  const [countryCode, setCountryCode] = useState<string>("+91");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (name: keyof FormData, value: string): void => {
    let error = "";
    switch (name) {
      case "firstName":
      case "lastName":
      case "company":
      case "designation":
        error = value.trim() ? "" : `${name} is required`;
        break;
      case "email":
        if (!value) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Invalid email format";
        break;
      case "phone":
        if (!value) error = "Phone is required";
        else if (!/^\d+$/.test(value)) error = "Phone must contain only numbers";
        break;
    }
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // Validate all fields
    (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
      if (key !== "message") validateField(key, formData[key]);
    });
    
    if (Object.values(errors).every(error => !error)) {
      console.log("Form submitted:", { ...formData, countryCode });
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      validateField(name as keyof FormData, value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-black w-[315.34px] h-[212.07px] md:w-[592.68px] md:h-[427.76px] mx-auto">
      <div className="bg-white rounded-lg p-4 md:p-8">
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {/* First Name */}
          <div>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={(e: FocusEvent<HTMLInputElement>) => 
                validateField("firstName", e.target.value)
              }
              placeholder="First name*"
              className="border-t-0 border-x-0 rounded-none focus-visible:ring-0 px-0 text-[8px] leading-[9.38px] md:text-[12px] md:leading-[14.06px] h-8 md:h-10"
            />
            {errors.firstName && <span className="text-red-500 text-[6px] md:text-[10px]">{errors.firstName}</span>}
          </div>

          {/* Last Name */}
          <div>
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={(e: FocusEvent<HTMLInputElement>) => 
                validateField("lastName", e.target.value)
              }
              placeholder="Lastname*"
              className="border-t-0 border-x-0 rounded-none focus-visible:ring-0 px-0 text-[8px] leading-[9.38px] md:text-[12px] md:leading-[14.06px] h-8 md:h-10"
            />
            {errors.lastName && <span className="text-red-500 text-[6px] md:text-[10px]">{errors.lastName}</span>}
          </div>

          {/* Email */}
          <div>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={(e: FocusEvent<HTMLInputElement>) => 
                validateField("email", e.target.value)
              }
              placeholder="Email*"
              className="border-t-0 border-x-0 rounded-none focus-visible:ring-0 px-0 text-[8px] leading-[9.38px] md:text-[12px] md:leading-[14.06px] h-8 md:h-10"
            />
            {errors.email && <span className="text-red-500 text-[6px] md:text-[10px]">{errors.email}</span>}
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-end gap-1 md:gap-2">
              <Select defaultValue="+91" onValueChange={setCountryCode}>
                <SelectTrigger className="w-[29.19px] md:w-[57.29px] h-[11.75px] md:h-[24.58px] text-[8px] leading-[9.38px] md:text-[12px] md:leading-[14.06px]">
                  <SelectValue placeholder="+91" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+91">+91</SelectItem>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
                  <SelectItem value="+81">+81</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={(e: FocusEvent<HTMLInputElement>) => 
                  validateField("phone", e.target.value)
                }
                placeholder="Phone*"
                className="border-t-0 border-x-0 rounded-none focus-visible:ring-0 px-0 text-[8px] leading-[9.38px] md:text-[12px] md:leading-[14.06px] h-8 md:h-10"
              />
            </div>
            {errors.phone && <span className="text-red-500 text-[6px] md:text-[10px]">{errors.phone}</span>}
          </div>

          {/* Company */}
          <div>
            <Input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              onBlur={(e: FocusEvent<HTMLInputElement>) => 
                validateField("company", e.target.value)
              }
              placeholder="Company*"
              className="border-t-0 border-x-0 rounded-none focus-visible:ring-0 px-0 text-[8px] leading-[9.38px] md:text-[12px] md:leading-[14.06px] h-8 md:h-10"
            />
            {errors.company && <span className="text-red-500 text-[6px] md:text-[10px]">{errors.company}</span>}
          </div>

          {/* Designation */}
          <div>
            <Input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              onBlur={(e: FocusEvent<HTMLInputElement>) => 
                validateField("designation", e.target.value)
              }
              placeholder="Designation*"
              className="border-t-0 border-x-0 rounded-none focus-visible:ring-0 px-0 text-[8px] leading-[9.38px] md:text-[12px] md:leading-[14.06px] h-8 md:h-10"
            />
            {errors.designation && <span className="text-red-500 text-[6px] md:text-[10px]">{errors.designation}</span>}
          </div>
        </div>
        {/* Message */}
        <div className="mt-2 md:mt-4">
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="rounded-[2.5px] md:rounded-[5px] focus-visible:ring-0 px-1 min-h-[60px] md:min-h-[100px] text-[8px] leading-[9.38px] md:text-[12px] md:leading-[14.06px] resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-white text-black hover:bg-[#E12B15] hover:text-white h-8 md:h-10 text-[8px] leading-[9.38px] md:text-[12px] md:leading-[14.06px]"
      >
        Submit <ChevronRight className="text-[#E12B15] group-hover:!text-white" />
      </Button>
    </form>
  )
}

export default Form;
