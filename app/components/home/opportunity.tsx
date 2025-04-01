/* import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import OpportunityCard from "~/components/home/opportunityCard";

export default function Opportunity() {
  const opportunities = [
    {
      link: "https://es.nodoeafit.com/",
      imageSrc: "/img/nodo.png",
      imageAlt: "Nodo Eafit",
      title: "Nodo Eafit",
      description:
        "Participa en programas de formación y talleres en la Universidad EAFIT en el área de la tecnología para potenciar tus habilidades y conocimientos. ¡Inscríbete hoy!",
    },
    {
      link: "https://velezreyesmas.com/",
      imageSrc: "/img/velez.png",
      imageAlt: "Becas vélezreyes+",
      title: "Becas vélezreyes+",
      description:
        "Ofrecen apoyo financiero a estudiantes destacados. Solicita tu beca y alcanza tus metas educativas.",
    },
    {
      link: "https://www.comfama.com/trabajo-con-proposito/empleo/centro-de-empleo-para-la-industria-digital/",
      imageSrc: "/img/comfama.jpg",
      imageAlt: "Comfama",
      title: "Comfama",
      description:
        "Accede a programas educativos y recreativos con Comfama. Encuentra la oportunidad perfecta para tu crecimiento personal y profesional.",
    },
    {
      link: "https://es.nodoeafit.com/",
      imageSrc: "/img/nodo.png",
      imageAlt: "Nodo Eafit",
      title: "Nodo Eafit",
      description:
        "Participa en programas de formación y talleres en la Universidad EAFIT en el área de la tecnología para potenciar tus habilidades y conocimientos. ¡Inscríbete hoy!",
    },
    {
      link: "https://velezreyesmas.com/",
      imageSrc: "/img/velez.png",
      imageAlt: "Becas vélezreyes+",
      title: "Becas vélezreyes+",
      description:
        "Ofrecen apoyo financiero a estudiantes destacados. Solicita tu beca y alcanza tus metas educativas.",
    },
    {
      link: "https://www.comfama.com/trabajo-con-proposito/empleo/centro-de-empleo-para-la-industria-digital/",
      imageSrc: "/img/comfama.jpg",
      imageAlt: "Comfama",
      title: "Comfama",
      description:
        "Accede a programas educativos y recreativos con Comfama. Encuentra la oportunidad perfecta para tu crecimiento personal y profesional.",
    },
    {
      link: "https://es.nodoeafit.com/",
      imageSrc: "/img/nodo.png",
      imageAlt: "Nodo Eafit",
      title: "Nodo Eafit",
      description:
        "Participa en programas de formación y talleres en la Universidad EAFIT en el área de la tecnología para potenciar tus habilidades y conocimientos. ¡Inscríbete hoy!",
    },
    {
      link: "https://velezreyesmas.com/",
      imageSrc: "/img/velez.png",
      imageAlt: "Becas vélezreyes+",
      title: "Becas vélezreyes+",
      description:
        "Ofrecen apoyo financiero a estudiantes destacados. Solicita tu beca y alcanza tus metas educativas.",
    },
    {
      link: "https://www.comfama.com/trabajo-con-proposito/empleo/centro-de-empleo-para-la-industria-digital/",
      imageSrc: "/img/comfama.jpg",
      imageAlt: "Comfama",
      title: "Comfama",
      description:
        "Accede a programas educativos y recreativos con Comfama. Encuentra la oportunidad perfecta para tu crecimiento personal y profesional.",
    },

  ];

  return (
    <section id="service" className="py-12 w-full dark:bg-[#283747] text-black dark:text-white">
      <h2 className="text-3xl text-[#32526E] text-center mb-5 dark:text-[#a8afc4]">
        ¡Descubre estas oportunidades únicas!
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        breakpoints={{
          640: { slidesPerView: 1},
          768: { slidesPerView: 2},  
          1024: { slidesPerView: 3}
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 30000 }}
        className="max-w-screen-lg mx-auto"
      >
        {opportunities.map((item, index) => (
          <SwiperSlide key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <OpportunityCard
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                title={item.title}
                description={item.description} link={""}              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
 */



import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import OpportunityCard from "~/components/home/opportunityCard";

export default function Opportunity() {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

//Instrucción si vamos a dejar el token(Authorize) en oportunidades    
/* 
  const fetchOpportunities = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Debes estar logeado para ver las oportunidades");
        }

        const response = await fetch("https://tu-api.com/oportunidades", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setOpportunities(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, []);
  if (error) return <p className="text-3xl text-[#32526E] text-center mb-5 dark:text-[#a8afc4]">Mensaje: {error}</p>; */

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

