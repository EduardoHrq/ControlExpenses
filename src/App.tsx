import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { ScrollArea, ScrollBar } from "./components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { Banknote, CircleArrowDown, DollarSign, Pencil } from "lucide-react";
import { Dialog, DialogTrigger } from "./components/ui/dialog";
import { CurrencyDialog } from "./components/components/dialog";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Drawer, DrawerTrigger } from "./components/ui/drawer";
import { CurrencyDrawer } from "./components/components/drawer";

function App() {
  const [amounts, setAmounts] = useState<string>();
  const [expenses, setExpenses] = useState<string>();

  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setAmounts("100");
    setExpenses("200");
  }, []);

  return (
    <>
      <ScrollArea className="w-full whitespace-nowrap p-2 my-5">
        <header className="flex gap-3 justify-center">
          <div className="w-[20rem] p-3 bg-zinc-500 rounded-xl shrink-0 relative">
            <span className="absolute right-[.5rem] top-[.5rem] leading-none">
              <DollarSign />
            </span>
            <h1 className="opacity-75 text-[1.2rem]">Amount</h1>
            {isDesktop ? (
              <Dialog>
                <DialogTrigger asChild>
                  <div className="font-bold text-[2rem] currency group hover:border-b-2 w-max cursor-pointer transition-all flex items-center gap-3">
                    {parseInt(amounts!).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                    <Pencil className="opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </DialogTrigger>

                <CurrencyDialog />
              </Dialog>
            ) : (
              <Drawer>
                <DrawerTrigger asChild>
                  <div className="font-bold text-[2rem] currency group hover:border-b-2 w-max cursor-pointer transition-all flex items-center gap-3">
                    {parseInt(amounts!).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                    <Pencil className="opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </DrawerTrigger>

                <CurrencyDrawer />
              </Drawer>
            )}
          </div>

          <div className="w-[20rem] p-3 bg-red-500 rounded-xl shrink-0 relative">
            <span className="absolute right-[.5rem] top-[.5rem] leading-none">
              <CircleArrowDown />
            </span>
            <h1 className="text-opacity-5 text-[1.2rem]">Expenses</h1>
            <div className="font-bold text-[2rem] currency">
              {parseInt(expenses!).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </div>
          </div>

          <div className="w-[20rem] p-3 bg-blue-500 rounded-xl shrink-0 relative">
            <span className="absolute right-[.5rem] top-[.5rem] leading-none">
              <Banknote />
            </span>
            <h1 className="text-opacity-5 text-[1.2rem]">Status</h1>
            <div className="font-bold text-[2rem] currency">
              {parseInt("-100").toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </div>
          </div>
        </header>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <main className="p-5">
        <Table className="md:w-[50rem] mx-auto text-[1.2rem] bg-zinc-500 bg-opacity-10 rounded-xl ">
          <TableCaption>List of all expenses</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="text-center">Amount</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Figueiredo</TableCell>
              <TableCell className="text-center currency">200</TableCell>
              <TableCell className="text-right">
                <Button variant={"destructive"}>Delete</Button>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter className="rounded-b-xl">
            <TableCell colSpan={2} className="font-bold rounded-bl-xl">
              Total
            </TableCell>
            <TableCell className="text-right rounded-br-xl">
              {parseInt(expenses!).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </TableCell>
          </TableFooter>
        </Table>
      </main>
    </>
  );
}

export default App;
