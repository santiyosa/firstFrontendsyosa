import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation
} from "@remix-run/react";
import { json, type LinksFunction } from "@remix-run/node";
import { Toaster } from "react-hot-toast";
import "./tailwind.css";
import { checkAuth } from "~/services/authService";
import WompiButton from "~/components/wompi";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";




export const loader = async ({ request }: { request: Request }) => {
  // Verificar si el usuario está autenticado y obtener el rol
  const authData = await checkAuth(request);

  // Si no hay token, no hay autenticación
  if (!authData) {
    return json({ isAuthenticated: false });
  }

  // Si hay token, devolver la autenticación y el rol
  const { rol } = authData;
  const { nombre } = authData;
  return json({ isAuthenticated: true, rol, nombre });
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
  const { isAuthenticated, rol, nombre } = useLoaderData<{ isAuthenticated: boolean; rol: string; nombre: string }>();
  const location = useLocation();
  const hiddenRoutes = [
    "/admin",
    "/themes",
    "/bootcamps",
    "/opportunies",
    "/user"
  ];
  const shouldHideNavAndFooter = hiddenRoutes.some(route => location.pathname.startsWith(route));

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
        {!shouldHideNavAndFooter && <Navbar isAuthenticated={isAuthenticated} rol={rol} nombre={nombre} suppressHydrationWarning />}
        <main className="flex-grow">
          <Outlet />
          
      <WompiButton/>
        </main>
        {!shouldHideNavAndFooter && <Footer  />}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
