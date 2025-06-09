import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.scss';
import { Router } from './routes/Router';
import { TRPCProvider } from './lib/trpc';


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<TRPCProvider>
			<Router />
		</TRPCProvider>
	</StrictMode>
);
