/* eslint-disable no-unused-vars */
import { CartProvider } from "./components/contexts/cardContext";
import AppRouter from "./components/utils/AppRouter";

import NavBar from "./navigation/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
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
