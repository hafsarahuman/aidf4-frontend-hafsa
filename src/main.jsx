import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.page";
import SignInPage from "./pages/sign-in.page";
import SignUpPage from "./pages/sign-up.page";
import HotelPage from "./pages/hotel.page";
import HotelsPage from "./pages/hotels.page";
import CreateHotelPage from "./pages/create-hotel.page";
import RootLayout from "./layouts/root.layout.layout"; 
import MainLayout from "./layouts/Main.layout"; 
import AccountPage from "./pages/account.page";
import ProtectedLayout from "./layouts/protected.layout";
import AdminProtectedLayout from "./layouts/admin-protected-layout";
import {store} from "./lib/store";
import { Provider } from "react-redux";
import { ClerkProvider } from "@clerk/clerk-react";
import { Toaster } from "sonner"; 
import PaymentPage from "./pages/payment.page";
import CompletePage from "./pages/complete.page";


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env.local file");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Provider store={store}>
        <Toaster richColors position="top-right" duration={4000}
  expand={true}
  toastOptions={{
    classNames: {
      toast: "bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-xl rounded-2xl px-6 py-4 text-sm text-gray-800 dark:text-white transition-all duration-300",
      description: "text-gray-600 dark:text-zinc-400 mt-1 text-xs",
      actionButton: "bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 text-sm",
      cancelButton: "text-gray-500 text-sm hover:underline",
    },
  }} /> 
        <BrowserRouter>
          <Routes>
            <Route element={<RootLayout />}>
            
              <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/hotels" element={<HotelsPage />} />
                <Route path="/hotels/:id" element={<HotelPage />} />
                <Route element={<ProtectedLayout />}>
                  <Route path="/account" element={<AccountPage />} />
                  <Route path="/booking/payment" element={<PaymentPage />} />
                  <Route path="/booking/complete" element={<CompletePage />} />
                  <Route element={<AdminProtectedLayout />}>
                    <Route path="/hotels/create" element={<CreateHotelPage />} />
                  </Route>  
                </Route>  
              </Route>  

              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />

            </Route> 
          </Routes>
        </BrowserRouter>
      </Provider>
    </ClerkProvider>
  </StrictMode>
);
