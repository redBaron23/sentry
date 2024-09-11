import { Icons } from "@/lib/constants/icons";
import { Button } from "../../ui/button";

interface ProviderButtonProps {
  provider: "google" | "azure";
  onClick: () => void;
  isLoading: boolean;
}

export function ProviderButton({
  provider,
  onClick,
  isLoading,
}: ProviderButtonProps) {
  const Icon = Icons[provider];
  const text = provider === "google" ? "Google" : "Microsoft";

  return (
    <Button
      variant="outline"
      type="button"
      disabled={isLoading}
      onClick={onClick}
      className="w-full"
    >
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icon className="mr-2 h-4 w-4" />
      )}
      {text}
    </Button>
  );
}
