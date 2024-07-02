async function page({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const users = await res.json();
  return (
    <main className="m-12">
      <h1 className="my-6 font-extrabold text-orange-800">
        Static Site Generation Page
      </h1>
      <p>
        {new Date().toLocaleTimeString()}
        <br />
        <span className="text-gray-500">
          dates do not change on refresh since its static-site generation (in
          production build)
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
