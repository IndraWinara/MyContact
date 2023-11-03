"use client";

import { Button, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const dataInput = { name, email, password, phone, imageUrl, address };
  const toast = useToast();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email && !password && !name && !address && !imageUrl && !phone) {
        toast({
          title: `Fill All Credential`,
          status: "error",
          isClosable: true,
        });
        return;
      }
      const response = await fetch("/api/register-user", {
        method: "POST",
        headers: { accept: "application/json" },
        body: JSON.stringify(dataInput),
      });
      if (response.status === 500) {
        toast({
          title: `Email Already Registered`,
          status: "error",
          isClosable: true,
        });
        return
      }
      router.push("/contact/login");
    } catch (error) {
      toast({
        title: `Bad Gateway`,
        status: "error",
        isClosable: true,
      });
    }
  };
  return (
    <div className="h-full border-x-[1px] border-black flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-2 overflow-auto border-t-[4px] rounded-xl flex-col justify-between border-[1px] border-sky-500 flex w-[320px] h-[450px] bg-white"
      >
        <div>
          <h1 className="text-center font-bold">Sign Up account</h1>
          <div className="flex flex-col p-2 gap-1 text-[14px]">
            <label>Username</label>
            <input
              type="text"
              placeholder="John Doe"
              className="outline-none border-[1px] border-sky-500 rounded-md p-1 ml-1 text-[13px]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2 gap-1 text-[14px]">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="email@email.com"
              className="outline-none border-[1px] border-sky-500 rounded-md p-1 ml-1 text-[13px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2 gap-1 text-[14px]">
            <label>Password</label>
            <input
              type="password"
              placeholder="*******"
              className="outline-none border-[1px] border-sky-500 rounded-md p-1 ml-1 text-[13px]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2 gap-1 text-[14px]">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="0857284910"
              className="outline-none border-[1px] border-sky-500 rounded-md p-1 ml-1 text-[13px]"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2 gap-1 text-[14px]">
            <label>Image Url</label>
            <input
              type="text"
              placeholder="http://image_me.com"
              className="outline-none border-[1px] border-sky-500 rounded-md p-1 ml-1 text-[13px]"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2 gap-1 text-[14px]">
            <label>Address</label>
            <input
              type="text"
              placeholder="East Java,Indonesia"
              className="outline-none border-[1px] border-sky-500 rounded-md p-1 ml-1 text-[13px]"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full mt-5 px-4">
          <Button type="submit" colorScheme={"linkedin"} className="w-full">
            Register
          </Button>
        </div>
        <div className="text-[13px] text-end">
          Already Have Account ?{" "}
          <Link className="underline hover:text-sky-500" href="/contact/login">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
