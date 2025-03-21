import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#4879A1] to-[#283E51] text-white py-3 text-center flex justify-between items-center">
      <div className="flex flex-col px-10 items-center justify-center">
        {/* Logo y texto */}
        <img src="/img/logo.png" alt="Logo" className="h-20 py-2" />
        <p className="text-lg">¿Quieres saber más de nosotros?</p>
        <p className="mb-4">Contáctanos hoy mismo.</p>
      </div>

      {/* Íconos de redes sociales */}
      <div className="flex flex-col px-10 justify-center items-center">
        <div className="flex">
          <a href="https://www.instagram.com/somosantivirus" target="_blank" rel="noopener noreferrer"
            className="relative flex items-center justify-center w-12 h-12 rounded-full transition duration-300 hover:bg-orange-500">
            <Instagram size={32} />
          </a>

          <a href="https://api.whatsapp.com/send?phone=573217066273&text=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"
            className="relative flex items-center justify-center w-12 h-12 rounded-full transition duration-300 hover:bg-orange-500">
            <img src="/img/social.png" alt="WhatsApp" className="w-8 h-8" />
          </a>

          <a href="https://www.linkedin.com/in/somosantivirus" target="_blank" rel="noopener noreferrer"
            className="relative flex items-center justify-center w-12 h-12 rounded-full transition duration-300 hover:bg-orange-500">
            <Linkedin size={32} />
          </a>

          <a href="https://www.facebook.com/somosantivirus" target="_blank" rel="noopener noreferrer"
            className="relative flex items-center justify-center w-12 h-12 rounded-full transition duration-300 hover:bg-orange-500">
            <Facebook size={32} />
          </a>

          <a href="https://www.youtube.com/channel/UCCDsmMeIqSWGk_fh1m9FX0w" target="_blank" rel="noopener noreferrer"
            className="relative flex items-center justify-center w-12 h-12 rounded-full transition duration-300 hover:bg-orange-500">
            <Youtube size={32} />
          </a>
        </div>

        {/* Información de derechos reservados */}
        <p className="text-sm">Banco de Oportunidades</p>
        <p className="text-sm">
          FUNDACIÓN ANTIVIRUS © 2025 - Todos los Derechos Reservados
        </p>
      </div>
    </footer>
  );
}
