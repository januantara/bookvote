'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PasswordInput from "@/components/ui/password";
import { useLogin } from "@/hooks/useAuth";
import { type LoginFormData, loginSchema } from "@/schemas/auth.schema";

const Emoji = () => (
    <div className="w-16 h-16 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <title>BookVote Logo</title>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
    </div>
)

const LoginPage = () => {
    const login = useLogin()

    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: "onSubmit",
        defaultValues: {
            nim: "",
            password: "",
        }

    });

    const onSubmit = async (data: LoginFormData) => {
        const parsed = loginSchema.safeParse(data);
        if (!parsed.success) {
            toast.error("Please check your input and try again");
            return;
        }

        await login.mutate(parsed.data)
    }

    return (
        <div className="grid place-items-center p-6">
            <Emoji />
            <h4 className="font-semibold mb-4 text-xl">Welcome Back!</h4>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-md border rounded-md p-6 gap-6">
                    <FormField
                        name="nim"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>NIM</FormLabel>
                                <FormControl>
                                    <Input
                                        id="nim"
                                        type="text"
                                        placeholder="Enter your NIM"
                                        {...field}
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/\D/g, '');
                                            field.onChange(value);
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="password"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <PasswordInput
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" disabled={login.isPending}>{login.isPending ? 'Signing...' : 'Login'}</Button>
                </form>
            </Form>
            <span>Don't have an account? <a href="/register" className="hover:text-primary underline">Register</a></span>
        </div>
    );
}

export default LoginPage;