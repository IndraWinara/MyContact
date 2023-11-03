import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatusBar from "@/components/StatusBar";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MY-Contact-API",
  description: "REST-Full API Contact",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <div className="h-screen  flex justify-center items-center">
            <div className="h-[700px] bg-login shadow-2xl w-[370px] flex justify-between flex-col bg-white rounded-[50px]">
              <Header />
              {/* <StatusBar/> */}
              {children}
              <Footer />
            </div>
          </div>
        </ChakraProvider>
      </body>
    </html>
  );
}
