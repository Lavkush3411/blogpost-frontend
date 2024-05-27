import router from "./router";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import ContextProvider from "./ContextProvider";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default App;
export { queryClient };
