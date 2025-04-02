import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [selectedSection, setSelectedSection] = useState("dashboard");
    const navigate = useNavigate();

    // Contenido de cada sección
    const renderContent = () => {
        switch (selectedSection) {
            case "dashboard":
                return (
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <h2 className="text-xl font-semibold">Usuarios</h2>
                            <img src="https://via.placeholder.com/300x150" alt="Gráfico de Usuarios" />
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <h2 className="text-xl font-semibold">Bootcamps</h2>
                            <img src="https://via.placeholder.com/300x150" alt="Gráfico de Bootcamps" />
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <h2 className="text-xl font-semibold">Oportunidades</h2>
                            <img src="https://via.placeholder.com/300x150" alt="Gráfico de Oportunidades" />
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <h2 className="text-xl font-semibold">Temáticas</h2>
                            <img src="https://via.placeholder.com/300x150" alt="Gráfico de Temáticas" />
                        </div>
                    </div>
                );
            // Puedes mantener otros casos si los necesitas
        }
    };

    const handleUserClick = () => {
        navigate('/user'); // Esto te llevará a la ruta '/user'
    };

    return (
        <div className="flex h-screen bg-slate-200 text-white">
            {/* Sidebar */}
            <aside className="w-64 bg-gradient-to-b from-[#283E51] to-[#4B79A1] p-6 flex flex-col">
                <div className="flex flex-col items-center space-x-3 py-10">
                    <img className="w-28 h-auto bg-gray-500 rounded-lg mb-4"
                        src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                        alt="User" />
                    <h2 className="text-lg font-semibold">Pepito Peréz</h2>
                </div>

                {/* Menú de navegación */}
                <nav>
                    <ul className="space-y-3">
                        <li>
                            <button onClick={() => setSelectedSection("dashboard")}
                                className={`flex gap-3 p-3 rounded-md w-full ${selectedSection === "dashboard" ? "bg-gray-500" : "bg-[#404A69] hover:bg-gray-500"}`}>
                                🏠 Dashboard
                            </button>
                        </li>
                        <li>
                            <button onClick={handleUserClick}
                                className={`flex gap-3 p-3 rounded-md w-full ${selectedSection === "user" ? "bg-gray-500" : "bg-[#404A69] hover:bg-gray-500"}`}>
                                👤 Usuarios
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setSelectedSection("bootcamps")}
                                className={`flex gap-3 p-3 rounded-md w-full ${selectedSection === "bootcamps" ? "bg-gray-500" : "bg-[#404A69] hover:bg-gray-500"}`}>
                                🎓 Bootcamps
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setSelectedSection("opportunities")}
                                className={`flex gap-3 p-3 rounded-md w-full ${selectedSection === "opportunities" ? "bg-gray-500" : "bg-[#404A69] hover:bg-gray-500"}`}>
                                💼 Oportunidades
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setSelectedSection("themes")}
                                className={`flex gap-3 p-3 rounded-md w-full ${selectedSection === "themes" ? "bg-gray-500" : "bg-[#404A69] hover:bg-gray-500"}`}>
                                📚 Temáticas
                            </button>
                        </li>
                    </ul>
                </nav>

                {/* Botón de salir */}
                <div className="flex font-bold gap-3 mt-auto w-28 bg-[#FFBA08] p-3 rounded-md hover:bg-[#faa307]" >
                    <a href="/">Salir</a>
                </div>
            </aside>

            {/* Contenido dinámico */}
            <div className="flex-1 p-6">
                <header className="flex justify-between items-center bg-[#404A69] p-4 rounded-md shadow-lg">
                    <h1 className="text-2xl font-semibold">Panel Administrativo</h1>
                </header>

                {/* Contenido seleccionado */}
                <div className="mt-6 bg-white p-6 rounded-md text-black">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}