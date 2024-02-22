import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { Ghost } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="md:ml-auto w-full justify-center md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Term & Conditions
        </Button>
      </div>
    </div>
  );
};

export default Footer;
