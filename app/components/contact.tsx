"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input, TextArea } from "./ui/input";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const toastStyles = {
  success: {
    backgroundColor: "#4BB543",
    color: "#FFFFFF",
    border: "none",
  },
  error: {
    backgroundColor: "#F44336",
    color: "#FFFFFF",
  },
};

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: { target: { name: string; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
        style: toastStyles.error,
        duration: 3000,
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
        style: toastStyles.error,
        duration: 3000,
      });
      return;
    }
    
    setStatus("Sending...");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        toast({
          title: "Message Sent!",
          description: "Your message was sent successfully. I'll get back to you soon!",
          style: toastStyles.success,
          duration: 5000,
        });
      } else {
        setStatus(`Failed to send message: ${data.message || ''}`);
        toast({
          title: "Message Failed To Send",
          description: "Your message failed to send. Please try again later or email me directly.",
          variant: "destructive",
          style: toastStyles.error,
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred.");
      toast({
        title: "Connection Error",
        description: "There was a problem connecting to the server. Please try again later.",
        variant: "destructive",
        style: toastStyles.error,
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div
      className="max-w-4xl w-full justify-center snap-center mt-8 md:mt-11 flex flex-col mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-lg dark:bg-black/30   bg-gray-900 border border-gray-800"
      id="contact"
    >
      <Toaster />
      <div>
        <h2 className="font-bold text-3xl md:text-4xl text-neutral-200">
          Get In touch
        </h2>
        <p className="text-neutral-300 text-sm md:text-lg mt-2">
          You can alternatively contact me at:
          <span className="block md:inline font-bold mt-1 md:mt-0 md:pl-3 md:text-xl text-blue-400">
            omarelmasaoudi04@gmail.com
          </span>
        </p>
      </div>

      <form className="my-6 md:my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-2 mb-4 ">
          <LabelInputContainer className="md:w-1/2">
            <Label htmlFor="firstName" className="text-neutral-300">First name</Label>
            <Input
              id="firstname"
              name="firstName"
              placeholder="First Name"
              type="text"
              className="bg-black/40 border-gray-700 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="md:w-1/2">
            <Label htmlFor="lastName" className="text-neutral-300">Last name</Label>
            <Input
              id="lastname"
              name="lastName"
              placeholder="Last Name"
              type="text"
              className="bg-black/40 border-gray-700 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className="md:w-1/2">
            <Label htmlFor="email" className="text-neutral-300">Email Address</Label>
            <Input
              placeholder="example_email@gmail.com"
              id="email"
              type="email"
              name="email"
              className="bg-black/40 border-gray-700 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>

          <LabelInputContainer className="md:w-1/2">
            <Label htmlFor="phone" className="text-neutral-300">Phone Number <span className="text-xs text-gray-500">(Optional)</span></Label>
            <Input
              placeholder="Your phone number"
              id="phone"
              type="tel"
              name="phone"
              className="bg-black/40 border-gray-700 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={formData.phone}
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-6 md:mb-8">
          <Label htmlFor="message" className="text-neutral-300">Your Message</Label>
          <TextArea
            placeholder="Write your message here..."
            id="message"
            name="message"
            className="min-h-[120px] md:min-h-[150px] bg-black/40 border-gray-700 text-white resize-y focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-blue-900 to-blue-700 block w-full text-white rounded-md h-12 font-medium shadow-[0px_1px_0px_0px_#ffffff20_inset,0px_-1px_0px_0px_#ffffff10_inset] border border-blue-800"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
          <BottomGradient />
        </button>
        
        {status && (
          <p className={`mt-2 text-sm ${status.includes("success") ? "text-green-500" : status === "Sending..." ? "text-blue-500" : "text-red-500"}`}>
            {status}
          </p>
        )}

        <div className="bg-gradient-to-r from-transparent via-blue-800/30 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Contact;