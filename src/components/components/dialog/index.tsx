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
      <DialogContent className="bg-zinc-300 bg-opacity-10 backdrop-blur backdrop-saturate-200">
        <DialogHeader className="mb-4">
          <DialogTitle>Edit Amount</DialogTitle>
        </DialogHeader>
        <form>
          <input
            type="number"
            placeholder="amount"
            className="w-full border-none outline-none p-2 rounded bg-transparent backdrop-blur backdrop-opacity-90 backdrop-saturate-200"
          />
          <div>
            <Button>1</Button>
            <Button>5</Button>
            <Button>10</Button>
            <Button>20</Button>
          </div>
        </form>

        <DialogClose asChild>
          <Button variant={"secondary"}>OK</Button>
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  );
}
