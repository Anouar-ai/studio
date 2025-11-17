"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type State = {
  message?: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
};

export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
    };
  }

  // In a real application, you would send an email, save to a database, etc.
  console.log("Contact form submitted successfully:", validatedFields.data);

  return { message: "Your message has been sent successfully!", errors: null };
}


const freeTrialSchema = z.object({
  email: z.string().email("Invalid email address."),
  country: z.string().min(1, "Please select a country."),
  device: z.string().min(1, "Please select a device type."),
  application: z.string().min(1, "Please select an application."),
  note: z.string().optional(),
});

type TrialState = {
  message?: string | null;
  errors?: {
    email?: string[];
    country?: string[];
    device?: string[];
    application?: string[];
  } | null;
};


export async function submitFreeTrialForm(prevState: TrialState, formData: FormData): Promise<TrialState> {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const validatedFields = freeTrialSchema.safeParse({
        email: formData.get("email"),
        country: formData.get("country"),
        device: formData.get("device"),
        application: formData.get("application"),
        note: formData.get("note"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please correct the errors below.",
        };
    }

    console.log("Free trial form submitted successfully:", validatedFields.data);

    return { message: "Your trial request has been submitted! Please check your email.", errors: null };
}