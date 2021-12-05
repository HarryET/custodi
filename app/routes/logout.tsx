import { ActionFunction, LoaderFunction, redirect } from "remix";
import { clearCookie } from "~/sessions.server";

export let action: ActionFunction = async ({ request }): Promise<Response> => {
  console.log("logout called");

  return clearCookie(request);
};

export let loader: LoaderFunction = async () => {
  return redirect("/");
};
