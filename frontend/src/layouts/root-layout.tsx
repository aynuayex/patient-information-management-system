import { Outlet, useNavigate } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

import medic from "@/assets/medic.svg";
import MainNav from "@/components/main-nav";
import ThemeSwitch from "@/components/theme-switch";
import ContactPage from "@/components/contact";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function RootLayout() {
  const navigate = useNavigate();
  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
      <header>
        <div
          className="bg-[#fbe2e3] -z-50 absolute top-[-6rem] right-[11rem] w-[31.25rem] h-[31.25rem] rounded-full
         blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"
        ></div>
        <div
          className="bg-[#dbd7fb] -z-50 absolute top-[-1rem] left-[-35rem] w-[50rem] h-[31.25rem] rounded-full
         blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] "
        ></div>
        <div className="flex px-4">
          <div className="mr-32 hidden md:block">
            <img src={medic} width="200px" height="200px" alt="" />
          </div>
          <div className="w-full flex items-center justify-around h-20 border-b">
            <MainNav />
            <ThemeSwitch />

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <SignedOut>
              <Button onClick={() => navigate('/sign-in')}>Sign in</Button>
            </SignedOut>
          </div>
        </div>
      </header>
      <main className="px-4">
        <Outlet />
      </main>
      <footer>
        <ContactPage />
        <Footer />
      </footer>
    </ClerkProvider>
  );
}
