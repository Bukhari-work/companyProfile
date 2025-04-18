import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";

export function MenuDrawer(props: any) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isDesktop) {
    return;
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="dark:bg-ungu">
        <DrawerFooter>
          {props.home}
          <hr className="dark:border-foreground/10" />
          {props.children}
          <hr className="dark:border-foreground/10" />
          {props.more}
          <Button variant="outline" onClick={toggleTheme}>
            Turn Light Mode On
          </Button>
          <DrawerClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");
  localStorage.theme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
};
