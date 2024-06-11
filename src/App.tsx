import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function App() {
  return (
    <>
      <nav className="navbar bg-base-100 flex justify-between">
        <div>
          <a href="/" className="text-lg font-bold">My App</a>
        </div>
        <SignedOut>
          <div className="btn">
            <SignInButton />

          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </>
  )
}