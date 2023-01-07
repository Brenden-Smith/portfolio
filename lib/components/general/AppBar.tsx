import { ButtonBase } from "@mui/material";
import Image from "next/image";

export function AppBar() {
  return (
    <div className="flex justify-center fixed top-auto bottom-0 w-full">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg h-36">
        <div className="bg-purple-500 rounded-full w-20 h-20 overflow-hidden">
          <ButtonBase className="h-full w-full">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
              className="rounded-full"
            />
          </ButtonBase>
        </div>
      </div>
    </div>
  );
}
