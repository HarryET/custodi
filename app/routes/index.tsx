import { MetaFunction, LoaderFunction, useLoaderData, Link } from "remix";
import { HiOutlineStar, HiOutlineBookOpen } from "react-icons/hi";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { getLoggedInUser } from "~/sessions.server";
import { User } from "@supabase/supabase-js";
import { supabase } from "~/supabase";

export const loader: LoaderFunction = async ({ request }) => {
  return {
    NAV: {
      options: [
        {
          name: "Product",
          link: "/product",
        },
        {
          name: "Team",
          link: "/team",
        },
        {
          name: "Pricing",
          link: "/pricing",
        },
        {
          name: "Docs",
          link: "/docs",
        },
      ],
    },
    MAIN: {
      video_url: "",
    },
    FOOTER: {},
    PRODUCTION: process.env.NODE_ENV === "production",
    USER: await getLoggedInUser(request),
  };
};

export const meta: MetaFunction = () => ({
  title: "Custodi",
});

export default function Index() {
  const data = useLoaderData<{
    NAV: {
      options: {
        name: string;
        link: string;
      }[];
    };
    MAIN: {
      video_url: string;
    };
    FOOTER: {};
    PRODUCTION: boolean;
    USER: User;
  }>();
  console.log(data.USER?.id);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <nav className="bg-white border-b w-full">
        <div className="lg:container mx-auto relative flex justify-between h-16 lg:px-16 xl:px-20">
          <div className="flex flex-row">
            <div className="flex-shrink-0 flex items-center">
              {/* https://www.figma.com/file/beRCYcTnKEGEz2KQAnh1mG/Custodi */}
              <img className="h-8 block w-auto" src="/assets/Icon.svg" />
            </div>
            <div className="pl-4 ml-6 flex space-x-4">
              {data.NAV.options.map((opt) => (
                <a
                  className="inline-flex items-center px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-500 p-5 dark:text-dark-100 dark:hover:border-dark-100"
                  href={opt.link}
                  key={opt.link + opt.name}
                >
                  {opt.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <a
              href="https://github.com/HarryET/custodi"
              target="_blank"
              className="flex flex-row items-center content-center px-4 py-1 border text-sm text-gray-500 hover:text-gray-700 rounded transition"
            >
              <HiOutlineStar className="w-4 h-4" />
              <p className="pl-1">Star us on GitHub</p>
            </a>
            <a
              href="/app"
              className="px-4 py-1 bg-brand text-white text-sm rounded hover:bg-brand-hover transition"
            >
              <p>Start catching bugs</p>
            </a>
            {data.USER ? (
              <a
                className="inline-flex items-center px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-500 p-5 dark:text-dark-100 dark:hover:border-dark-100"
                onClick={() => supabase.auth.signOut()}
              >
                Logout
              </a>
            ) : (
              <>
                <Link
                  className="inline-flex items-center px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-500 p-5 dark:text-dark-100 dark:hover:border-dark-100"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="inline-flex items-center px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-500 p-5 dark:text-dark-100 dark:hover:border-dark-100"
                  to="/signup"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <main className="w-full h-full">
        <div className="container mx-auto px-6 lg:px-16 xl:px-20 relative py-16 sm:py-18 md:py-24 lg:py-24 pb-0 pt-24">
          <div className="flex flex-row">
            <div className="flex flex-col w-1/2 h-full text-4xl text-gray-500">
              <h2>The Open Source</h2>
              <h1 className="text-brand font-bold">Sentry Alternative</h1>
              <p className="text-base mt-6">
                Track your applications exceptions and monitor performance.
              </p>
              <div className="flex-row flex w-full space-x-4 mt-6">
                <a
                  href="/app"
                  className="px-8 py-2 bg-brand text-white text-sm rounded hover:bg-brand-hover transition"
                >
                  <p>Start catching bugs {data.USER?.id}</p>
                </a>
                <a
                  href="/docs"
                  className="flex flex-row items-center content-center px-8 py-2 border text-sm text-gray-500 hover:text-gray-700 rounded transition"
                >
                  <HiOutlineBookOpen className="w-5 h-5" />
                  <p className="pl-1">Read the docs</p>
                </a>
              </div>
              <div className="mt-20 text-base">
                <div className="font-bold">Entry to</div>
                <div className="flex flex-row content-center text-black font-bold">
                  <img
                    className="h-6 block w-auto mr-2"
                    src="https://supabase.com/brand-assets/supabase-logo-wordmark--light.svg"
                  />{" "}
                  Christmas Hackathon 2021
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full">
              <iframe
                width="672"
                height="398"
                className="rounded"
                src={`https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?controls=0&${
                  data.PRODUCTION ? "autoplay=1" : "autoplay=0"
                }`}
                title="Rick Roll"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <footer className="h-16 border-t w-full flex justify-between content-center text-gray-500">
        <div className="lg:container mx-auto relative flex justify-between h-full lg:px-16 xl:px-20">
          <div className="h-full flex items-center content-center">
            <span className="font-bold">&copy;</span>{" "}
            <a className="text-brand px-1" href="/team">
              Custodi Team
            </a>{" "}
            &amp; Contributors
          </div>
          <div className="h-full flex items-center content-center flex-row space-x-4">
            <a href="https://github.com/HarryET/custodi" target="_blank">
              <FaGithub />
            </a>
            <a href="https://discord.gg/WPRsQhxqu3" target="_blank">
              <FaDiscord />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
