"use client";

import React, { useEffect, useState } from "react";
import ListContact from "./ListContact";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";


const ContactScreen = () => {
  const [data, setData] = useState();
  const router = useRouter()
  const getUserInfo = async () => {
    const response = await fetch("/api/me", {
      method: "GET",
      headers: { accept: "application/json" },
    });
    const ress = await response.json()
    return ress.data;
  };
  useEffect(() => {
    getUserInfo().then((e) => setData(e));
  }, []);

  console.log(data)
  const handleLogout = async ()=>{
    await fetch('/api/logout-user',{method:'POST'})
    router.push('/contact/login')
    window.location.reload()
  }

  return (
    <div className="bg-slate-200 py-2 border-l-[1px] relative border-r-[1px] border-black h-full">
      {/* top */}
      <div className="flex absolute w-full justify-between">
        <div className="flex gap-2 items-center">
          <p className="text-xl">🟰</p>
          <h1 className="font-bold">Kontak</h1>
        </div>
        <div className="flex items-center text-xl">
          <p>➕</p>
          <p>🔍</p>
          <Button onClick={handleLogout} colorScheme="blackAlpha">✖️</Button>
        </div>
      </div>

      {/* list */}
      <div className="py-4 mt-5">
        {data?.contact_id?.map((item)=>(
          <div key={item?._id}>
            <ListContact data = {item}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactScreen;
