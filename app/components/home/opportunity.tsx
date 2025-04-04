import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import OpportunityCard from "./opportunityCard";


export default function Opportunity() {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

  //Instrucción si vamos a quitar el token(Authorize) en oportunidades 
  const fetchOpportunities = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/Oportunidad", {
          headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) {
          throw new Error("Error al obtener los datos.");
        }
        const data = await response.json();
        setOpportunities(data);
      } catch (error) {
        setError("No se pudieron cargar las oportunidades. Intenta nuevamente.");
        console.error("Error fetching opportunities:", error);
      } finally {
        setLoading(false);
      }      
    };
    fetchOpportunities();
  }, []); 

  if (loading) return <p className="text-3xl text-[#32526E] text-center mb-5 dark:text-[#a8afc4]">Cargando oportunidades...</p>;

  return (
    <section id="service" className="py-12 w-full dark:bg-[#283747] text-black dark:text-white">
      <h2 className="text-3xl text-[#32526E] text-center mb-5 dark:text-[#a8afc4]">
        ¡Descubre estas oportunidades únicas!
      </h2>

      {error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          className="max-w-screen-lg mx-auto m-auto"
        >
          {opportunities.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <OpportunityCard
                nombre={item.nombre}
                descripcion={item.descripcion}
                encargado={item.encargado}
                requisitos={item.requisitos}
                modalidad={item.modalidad}
                observaciones={item.observaciones}
                guia={item.guia}
                datosAdicionales={item.datosAdicionales}
                canalesAtencion={item.canalesAtencion}
                categoriaNombre={item.categoria?.nombre || "Sin categoría"}
                categoriaDescripcion={item.categoria?.descripcion || "Sin descripción"}
                institucionNombre={item.institucion?.nombre || "Sin institución"}
                institucionUbicacion={item.institucion?.ubicacion || "Ubicación desconocida"}
                url_oferta_academica={item.institucion?.url_oferta_academica || ""}
                url_admision={item.institucion?.url_admision || ""}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}

