"use client";

import { Button, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginContact = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dataInput = { email, password };
  const toast = useToast();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email && !password) {
        toast({
          title: `Fill email and password`,
          status: "error",
          isClosable: true,
        });
        return;
      }
      const response = await fetch("/api/login-user", {
        method: "POST",
        headers: { accept: "application/json" },
        body: JSON.stringify(dataInput),
      });

      if (response.status === 400) {
        toast({
          title: `Invalid Credentials`,
          status: "error",
          isClosable: true,
        });
        setEmail("");
        setPassword("");
        return;
      }
      router.push("/contact");
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
        className="p-2 border-t-[4px] rounded-xl flex-col justify-between border-[1px] border-sky-500 flex w-[300px] h-[400px] bg-white"
      >
        <div>
          <h1 className="text-center font-bold">Login to your account first</h1>
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
        </div>
        <div className="mb-[-120px] w-full px-4">
          <Button type="submit" colorScheme={"facebook"} className="w-full">
            Login
          </Button>
        </div>
        <div className="text-[13px] text-end">
          Dont Have Account ?{" "}
          <Link
            className="underline hover:text-sky-500"
            href="/contact/register"
          >
            register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginContact;
