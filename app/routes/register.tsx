import React from "react";

import { login, register } from "~/services/authService";


export default function Register() {
  // Registro controlado desde el frontend
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [fechaNacimiento, setFechaNacimiento] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      setLoading(false);
      return;
    }
    try {
      await register(nombre, apellido, fechaNacimiento, email, password);
      const data = await login(email, password);
      if (!data || !data.token) {
        setError("No se pudo obtener el token.");
        setLoading(false);
        return;
      }
      document.cookie = `token=${data.token}; path=/`;
      window.location.href = "/novedades";
    } catch (err) {
      setError("Ocurrió un error al registrar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-row items-center justify-center bg-white pb-10 pt-20 dark:bg-[#0f1629] mt-1">
      <div className="hidden md:block w-[900px] h-[800px]">
        <spline-viewer
          className="w-full h-full"
          url="https://prod.spline.design/iP53y93oIWLqa7MO/scene.splinecode"
        ></spline-viewer>
      </div>
      <div className="xl:w-1/3 p-5 bg-white rounded-lg shadow-lg max-h-[700px] overflow-auto sm:justify-center sm:items-center sm:col-span-4 dark:bg-[#172a41]">
        <h2 className="mb-4 text-xl font-light text-gray-700 dark:text-[#a8afc4] text-center">
          ¿Quieres buscar una <span className="text-xl font-medium text-blue-900 dark:text-[#12a6e8]">oportunidad?</span>
        </h2>
        <form onSubmit={handleSubmit} className="sm:items-center sm:justify-center sm:px-12 text-black dark:text-[#a8afc4]">
          <div className="mb-3.5">
            <label htmlFor="nombre" className="block mb-1 font-bold">Nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder="Ingresa tu nombre" value={nombre} onChange={e => setNombre(e.target.value)} className="w-full p-2.5 border rounded-lg bg-white text-black dark:bg-[#283446] dark:text-white" required />
          </div>
          <div className="mb-3.5">
            <label htmlFor="apellido" className="block mb-1 font-bold">Apellido</label>
            <input type="text" name="apellido" id="apellido" placeholder="Ingresa tu apellido" value={apellido} onChange={e => setApellido(e.target.value)} className="w-full p-2.5 border rounded-lg bg-white text-black dark:bg-[#283446] dark:text-white" required />
          </div>
          <div className="mb-3.5">
            <label htmlFor="fecha_nacimiento" className="block mb-1 font-bold">Fecha de nacimiento</label>
            <input type="date" name="fecha_nacimiento" id="fecha_nacimiento" value={fechaNacimiento} onChange={e => setFechaNacimiento(e.target.value)} className="w-full p-2.5 border rounded-lg bg-white text-black dark:bg-[#283446] dark:text-white" required />
          </div>
          <div className="mb-3.5">
            <label htmlFor="email" className="block mb-1 font-bold">Correo electrónico</label>
            <input type="email" name="email" id="email" placeholder="ejemplo@gmail.com" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2.5 border rounded-lg bg-white text-black dark:bg-[#283446] dark:text-white" required />
          </div>
          <div className="relative mb-3.5">
            <label htmlFor="password" className="block mb-1 font-bold">Contraseña</label>
            <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2.5 border rounded-lg bg-white text-black dark:bg-[#283446] dark:text-white" required />
          </div>
          <div className="relative mb-3.5">
            <label htmlFor="confirm_password" className="block mb-1 font-bold">Confirmar contraseña</label>
            <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirma tu contraseña" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full p-2.5 border rounded-lg bg-white text-black dark:bg-[#283446] dark:text-white" required />
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}
          <button type="submit" className="w-full p-2 font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-600" disabled={loading}>
            {loading ? "Creando cuenta..." : "Crear cuenta"}
          </button>
        </form>
      </div>
    </section>
  );
}
