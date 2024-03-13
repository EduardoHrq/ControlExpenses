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
      <DrawerContent className="bg-zinc-300 bg-opacity-10 backdrop-blur backdrop-saturate-200 pb-5">
        <DrawerHeader className="my-5">
          <DrawerTitle>Edit Amount</DrawerTitle>
        </DrawerHeader>
        <div className="flex justify-center gap-3 items-center">
          <div className="w-max shrink-0 text-[2rem]">R$</div>
          <input
            type="text"
            className="w-20 font-bold text-[2rem] border-none outline-none bg-transparent"
            value={100}
          />
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant={"secondary"}>OK</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </DrawerPortal>
  );
}
