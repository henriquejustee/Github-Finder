import { Outlet } from "react-router-dom"; 

export default function App () {

  return (
    <div className="bg-slate-900 p-4 w-screen h-screen flex-col text-center pt-3 justify-center items-center text-white">
      <h1 className="text-3xl font-mono font-bold ">Github finder</h1>
      <Outlet />
    </div>
    
  );
};


