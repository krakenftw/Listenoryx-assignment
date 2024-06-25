import { Transaction } from "@/pages/home";
import { ArrowBottomLeftIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function EachTransaction({
  transaction,
}: {
  transaction: Transaction;
}) {
  return (
    <div className="flex items-center justify-between border-[1px] border-primary/30 gap px-4 py-4 rounded-xl">
      <div className="flex items-center justify-center gap-2 ">
        {transaction.type == "expense" ? (
          <div className="flex items-center justify-center  h-12 w-12 border-[1px] rounded-full">
            <ArrowTopRightIcon />
          </div>
        ) : (
          <div className="flex items-center justify-center  h-12 w-12 border-[1px] rounded-full">
            <ArrowBottomLeftIcon />
          </div>
        )}
        <div className="flex flex-col">
          <span className="font-bold">{transaction.label}</span>
          <span className="text-foreground/60">Today at 09:20 am</span>
        </div>
      </div>
      <div className="text-lg font-bold">
        {transaction.type == "expense" && "-"}₹{transaction.amount.toFixed(2)}
      </div>
    </div>
  );
}
