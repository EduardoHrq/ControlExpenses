import { Button } from "@/components/ui/button";
import {
  DialogPortal,
  DialogTitle,
  DialogContent,
  DialogHeader,
  DialogClose,
} from "@/components/ui/dialog";

export function CurrencyDialog() {
  return (
    <DialogPortal>
      <DialogContent className="bg-zinc-300 bg-opacity-10 brightness-200 dark:bg-zinc-500 dark:bg-opacity-20 backdrop-blur-md backdrop-saturate-200 border-none">
        <DialogHeader className="mb-4">
          <DialogTitle>Edit Amount</DialogTitle>
        </DialogHeader>

        <input
          type="number"
          placeholder="amount"
          className="bg-transparent border-none outline-none mx-auto text-center font-bold text-[2.5rem]"
          value={100}
        />
        <div className="mt-3 w-max mx-auto flex gap-2">
          <Button className="font-bold transition-all " variant={"ghost"}>
            +1
          </Button>
          <Button className="font-bold transition-all " variant={"ghost"}>
            +5
          </Button>
          <Button className="font-bold transition-all " variant={"ghost"}>
            +10
          </Button>
          <Button className="font-bold transition-all " variant={"ghost"}>
            +20
          </Button>
        </div>

        <DialogClose asChild>
          <Button variant={"secondary"}>OK</Button>
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  );
}
