import z from "zod";

export const registerSchema = z.object({
    fullName: z.string()
        .min(3, "Name must be at least 3 characters")
        .max(25, "Full name must be at most 25 characters"),
    email: z.string()
        .min(1, "Email is required")
        .email("Invalid email format"),
    nim: z.string()
        .regex(/^[0-9]+$/, "NIM must contain only numbers")
        .min(8, "NIM must be at least 8 characters")
        .max(18, "NIM must be at most 18 characters"),
    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must contain uppercase letters")
        .regex(/[a-z]/, "Password must contain lowercase letters")
        .regex(/[0-9]/, "Password must contain numbers")
        .regex(/[^A-Za-z0-9]/, "Password must contain special characters"),
    confirmPassword: z.string()
        .min(1, "Confirm password is required")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export type RegisterFormData = z.infer<typeof registerSchema>;
