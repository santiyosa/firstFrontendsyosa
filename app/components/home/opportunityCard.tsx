/* import { Link } from "@remix-run/react";

interface ServiceCard {
  className?: string;
  link: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export default function OpportunityCard({
  className = "",
  link,
  imageSrc,
  imageAlt,
  title,
  description,
}: ServiceCard) {
  return (
    <div
      className={`bg-muted shadow-lg rounded-lg overflow-hidden m-5 transform transition-transform hover:scale-105 w-72 text-justify dark:bg-[#0f1629] h-full`}>
      <img src={imageSrc} alt={imageAlt} className="w-full h-48 object-cover mb-3 rounded-lg" />
      <div className="p-4">
        <h3 className="text-xl mb-3 text-center">{title}</h3>
        <p className="text-center text-card-foreground text-left dark:text-[#a8afc4]">{description}</p>
      </div>
    </div>
  );
}
 */

interface OpportunityCardProps {
  nombre: string;
  descripcion: string;
  encargado: string;
  requisitos: string;
  modalidad: string;
  observaciones: string;
  guia: string;
  datosAdicionales: string;
  canalesAtencion: string;
  categoriaNombre: string;
  categoriaDescripcion: string;
  institucionNombre: string;
  institucionUbicacion: string;
  url_oferta_academica: string;
  url_admision: string;
}

export default function OpportunityCard({
  nombre,
  descripcion,
  encargado,
  requisitos,
  modalidad,
  observaciones,
  guia,
  datosAdicionales,
  canalesAtencion,
  categoriaNombre,
  categoriaDescripcion,
  institucionNombre,
  institucionUbicacion,
  url_oferta_academica,
  url_admision,
}: OpportunityCardProps) {
  return (
    <div
      className={`bg-muted shadow-lg rounded-lg overflow-hidden m-5 transform transition-transform p-4 hover:scale-105 w-72 text-justify dark:bg-[#0f1629] h-full min-h-[550px]`}>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{nombre}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{descripcion}</p>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        <strong>Encargado:</strong> {encargado}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        <strong>Requisitos:</strong> {requisitos}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        <strong>Modalidad:</strong> {modalidad}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        <strong>Observaciones:</strong> {observaciones}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        <strong>Guía:</strong> {guia}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        <strong>Datos Adicionales:</strong> {datosAdicionales}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        <strong>Canales de Atención:</strong> {canalesAtencion}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        <strong>Nombre:</strong> {categoriaNombre}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        <strong>Descripción:</strong> {categoriaDescripcion}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        <strong>Nombre:</strong> {institucionNombre}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        <strong>Ubicación:</strong> {institucionUbicacion}
      </p>
      <h4 className="text-xl font-bold text-gray-900 dark:text-white">Enlaces</h4>
      <p><a href={url_oferta_academica} className="text-blue-500 underline">Oferta Académica</a></p>
      <p><a href={url_admision} className="text-blue-500 underline">Admisión</a></p>
    </div>
  );
}
