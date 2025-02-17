"use client";

import React from 'react';
import { useState, ChangeEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronRight } from "lucide-react"
import { Loader2 } from "lucide-react"
import countryCodes from '../app/api/data/CountryCodes.json'; // Import your JSON file

interface FormData {
  Name_First: string;
  Name_Last: string;
  Email: string;
  PhoneNumber_countrycode: string;
  SingleLine: string;
  SingleLine1: string;
  MultiLine: string;
  phoneNumber: string; // New field
}

interface FormErrors {
  Name_First?: string;
  Name_Last?: string;
  Email?: string;
  PhoneNumber_countrycode?: string;
  SingleLine?: string;
  SingleLine1?: string;
  phoneNumber?: string;
}

const Form = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [formData, setFormData] = useState<FormData>({
    Name_First: "",
    Name_Last: "",
    Email: "",
    PhoneNumber_countrycode: "+91 ",
    SingleLine: "",
    SingleLine1: "",
    MultiLine: "",
    phoneNumber: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  // Combine country code and phone number
  useEffect(() => {
    const combinedValue = `${selectedCountryCode}-${formData.phoneNumber}`;
    setFormData(prev => ({
      ...prev,
      PhoneNumber_countrycode: combinedValue
    }));
  }, [selectedCountryCode, formData.phoneNumber]);

  const validateField = (name: keyof FormData, value: string): void => {
    let error = "";
    switch (name) {
      case "Name_First":
      case "Name_Last":
      case "SingleLine":
      case "SingleLine1":
        error = value.trim() ? "" : `${name.replace(/_/g, ' ')} is required`;
        break;
      case "Email":
        if (!value) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Invalid email format";
        break;
      case "phoneNumber":
        if (!value) error = "Phone number is required";
        else if (!/^\d+$/.test(value)) error = "Only numbers allowed";
        break;
    }
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // Validate all fields
    (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
      if (key !== "PhoneNumber_countrycode") { // Skip combined field
        validateField(key, formData[key]);
      }
    });
    
    if (Object.values(errors).every(error => !error)) {
      setIsLoading(true);
      const form = document.getElementById('zohoForm');
      if (form) {
        (form as HTMLFormElement).submit();
      }
    }
    setIsLoading(false);
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

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setFormData(prev => ({
      ...prev,
      phoneNumber: value
    }));
    validateField("phoneNumber", value);
  };

  return (
    <div className="mx-auto bg-black p-4 rounded-lg">
      <form 
        onSubmit={handleSubmit}
        id="zohoForm"
        className="space-y-4 md:space-y-6"
        action='https://forms.zohopublic.in/talentxpone1/form/Websiteleadform/formperma/TrKSxL1RnbIdPe3g_l3bftM9B0z3vZuk5Yt8ekyGV0g/htmlRecords/submit'
        method="POST"
      >
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />

        <div className="bg-white rounded-lg p-4 md:p-8 space-y-4">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {/* First Name */}
            <div>
              <Input
                name="Name_First"
                value={formData.Name_First}
                onChange={handleChange}
                onBlur={(e) => validateField("Name_First", e.target.value)}
                placeholder="First name*"
                className="border-t-0 border-x-0 rounded-none focus-visible:ring-0 px-0 text-xs md:text-sm h-8 md:h-10 text-black"
              />
              {errors.Name_First && <span className="text-red-500 text-xs">{errors.Name_First}</span>}
            </div>

            {/* Last Name */}
            <div>
              <Input
                name="Name_Last"
                value={formData.Name_Last}
                onChange={handleChange}
                onBlur={(e) => validateField("Name_Last", e.target.value)}
                placeholder="Last name*"
                className="border-t-0 border-x-0 rounded-none focus-visible:ring-0 px-0 text-xs md:text-sm h-8 md:h-10 text-black"
              />
              {errors.Name_Last && <span className="text-red-500 text-xs">{errors.Name_Last}</span>}
            </div>

            {/* Email */}
            <div>
              <Input
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                onBlur={(e) => validateField("Email", e.target.value)}
                placeholder="Email*"
                className="border-t-0 border-x-0 rounded-none focus-visible:ring-0 px-0 text-xs md:text-sm h-8 md:h-10 text-black"
              />
              {errors.Email && <span className="text-red-500 text-xs">{errors.Email}</span>}
            </div>

            {/* Phone Number */}
            <div className="">
              <div className="flex gap-2">
                <Select 
                  value={selectedCountryCode}
                  onValueChange={(value) => setSelectedCountryCode(value)}
                >
                  <SelectTrigger className="w-8 md:w-16 focus:ring-0 px-0 text-xs md:text-sm h-8 md:h-10 text-black">
                    <SelectValue placeholder="+91" />
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes.map((country,i) => (
                      <SelectItem key={i} value={country.dial_code}>
                        {country.dial_code}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Input
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handlePhoneChange}
                  onBlur={(e) => validateField("phoneNumber", e.target.value)}
                  placeholder="Phone number*"
                  className="border-t-0 border-x-0 rounded-none focus-visible:ring-0 px-0 text-xs md:text-sm h-8 md:h-10 text-black flex-1"
                />
              </div>
              {errors.phoneNumber && (
                <span className="text-red-500 text-xs">{errors.phoneNumber}</span>
              )}
              <input
                type="hidden"
                name="PhoneNumber_countrycode"
                value={formData.PhoneNumber_countrycode}
              />
            </div>

            {/* Company */}
            <div>
              <Input
                name="SingleLine"
                value={formData.SingleLine}
                onChange={handleChange}
                onBlur={(e) => validateField("SingleLine", e.target.value)}
                placeholder="Company*"
                className="border-t-0 border-x-0 rounded-none focus-visible:ring-0 px-0 text-xs md:text-sm h-8 md:h-10 text-black"
              />
              {errors.SingleLine && <span className="text-red-500 text-xs">{errors.SingleLine}</span>}
            </div>

            {/* Designation */}
            <div>
              <Input
                name="SingleLine1"
                value={formData.SingleLine1}
                onChange={handleChange}
                onBlur={(e) => validateField("SingleLine1", e.target.value)}
                placeholder="Designation*"
                className="border-t-0 border-x-0 rounded-none focus-visible:ring-0 px-0 text-xs md:text-sm h-8 md:h-10 text-black"
              />
              {errors.SingleLine1 && <span className="text-red-500 text-xs">{errors.SingleLine1}</span>}
            </div>
          </div>

          {/* Message */}
          <div>
            <Textarea
              name="MultiLine"
              value={formData.MultiLine}
              onChange={handleChange}
              placeholder="Your Message"
              className="rounded-md focus-visible:ring-0 p-2 min-h-[100px] text-xs md:text-sm text-black"
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-white text-black hover:bg-[#E12B15] hover:text-white h-10 md:h-12 text-sm md:text-base transition-colors duration-300"
        >
          {isLoading ? (
            <Loader2 className="animate-spin mr-2 h-4 w-4" />
          ) : null}
          Submit <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}

export default Form;
