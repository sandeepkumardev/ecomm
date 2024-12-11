import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border m-2 p-4 rounded-lg flex flex-col gap-4 w-full max-w-sm bg-gray-100">
        <div className="text-center text-3xl">
          <h1>Sign In</h1>
        </div>

        <form className="flex flex-col gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" className="bg-white" />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" className="bg-white" />
          </div>

          <Button>
            {/* <Loader2 className="animate-spin" /> */}
            {/* Please wait */}
            Sign In
          </Button>
        </form>

        <div className="text-sm">
          Don't have an account?{" "}
          <Link to="/sign-up" className="underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
