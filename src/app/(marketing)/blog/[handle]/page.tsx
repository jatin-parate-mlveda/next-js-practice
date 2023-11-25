export default function BlogHandlePage({
  params,
}: {
  params: { handle: string };
}) {
  return <div>My Post: {params.handle}</div>;
}
