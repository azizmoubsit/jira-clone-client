import { Separator } from "@/components/ui/separator";

const OrSeparator = () => {
  return (
    <div className="px-7 mb-2 relative">
      <span className="absolute -top-2.5 left-[50%] -translate-x-[50%] bg-card px-1 font-semibold text-sm">
        OR
      </span>
      <Separator />
    </div>
  );
};

export default OrSeparator;
