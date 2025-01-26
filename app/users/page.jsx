import { getUsers } from "../actions/getUsers";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
