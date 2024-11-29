import { z } from "zod";

export const signInSchmea = z.object({
  email: z.string().trim().email(),
  password: z.string().trim().min(1, "Required."),
});

export const signUpSchmea = z.object({
  email: z.string().trim().email(),
  password: z.string().trim().min(8, "Minimum of 8 characters required."),
  name: z.string().trim().min(4, "Min 4 characters."),
});
