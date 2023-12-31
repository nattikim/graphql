import "../styles/globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import LogoGraphQL from "@/components/LogoGraphQL";
import Navbar from "@/components/Navbar";
import ApolloClientProvider from "@/components/ApolloClientProvider";

const rubik = Rubik({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "graphql by natkim",
  description: "Check your progress at Grit:lab",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={rubik.className + ""}>
        <ApolloClientProvider>
          <LogoGraphQL />
          <Navbar />
          <main className="flex flex-col min-h-screen justify-center p-7">
            {children}
          </main>
        </ApolloClientProvider>
      </body>
    </html>
  );
}
