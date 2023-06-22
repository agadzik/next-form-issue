export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <pre>{JSON.stringify(searchParams, null, 2)}</pre>;
}
