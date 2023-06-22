import { Radio } from "./components/radio";

export default function Layout() {
  return (
    <form>
      <input type="text" name="q" />
      <Radio name="sort" value="default" />
      <Radio name="sort" value="name" />
      <input type="checkbox" name="group" value="none" />
      <button type="submit">Submit</button>
    </form>
  );
}
