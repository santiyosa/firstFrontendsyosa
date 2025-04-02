import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { Toaster } from "react-hot-toast";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/Footer/Footer";
import "./tailwind.css";
import { checkAuth } from "~/services/authService";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  const isAuthenticated = await checkAuth(request);
  return { isAuthenticated };
};

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
  },
];

export default function App() {
  const { isAuthenticated } = useLoaderData<{ isAuthenticated: boolean }>();
  const location = useLocation();
  const hiddenRoutes = [
    "/admin",
    "/themes",
    "/bootcamps",
    "/opportunies",
    "/user"
  ];
  const shouldHideNavAndFooter = hiddenRoutes.some(route => location.pathname.startsWith(route));
  console.log(shouldHideNavAndFooter);

  return (
    <html lang="es" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-100 font-roboto dark:bg-gray-800 h-full flex flex-col min-h-screen">
        <Toaster position="top-right" />
        {!shouldHideNavAndFooter && <Navbar isAuthenticated={isAuthenticated} />}
        <main className="flex-grow">
          <Outlet />
        </main>
        {!shouldHideNavAndFooter && <Footer />}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
