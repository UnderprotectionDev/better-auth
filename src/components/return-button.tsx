import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeftIcon } from "lucide-react";

interface ReturnButtonProps {
  href: string;
  label: string;
}

export const ReturnButton = ({ href, label }: ReturnButtonProps) => {
  return (
    <Button size="sm" asChild>
      <Link href={href}>
        <ArrowLeftIcon className="size-4" />
        {label}
      </Link>
    </Button>
  );
};
