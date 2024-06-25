import { Skeleton } from "./ui/skeleton";

export default function HomePageSkeleton() {
  return (
    <div className="min-h-screen w-1/2 bg-red-500 flex flex-col items-center justify-center gap-4">
      <div className="w-full flex  items-center justify-center gap-4">
        <Skeleton className=" h-[200px] w-[200px]" />
        <Skeleton className="h-[200px] w-[200px]" />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <Skeleton className="h-[200px] w-[420px]" />
        <Skeleton className="h-[200px] w-[420px]" />
        <Skeleton className="h-[200px] w-[420px]" />
      </div>
    </div>
  );
}
