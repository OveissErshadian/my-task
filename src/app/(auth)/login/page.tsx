import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleSubmit = async (formData: FormData) => {
  "use server";
  const username = formData.get("username");
  const password = formData.get("password");
  const cookieStore = await cookies();
  if (username === "admin" && password === "password") {
    cookieStore.set({
      name: "my-token",
      value: "mySecretToken",
      path: "/",
      maxAge: 60, //token is out of date after 60 sec
    });
    redirect("/dashboard");
  }
};

const Login = () => {
  return (
    <form
      action={handleSubmit}
      className="flex flex-col p-3 gap-2 w-72 m-auto  bg-gray-600"
    >
      <input
        type="text"
        placeholder="username"
        name="username"
        className="bg-cyan-100 p-1.5 rounded-md text-black placeholder:text-gray-800"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="bg-cyan-100 p-1.5 rounded-md text-black placeholder:text-gray-800"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded cursor-pointer"
      >
        Enter
      </button>
    </form>
  );
};

export default Login;
