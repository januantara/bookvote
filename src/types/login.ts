import z from "zod";

export const loginSchema = z.object({
    nim: z.string()
        .regex(/^[0-9]+$/, "Nim must contain only numbers")
        .min(8, "Nim must be at least 8 characters")
        .max(18, "Nim must be at most 18 characters"),
    password: z.string()
        .min(1, "Password is required"),
})

export type LoginFormData = z.infer<typeof loginSchema>;