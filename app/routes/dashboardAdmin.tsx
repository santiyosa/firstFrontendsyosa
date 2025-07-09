import { motion } from "framer-motion";

export default function DashboardAdmin() {
    return (
        
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-14 px-10"
        >
            <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl text-center font-bold text-gray-800 mb-4"
            >
                Bienvenido al Dashboard Administrativo
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-700 leading-relaxed"
            >
                Desde este panel de administración, puedes gestionar los diferentes elementos de la plataforma,
                como usuarios, bootcamps, categorías, oportunidades, instituciones y temáticas.
            </motion.p>

            <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-4 text-gray-700 leading-relaxed"
            >
                Usa el menú lateral para navegar entre las distintas secciones. Cada módulo está diseñado para
                facilitar la gestión eficiente de los datos y optimizar la administración de la plataforma.
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-3xl text-center font-semibold text-gray-800 mt-10"
            >
                📌 Funcionalidades disponibles
            </motion.h2>
            <div className="flex justify-center gap-6  py-10">

                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="list-disc list-inside text-gray-700 mt-2 space-y-2"
                >
                    {[
                        "Usuarios: Administrar los registros de los usuarios y sus permisos.",
                        "Bootcamps: Gestionar información de programas educativos.",
                        "Categorías: Organizar los diferentes cursos y oportunidades.",
                        "Oportunidades: Controlar y gestionar las ofertas educativas y laborales.",
                        "Instituciones: Administrar las entidades registradas en la plataforma.",
                        "Temáticas: Clasificar los contenidos según áreas de conocimiento.",
                    ].map((item, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                        >
                            <strong>{item.split(":")[0]}:</strong> {item.split(":")[1]}
                        </motion.li>
                    ))}
                </motion.ul>
                <div className="flex justify-end items-end ">
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                        src="/img/81.png"
                        alt="Dashboard Image"
                        className="w-[380px] h-auto rounded-lg shadow-lg"
                    >
                    </motion.img>
                </div>
            </div>


            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="mt-10 text-center text-gray-700 leading-relaxed"
            >
                ¡Explora las opciones y optimiza la administración de la plataforma de manera sencilla y eficiente! 🚀
            </motion.p>
        </motion.div>
    );
}
