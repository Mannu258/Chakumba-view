import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import DirectConnectBar from "@/components/DirectConnectBar";
import Navbar from "@/components/Navbar";
import HotelHome from "@/pages/HotelHome";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen">
          <DirectConnectBar />
          <Navbar />
          <main>
            <HotelHome />
          </main>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
    
  );
}
export default App;


