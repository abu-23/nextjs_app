async function page({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
    { cache: "no-store" } // for server-side rendering
  );
  const users = await res.json();
  return (
    <main className="m-12">
      <h1 className="my-6 font-extrabold text-orange-800">
        Server-side rendering Page
      </h1>
      <p>
        {new Date().toLocaleTimeString()}{" "}
        <span className="text-gray-500">
          dates do change on refresh since its server-side rendering
        </span>
      </p>
      <br />
      <h1 className="font-bold my-4">User Details</h1>
      <h3>
        User ID: <span>{users.id}</span>
      </h3>
      <h3>
        Name: <span>{users.name}</span>
      </h3>
      <h3>
        Email: <span>{users.email}</span>
      </h3>
      <h3>
        Website: <span>{users.website}</span>
      </h3>
      <br />
      <span className="text-gray-400">
        change url to get details of corresponding user (eg:/user/2) [dynamic routing]
      </span>
    </main>
  );
}

export default page;
