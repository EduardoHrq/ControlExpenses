import { Button } from "@/components/ui/button";
import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerPortal,
  DrawerTitle,
} from "@/components/ui/drawer";

export function CurrencyDrawer() {
  return (
    <DrawerPortal>
      <DrawerContent className="bg-zinc-300 bg-opacity-10 backdrop-blur backdrop-saturate-200 pb-10">
        <DrawerHeader className="my-5">
          <DrawerTitle>Edit Amount</DrawerTitle>
        </DrawerHeader>
        <input
          type="text"
          pattern="[0-9]+$"
          className="w-full text-center font-bold text-[2.5rem] border-none outline-none bg-transparent"
        />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant={"secondary"}>OK</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </DrawerPortal>
  );
}
