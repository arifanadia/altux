import { whatGet } from "@/constants";
import { Button } from "../ui/moving-border";
import Image from "next/image";

const WhatGet = () => {
  return (
    <div className="pb-12 px-6">
      <h2 className="section-heading">
        What You’ll Get
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 w-full">
        {whatGet.map((get) => (
          <Button key={get.id} borderRadius="1.75rem" className="bg-black p-6 border-accent">
           <div className="w-full shadow-md p-6 md:w-96 h-[300px] rounded-xl flex flex-col items-center justify-center space-y-4">
              <Image
                src={get.thumbnail}
                alt={get.title}
                width={70}
                height={70}
                className="mt-4 w-45 h-auto rounded-lg"
              />
              <h4 className="card-title">{get.title}</h4>
              <p className="text-lg">{get.description}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default WhatGet;
