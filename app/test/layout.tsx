import { Suspense } from "react";
import { Radio } from "./components/radio";

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <form>
          <input type="text" name="q" />
          <Radio name="sort" value="default" />
          <Radio name="sort" value="name" />
          <input type="checkbox" name="group" value="none" />
          <button type="submit">Submit</button>
        </form>
      </Suspense>
      {children}
    </>
  );
}
