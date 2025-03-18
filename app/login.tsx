import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AdminLogin = () => {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const email = formData.get("email");
        const password = formData.get("password");

        if (email === "admin@example.com" && password === "admin123") {
            navigate("/adminPanel");
            toast.success("Ingreso correctamente!");
        } else {
            toast.error("Usuario o contraseña incorrectos!");
        }
    };

    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

                    <div>
                        <motion.img
                            src="/mascota.png"
                            alt="Imagen animada"
                            className="w-[520px]"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg w-[600px]">

                        <div className="flex justify-between font-bold p-3 gap-x-3">
                            <button type="submit" className="w-full px-5 py-2.5 bg-blue-500 text-white rounded-md hover:bg-blue-700 flex items-center justify-center gap-x-2">
                                <img src="/google-brands.svg" alt="Google" className="w-5 h-5" />
                                Ingresa con Google
                            </button>
                            <button type="submit" className="w-full px-5 py-2.5 bg-blue-800 text-white rounded-md hover:bg-blue-700 flex items-center justify-center gap-x-2">
                                <img src="/facebook-brands.svg" alt="Facebook" className="w-5 h-5" />
                                Ingresa con Facebook
                            </button>
                        </div>

                        <h2 className="text-3xl my-7 mx-6 text-gray-800">
                            Bienvenido a tu <br />
                            <span className="font-bold">banco de oportunidades</span>
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-medium">Correo electrónico</label>
                                <input type="email" id="email" name="email" className="mt-1 p-3 w-full border border-gray-300 rounded-md" placeholder="Ingresa tu correo electrónico" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-sm font-medium">Contraseña</label>
                                <input type="password" id="password" name="password" className="mt-1 p-3 w-full border border-gray-300 rounded-md" placeholder="Ingresa tu contraseña" required />
                            </div>
                            <div className="flex justify-between mt-1 p-3">
                                <p><input type="checkbox" /> Recordarme</p>
                                <button type="button" className="ml-1 text-orange-600">Olvidé mi contraseña</button>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="w-full px-5 py-2.5 bg-orange-400 text-white rounded-md hover:bg-blue-700">Iniciar sesión</button>
                            </div>
                            <div className="flex justify-center mt-1 p-3">
                                <p>¿No tienes una cuenta?
                                    <button type="button" className="ml-1 text-orange-600">Registrate</button>
                                </p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
