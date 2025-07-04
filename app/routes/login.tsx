import React from "react";
import { motion } from "framer-motion";
import { login } from "../services/authService";
import { tokenCookie } from "../utils/cookies";
import { useFetcher } from "@remix-run/react";
import { redirect, json } from "@remix-run/node";
import { jwtDecode } from 'jwt-decode';

import type { ActionFunction } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
    try {
        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || !password) {
            return json({ error: "Debes ingresar un correo y contraseña." }, { status: 400 });
        }

        const data = await login(email as string, password as string);

        if (!data || !data.token) {
            return json({ error: "Correo o contraseña incorrectos." }, { status: 401 });
        }

        const token = data.token.replace(/['"]+/g, "");

        if (!token) {
            return json({ error: "No se pudo obtener el token." }, { status: 500 });
        }

        decodeJWTWithoutVerify(token);

        return redirect("/novedades", {
            headers: {
                "Set-Cookie": await tokenCookie.serialize(token),
            },
        });

    } catch (error) {
        console.error("Error en login:", error);
        return json({ error: "Ocurrió un problema. Inténtalo de nuevo." }, { status: 500 });
    }
};

export function decodeJWTWithoutVerify(token: string) {
    try {
        return jwtDecode(token);
    } catch (error) {
        console.error("Error al decodificar el token:", error);
        return null;
    }
}

export default function Login() {
    // Usar un formulario controlado para llamar directamente a la API externa
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const navigate = typeof window !== "undefined" ? (window as any).location : null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const data = await login(email, password);
            if (!data || !data.token) {
                setError("Correo o contraseña incorrectos.");
                setLoading(false);
                return;
            }
            // Guardar el token en cookie (opcional: puedes usar tokenCookie.serialize aquí si lo necesitas)
            document.cookie = `token=${data.token}; path=/`;
            // Redirigir
            window.location.href = "/novedades";
        } catch (err) {
            setError("Ocurrió un problema. Inténtalo de nuevo.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center py-8 mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div>
                    <motion.img
                        src="/mascota.png"
                        alt="Imagen animada"
                        className="w-[400px]"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    />
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md w-[450px]">
                    <h2 className="text-2xl my-6 mx-4 text-gray-800">
                        Bienvenido a tu <br />
                        <span className="font-bold">banco de oportunidades</span>
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="email" className="block text-sm font-medium">Correo electrónico</label>
                            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder="Ingresa tu correo" required value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block text-sm font-medium">Contraseña</label>
                            <input type="password" id="password" name="password" className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder="Ingresa tu contraseña" required value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        {error && <div className="text-red-500 mb-2">{error}</div>}
                        <div className="flex justify-center">
                            <button type="submit" className="w-full px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-blue-700" disabled={loading}>{loading ? "Cargando..." : "Iniciar sesión"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}