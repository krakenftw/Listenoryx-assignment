import Transactions from "@/components/Transactions";
import {
  BackpackIcon,
  EnvelopeOpenIcon,
  HeartIcon,
  HomeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import axios from "axios";
import { GetStaticProps } from "next";

export type Transaction = {
  date: string;
  amount: number;
  label: string;
  type: string;
};

export type APIType = {
  avialableBalance: number;
  totalExpense: number;
  transactions: Transaction[];
};

export const getStaticProps = (async () => {
  const res = await axios.get(
    "https://299e2f7a-3a0f-4d1e-b8f4-8fe77bee946a.mock.pstmn.io/wallet-summary",
  );
  const body = res.data;
  return { props: { body } };
}) satisfies GetStaticProps<{
  body: APIType;
}>;

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full md:w-[400px] rounded-t-xl bg-background border-t border-muted flex justify-around items-center h-20">
      <button className="flex flex-col items-center">
        <HomeIcon />
        <span>Home</span>
      </button>
      <button className="flex flex-col items-center">
        <HeartIcon />
        <span>Favorite</span>
      </button>
      <button className="relative flex flex-col items-center -top-4">
        <div className="w-16 h-16 flex items-center justify-center bg-primary rounded-xl border">
          <BackpackIcon />
        </div>
        <span className="mb-2">Wallet</span>
      </button>
      <button className="flex flex-col items-center">
        <EnvelopeOpenIcon />
        <span>Offer</span>
      </button>
      <button className="flex flex-col items-center">
        <PersonIcon />
        <span>Profile</span>
      </button>
    </div>
  );
};
export default function HomePage({ body }: { body: APIType }) {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="min-h-screen  md:w-[400px] pt-[60px] p-4 w-full flex flex-col items-center justify-center">
        <div className="w-full">
          <div className="flex gap-4 w-full items-center justify-center text-center">
            <div className="flex-1 flex flex-col border-primary items-center justify-center  h-[170px] rounded-2xl border-[1px] bg-primary/10">
              <span className="text-2xl font-bold">
                ₹{body.avialableBalance}
              </span>
              <span>Available Balance</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center border-primary  h-[170px] py-20 rounded-2xl border-[1px] bg-primary/10">
              <span className="text-2xl font-bold">₹{body.totalExpense}</span>
              <span>Total Expend</span>
            </div>
          </div>
        </div>
        <Transactions transactionsData={body.transactions} />
        <Footer />
      </div>
    </div>
  );
}
