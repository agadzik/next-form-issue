import { Radio } from "@/app/test/components/radio";

export default function Page() {
  return (
    <>
      <form>
        <input type="text" name="q" />
        <Radio name="sort" value="default" />
        <Radio name="sort" value="name" />
        <input type="checkbox" name="group" value="none" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
