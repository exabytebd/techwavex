import { z } from "zod";

export const leadSchema = z.object({
  fullName: z.string().min(2, "Enter your full name."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(6, "Enter a valid phone number."),
  address: z.string().min(3, "Enter your address."),
  interestedIn: z.string().min(2, "Select or enter what you are interested in."),
  category: z.enum(["Service", "Training"]),
  preferredFormat: z.enum(["Online", "Offline", "Hybrid"]),
  message: z.string().min(10, "Tell us a little about your goal."),
});

export type LeadInput = z.infer<typeof leadSchema>;
