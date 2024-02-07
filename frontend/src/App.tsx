import { useState } from "react";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="">
      <Button variant={"outline"} size={"lg"}>
        click me
      </Button>
      <SignedOut>
        <SignInButton />
        <p>This content is public. Only signed out users can see this.</p>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
        <p>This content is private. Only signed in users can see this.</p>
      </SignedIn>
    </div>
  );
}

export default App;
