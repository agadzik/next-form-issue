"use client";

import { useSearchParams } from "next/navigation";

interface RadioProps {
  name: string;
  value: string;
}
export function Radio({ name, value }: RadioProps): JSX.Element {
  const searchParams = useSearchParams();
  const defaultChecked = searchParams?.get(name) === value;

  // console.log({
  //   name,
  //   value,
  //   searchParams: Object.fromEntries(searchParams?.entries() ?? []),
  //   defaultChecked,
  // });

  return (
    <input
      type="radio"
      name={name}
      value={value}
      defaultChecked={defaultChecked}
    />
  );
}
