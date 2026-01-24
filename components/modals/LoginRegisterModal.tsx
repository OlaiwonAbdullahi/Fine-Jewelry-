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
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { IconBrandGoogle, IconBrandFacebook } from "@tabler/icons-react";
import Image from "next/image";

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
      <DialogContent className="sm:max-w-[480px] max-w-[600px]! p-0 gap-0 overflow-hidden bg-white border border-border/20">
        {/* Header with minimal branding */}
        <DialogHeader className="px-10 pt-2 pb-2 border-b border-border/10">
          <DialogTitle className="text-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={200}
              className="mx-auto"
            />
          </DialogTitle>
        </DialogHeader>

        <div className="px-10 pb-10 pt-6">
          <Tabs defaultValue={defaultTab} className="w-full">
            {/* Ultra-minimal tabs */}
            <TabsList className="grid w-full grid-cols-2 bg-transparent h-auto p-0 mb-8 border-b border-border/10 rounded-none">
              <TabsTrigger
                value="login"
                className="text-[10px] tracking-[0.3em] uppercase font-medium data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none pb-3 text-foreground/50 data-[state=active]:text-foreground transition-all"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="text-[10px] tracking-[0.3em] uppercase font-medium data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none pb-3 text-foreground/50 data-[state=active]:text-foreground transition-all"
              >
                Register
              </TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login" className="mt-0">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="login-email"
                    className="text-[9px] tracking-[0.25em] uppercase font-medium text-foreground/70"
                  >
                    Email Address
                  </Label>
                  <input
                    id="login-email"
                    type="email"
                    placeholder="your@email.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                    className="w-full h-11 px-4 text-sm tracking-wide border border-border/30 focus:border-foreground outline-none transition-all rounded-none bg-transparent placeholder:text-foreground/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="login-password"
                    className="text-[9px] tracking-[0.25em] uppercase font-medium text-foreground/70"
                  >
                    Password
                  </Label>
                  <input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                    className="w-full h-11 px-4 text-sm tracking-wide border border-border/30 focus:border-foreground outline-none transition-all rounded-none bg-transparent placeholder:text-foreground/20"
                  />
                </div>

                <button
                  type="button"
                  className="text-[9px] tracking-[0.2em] text-foreground/50 hover:text-foreground transition-colors uppercase w-full text-right"
                >
                  Forgot password?
                </button>

                <Button
                  type="submit"
                  className="w-full h-12 bg-foreground hover:bg-foreground/90 text-white rounded-none text-[10px] tracking-[0.3em] uppercase font-medium transition-all"
                >
                  Login
                </Button>
              </form>
            </TabsContent>

            {/* Register Form */}
            <TabsContent value="register" className="mt-0">
              <form onSubmit={handleRegister} className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="register-name"
                    className="text-[9px] tracking-[0.25em] uppercase font-medium text-foreground/70"
                  >
                    Full Name
                  </Label>
                  <input
                    id="register-name"
                    type="text"
                    placeholder="John Doe"
                    value={registerName}
                    onChange={(e) => setRegisterName(e.target.value)}
                    required
                    className="w-full h-11 px-4 text-sm tracking-wide border border-border/30 focus:border-foreground outline-none transition-all rounded-none bg-transparent placeholder:text-foreground/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="register-email"
                    className="text-[9px] tracking-[0.25em] uppercase font-medium text-foreground/70"
                  >
                    Email Address
                  </Label>
                  <input
                    id="register-email"
                    type="email"
                    placeholder="your@email.com"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    required
                    className="w-full h-11 px-4 text-sm tracking-wide border border-border/30 focus:border-foreground outline-none transition-all rounded-none bg-transparent placeholder:text-foreground/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="register-password"
                    className="text-[9px] tracking-[0.25em] uppercase font-medium text-foreground/70"
                  >
                    Password
                  </Label>
                  <input
                    id="register-password"
                    type="password"
                    placeholder="••••••••"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    required
                    minLength={8}
                    className="w-full h-11 px-4 text-sm tracking-wide border border-border/30 focus:border-foreground outline-none transition-all rounded-none bg-transparent placeholder:text-foreground/20"
                  />
                </div>

                <p className="text-[8px] tracking-[0.2em] text-foreground/40 text-center uppercase leading-relaxed">
                  By registering, you agree to our Terms of Service and Privacy
                  Policy.
                </p>

                <Button
                  type="submit"
                  className="w-full h-12 bg-foreground hover:bg-foreground/90 text-white rounded-none text-[10px] tracking-[0.3em] uppercase font-medium transition-all"
                >
                  Create Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          {/* Divider */}
          <div className="relative my-8">
            <Separator className="bg-border/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-4 text-[8px] tracking-[0.3em] text-foreground/40 uppercase">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              type="button"
              className="h-11 rounded-none border-border/30 hover:bg-foreground/5 hover:border-foreground/50 transition-all"
            >
              <IconBrandGoogle size={18} strokeWidth={1.5} className="mr-2" />
              <span className="text-[9px] tracking-[0.2em] uppercase font-medium">
                Google
              </span>
            </Button>
            <Button
              variant="outline"
              type="button"
              className="h-11 rounded-none border-border/30 hover:bg-foreground/5 hover:border-foreground/50 transition-all"
            >
              <IconBrandFacebook size={18} strokeWidth={1.5} className="mr-2" />
              <span className="text-[9px] tracking-[0.2em] uppercase font-medium">
                Facebook
              </span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
