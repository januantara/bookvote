import { NextResponse, type NextRequest } from "next/server";

export default async function authMiddleware(request: NextRequest) {
    // Ambil session cookie
    const sessionToken = request.cookies.get("better-auth.session_token");

    // Protected routes - hanya bisa diakses jika sudah login
    const protectedRoutes = ["/profile", "/create-vote"];
    const isProtectedRoute = protectedRoutes.some((route) =>
        request.nextUrl.pathname.startsWith(route),
    );

    // Jika mengakses protected route tapi belum login, redirect ke login
    if (isProtectedRoute && !sessionToken) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("from", request.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
    }

    // Jika sudah login dan mengakses halaman login/register, redirect ke home
    if (
        sessionToken &&
        (request.nextUrl.pathname === "/login" ||
            request.nextUrl.pathname === "/register")
    ) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files
         */
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|public).*)",
    ],
};
