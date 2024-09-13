"use client";

import { useToast } from "@/hooks/use-toast";
import { PAGES } from "@/lib/constants/pages";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { HelpCircle, Loader2, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface UserMenuProps {
  userInitials: string;
  userImage?: string;
}

export function UserMenu({ userInitials, userImage }: UserMenuProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoggingOut(true);
    const supabase = createSupabaseBrowserClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
      toast({
        title: "Error al salir",
        description: error.message,
        variant: "destructive",
      });
    } else {
      router.replace(PAGES.LOGIN);
    }

    setIsLoggingOut(false);
  };

  const avatarFallback = userInitials || <User />;

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-secondary"
        >
          <Avatar>
            <AvatarImage src={userImage} alt={userInitials} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-semibold">
          Mi Cuenta
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href={PAGES.SETTINGS}
            className="flex w-full cursor-pointer items-center transition-colors hover:bg-secondary"
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Configuración</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer transition-colors hover:bg-secondary">
          <HelpCircle className="mr-2 h-4 w-4" />
          <span>Soporte</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          onClick={handleLogout}
          className="cursor-pointer text-red-600 transition-colors hover:bg-red-100"
          disabled={isLoggingOut}
        >
          {isLoggingOut ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <LogOut className="mr-2 h-4 w-4" />
          )}
          <span>{isLoggingOut ? "Cerrando Sesión..." : "Cerrar Sesión"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
