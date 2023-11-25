export const runtime = 'edge';

export default async function DashboardPage() {
  const create = async (formData: FormData) => {
    "use server";
    console.log("formData", Object.fromEntries(formData.entries()));
  };
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );

  return (
    <div>
      <form action={create}>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
