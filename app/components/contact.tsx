"use client";
import React, { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input, TextArea } from "./ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
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

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        toast({
          title: "Message Sent!",
          description: "Your message was sent successfully.",
          style: toastStyles.success,
          duration: 3000,
        });
      } else {
        setStatus("Failed to send message.");
        toast({
          title: "Message Failed To Send",
          description: "Your message failed to send, please try again later.",
          variant: "destructive",
          style: toastStyles.error,
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred.");
      toast({
        title: "Message Failed To Send",
        description: "Your message failed to send, please try again later.",
        variant: "destructive",
        style: toastStyles.error,
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div
      className="max-w-4xl w-full min-h-screen justify-center snap-center mt-11 flex flex-col mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black"
      id="contact"
    >
      <Toaster />
      <div>
        <h2 className="font-bold text-4xl text-neutral-800 dark:text-neutral-200">
          Get In touch
        </h2>
        <p className="text-neutral-600 text-lg mt-2 dark:text-neutral-300">
          You can alternatively contact me at:
          <span className="font-bold pl-3 text-xl">
            omarelmasaoudi04@gmail.com
          </span>
        </p>
      </div>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstname"
              name="firstName"
              placeholder="First Name"
              type="text"
              className="bg-white"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastname"
              name="lastName"
              placeholder="Last Name"
              type="text"
              className="bg-white"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            placeholder="example_email@gmail.com"
            id="email"
            type="email"
            name="email"
            className="bg-white"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Message"
            rows={8}
            className="mt-2"
          />
        </LabelInputContainer>

        <button
          className={`bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : " "
          }`}
          type="submit"
        >
          {isSubmitting ? "Sending..." : "Send"}
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
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
