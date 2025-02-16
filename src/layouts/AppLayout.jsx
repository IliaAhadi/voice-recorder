import { Toaster } from "react-hot-toast";

function AppLayout({ children }) {
  return (
    <div className="flex h-screen items-center justify-center bg-purple-200">
      <div className="flex h-full w-full flex-col justify-start gap-4 overflow-hidden bg-white p-6 shadow sm:h-[600px] sm:w-sm sm:rounded-3xl">
        {children}
        <Toaster />
      </div>
    </div>
  );
}

export default AppLayout;
