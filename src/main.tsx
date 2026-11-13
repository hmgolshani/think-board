import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import NotesProvider from "./context/NotesProvider.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {retry: 1},
    },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <NotesProvider>
                    <App/>
                </NotesProvider>

                <Toaster position="bottom-left"
                         toastOptions={{
                             duration: 4000,
                             style: {
                                 background: "var(--color-ink)",
                                 color: "#fff",
                                 borderRadius: "12px",
                                 padding: "12px 16px",
                                 fontSize: "15px",
                                 fontWeight: 500,
                             },
                             success: {iconTheme: {primary: "#6fd3a0", secondary: "#2a2521"}},
                             error: {iconTheme: {primary: "#ff9c8f", secondary: "#2a2521"}},
                         }}
                />
            </QueryClientProvider>
        </BrowserRouter>
    </StrictMode>,
)
