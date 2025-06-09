import { createTRPCReact } from '@trpc/react-query';
import { httpBatchLink } from '@trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppRouter } from '../../../backend/src/routes';
import { env } from './env';
import Cookies from 'js-cookie'

export const trpc = createTRPCReact<AppRouter>();

export const queryClient = new QueryClient();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: env.VITE_BACKEND_TRPC_URL, 
      headers: ()=>{
        const token = Cookies.get('tokenForWorkout')
        return {
          ...(token && {authorization: `Bearer ${token}`})
        }
      }
    }),
  ],
});

// Компонент-провайдер для tRPC
export function TRPCProvider({ children }: { children: React.ReactNode }) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}