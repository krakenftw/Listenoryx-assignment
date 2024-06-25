import { Transaction } from "@/pages/home";
import EachTransaction from "./EachTransaction";

export default function Transactions({
  transactionsData,
}: {
  transactionsData: Transaction[];
}) {
  return (
    <div className="w-full my-6 flex flex-col gap-4">
      <div className="flex justify-between px-2">
        <span>Transactions</span>
        <span>See all</span>
      </div>
      {transactionsData.map((each: Transaction) => {
        return <EachTransaction key={each.date} transaction={each} />;
      })}
    </div>
  );
}
