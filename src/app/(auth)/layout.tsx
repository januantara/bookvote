
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid place-items-center w-full min-h-dvh">
            {children}
        </div>
    );
}

export default AuthLayout;