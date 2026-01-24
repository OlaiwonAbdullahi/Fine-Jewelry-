"use client";

import { useState } from "react";
import { useUIStore, useAuthStore } from "@/store";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function LoginRegisterModal() {
  const { activeModal, closeModal } = useUIStore();
  const { login } = useAuthStore();
  const isOpen = activeModal === "login" || activeModal === "register";
  const defaultTab = activeModal === "register" ? "register" : "login";

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock login, real API soon type shit
    login({
      id: 1,
      email: loginEmail,
      name: "John Doe",
    });

    toast.success("Welcome back!");
    closeModal();
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock registration, real API soon type shit
    login({
      id: 1,
      email: registerEmail,
      name: registerName,
    });

    toast.success("Account created successfully!");
    closeModal();
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="brillant text-2xl text-emerald-primary text-center">
            A3 Jewelry
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="your@email.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" variant="gold" className="w-full">
                Login
              </Button>

              <button
                type="button"
                className="text-sm text-gold-primary hover:underline w-full text-center"
              >
                Forgot password?
              </button>
            </form>
          </TabsContent>

          <TabsContent value="register">
            <form onSubmit={handleRegister} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="register-name">Full Name</Label>
                <Input
                  id="register-name"
                  type="text"
                  placeholder="John Doe"
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <Input
                  id="register-email"
                  type="email"
                  placeholder="your@email.com"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-password">Password</Label>
                <Input
                  id="register-password"
                  type="password"
                  placeholder="••••••••"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  required
                  minLength={8}
                />
              </div>

              <Button type="submit" variant="gold" className="w-full">
                Create Account
              </Button>

              <p className="text-xs text-gray-soft text-center">
                By registering, you agree to our Terms of Service and Privacy
                Policy.
              </p>
            </form>
          </TabsContent>
        </Tabs>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-beige-warm" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-cream-white px-2 text-gray-soft">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" type="button">
            Google
          </Button>
          <Button variant="outline" type="button">
            Facebook
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
