import { useEffect } from "react";
import CreateHotelForm from "@/components/ui/CreateHotelForm";

export default function CreateHotelPage() {
  useEffect(() => {
    console.log("CreateHotelPage mounted!");
  }, []);

  
  return (
   
    <div className="container mx-auto px-4 py-8 pt-24 min-h-screen">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Create a Hotel</h1>
    
     <CreateHotelForm/> 
    
  </div>
  
  );
  
}
