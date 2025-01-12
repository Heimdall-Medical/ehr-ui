import { LoaderCircle } from "lucide-react";

function Callback() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <LoaderCircle className="animate-spin" size={32} />
      <span className="p-2 text-xl">Authenicating user</span>
    </div>
  );
}

export default Callback;
