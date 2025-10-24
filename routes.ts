// Custom configuration for your autnentication logic
// ONLY a list of routes that middlware.ts will use to protect routes.

export const publicRoutes: string[] = [

]

export const protectedRoutes: string[] = [
    "/"
]

export const authRouts: string[] = [
    "/auth/sign-in"
]

export const apiAuthPrefix: string = "/api/auth"

export const DEFAULT_LOGIN_REDIRECT = "/"