import { router } from "../lib/trpc";



const appRouter = router({
    signUp: signUpTrpcRouter,
})
export type AppRouter = typeof appRouter 
export {appRouter}