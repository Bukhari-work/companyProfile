import * as React from "react";

import { useMediaQuery } from "@/scripts/hooks/useMediaQuery";
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
      <DrawerContent>
        <DrawerHeader className="hidden">
          <DrawerTitle>Site Navigation</DrawerTitle>
          <DrawerDescription>
            Browse all pages and features of this site.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          {props.menu}
          <Button variant="outline" onClick={toggleTheme}>
            Turn Light Mode On
          </Button>
          <DrawerClose asChild>
            <Button variant="ghost">Close</Button>
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
