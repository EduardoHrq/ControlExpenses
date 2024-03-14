import { Button } from "@/components/ui/button";
import {
  DialogPortal,
  DialogTitle,
  DialogContent,
  DialogHeader,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus } from "lucide-react";

interface DialogProps {
  amounts: string;
  setAmounts: React.Dispatch<React.SetStateAction<string>>;
}

export function CurrencyDialog({ amounts, setAmounts }: DialogProps) {
  function operationButtons(type: string, x: number) {
    if (type == "plus") {
      const value = amounts;
      let integer = value.substring(0, value.length - 3);
      const cent = value.substring(value.length - 2, value.length);

      integer = String(Number(integer) + x);

      if (value.length == 1) {
        setAmounts(integer.concat(".").concat(cent).concat("0"));
      } else {
        setAmounts(integer.concat(".").concat(cent));
      }
    } else {
      const value = amounts;
      let integer = value.substring(0, value.length - 3);
      const cent = value.substring(value.length - 2, value.length);

      integer = String(Number(integer) - x);

      if (value.length == 1) {
        setAmounts(integer.concat(".").concat(cent).concat("0"));
      } else {
        setAmounts(integer.concat(".").concat(cent));
      }
    }
  }

  return (
    <DialogPortal>
      <DialogContent className="bg-zinc-300 bg-opacity-10 brightness-200 dark:bg-zinc-500 dark:bg-opacity-20 backdrop-blur-md backdrop-saturate-200 border-none">
        <DialogHeader className="mb-4">
          <DialogTitle>Edit Amount</DialogTitle>
        </DialogHeader>
        <div className="flex justify-between items-center">
          <Button onClick={() => operationButtons("minus", 1)}>
            <Minus />
          </Button>
          <Input
            type="number"
            className="text-center bg-transparent text-[2.5rem] font-bold border-none ring-0"
            max={100000}
            min={0.0}
            onChange={(e) => {
              const value = e.target.value;
              let integer;
              let cent;
              switch (value.length) {
                case 1:
                  integer = "0";
                  cent = e.target.value;
                  break;
                default:
                  cent = value.substring(value.length - 2, value.length);
                  integer = value.substring(0, value.length - 2);
                  integer = parseInt(integer.replace(".", ""));
              }

              const money = String(integer).concat(".").concat(cent);

              setAmounts(money);
            }}
            value={amounts}
          />
          <Button onClick={() => operationButtons("plus", 1)}>
            <Plus />
          </Button>
        </div>
        <div className="mt-3 w-max mx-auto flex gap-2">
          <Button
            onClick={() => operationButtons("minus", 5)}
            className="font-bold transition-all "
            variant={"ghost"}
          >
            -5
          </Button>
          <Button
            onClick={() => operationButtons("minus", 10)}
            className="font-bold transition-all "
            variant={"ghost"}
          >
            -10
          </Button>
          <Button
            onClick={() => operationButtons("minus", 20)}
            className="font-bold transition-all "
            variant={"ghost"}
          >
            -20
          </Button>
          <Separator orientation="vertical" />
          <Button
            onClick={() => operationButtons("plus", 5)}
            className="font-bold transition-all "
            variant={"ghost"}
          >
            +5
          </Button>
          <Button
            onClick={() => operationButtons("plus", 10)}
            className="font-bold transition-all "
            variant={"ghost"}
          >
            +10
          </Button>
          <Button
            onClick={() => operationButtons("plus", 20)}
            className="font-bold transition-all "
            variant={"ghost"}
          >
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
