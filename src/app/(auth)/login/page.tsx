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
      maxAge: 600, //token is out of date after 10 min
    });
    redirect("/dashboard");
  }
};

const Login = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-200">
      <form
      action={handleSubmit}
      className="flex flex-col p-3 gap-4 w-72 m-auto rounded bg-gray-600"
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
    </section>
    
  );
};

export default Login;
