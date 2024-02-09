/* eslint-disable no-unused-vars */
import { CartProvider } from "./components/contexts/cardContext";
import AppRouter from "./components/utils/AppRouter";
import { Elements } from "@stripe/react-stripe-js";

import NavBar from "./navigation/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_KEY}`);

function App() {
  const queryClient = new QueryClient();
  const options = {
    clientSecret: `${import.meta.env.VITE_STRIPE_SECRET}`,
  };
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <NavBar>
          <div className="min-h-[100vh]">
            <AppRouter />
          </div>
        </NavBar>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
