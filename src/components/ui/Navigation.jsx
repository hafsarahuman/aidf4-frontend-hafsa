import React from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

function Navigation() {
  const { user } = useUser(); // Get current user info

  return (
    <nav className="fixed top-0 left-0 w-full bg-black flex items-center justify-between px-8 text-white py-4 z-50 shadow-md">
      {/* Left Side - Logo */}
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-2xl font-bold">
          Horizone
        </Link>
      </div>

      {/* Middle Section (Hidden on mobile) */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="transition-colors hover:text-gray-400">
          Home
        </Link>
        <Link to="/" className="transition-colors hover:text-gray-400">
          About
        </Link>
        <Link to="/" className="transition-colors hover:text-gray-400">
          Contact
        </Link>
        
        

        {user?.publicMetadata?.role === "admin" && (
          <Link to="/hotels/create" className="transition-colors hover:text-gray-400">
            Create Hotel
          </Link>
        )}
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Language Icon */}
        <div className="flex items-center text-gray-300 hover:text-white cursor-pointer">
          <Globe className="w-5 h-5" />
          <span className="ml-1">EN</span>
        </div>

        {/* If not signed in */}
        <SignedOut>
          <Button variant="ghost" asChild>
            <Link to="/sign-in">Log in</Link>
          </Button>

          <Button asChild>
            <Link to="/sign-up">Sign up</Link>
          </Button>
        </SignedOut>

        {/* If signed in */}
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Button variant="ghost" asChild>
            <Link to="/account">My Account</Link>
          </Button>
        </SignedIn>
      </div>
    </nav>
  );
}

export default Navigation;
