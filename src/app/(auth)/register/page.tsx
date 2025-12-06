"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { type RegisterFormData, registerSchema } from "@/types/register";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRegister } from "@/queries/useAuth";
import PasswordInput from "@/components/ui/password";

const RegisterPage = () => {
    const { mutate, isPending, error } = useRegister();

    const form = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        mode: "onChange",
        defaultValues: {
            fullName: "",
            email: "",
            nim: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (data: RegisterFormData) => {
        const parsed = registerSchema.safeParse(data);
        if (!parsed.success) {
            toast.error("Please check your input and try again.");
            return;
        }

        const registerData = {
            fullname: parsed.data.fullName,
            nim: parsed.data.nim,
            email: parsed.data.email,
            password: parsed.data.password
        }

        const callbacks = mutate(registerData);
        console.log(callbacks)
    };

    return (
        <div className="grid place-items-center p-6">
            <h4 className="font-semibold mb-4">Register Account</h4>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-md border rounded-md p-6 gap-6">
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nama Lengkap</FormLabel>
                                <FormControl>
                                    <Input
                                        id="fullName"
                                        placeholder="Masukan nama lengkap anda"
                                        type="text"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="nim"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>NIM</FormLabel>
                                <FormControl>
                                    <Input
                                        id="nim"
                                        type="text"
                                        placeholder="Masukan nim anda"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Email */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Masukan email anda"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Password */}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <PasswordInput
                                        id="password"
                                        placeholder="Masukan password anda"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Confirm Password */}
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <PasswordInput
                                        id="confirmPassword"
                                        placeholder="Masukan konfirmasi password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" disabled={isPending}>{isPending ? "Registering..." : "Register"}</Button>
                </form>
            </Form>
            <span className="text-sm text-gray-500">Already have an account? <Link href="/login" className="hover:text-cyan-500 underline">Login</Link></span>
        </div>
    );
}

export default RegisterPage;