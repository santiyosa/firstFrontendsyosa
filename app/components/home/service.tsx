import ServiceCard from "./serviceCard";



export default function Services() {
  return (
    <section className="py-12 w-full dark:bg-[#0f1629] text-black dark:text-white bg-slate-200">
      <h2 id="service"  className="text-4xl text-[#32526E] font-semibold text-center mb-3 dark:text-[#a8afc4]">Servicios</h2>
      <div className="flex justify-center flex-wrap">
        <div className="justify-center max-w-screen-lg mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <ServiceCard
            className=""
            link=""
            imageSrc="../public/img/imagen1.png"
            imageAlt="Pro Vocación"
            title="Pro Vocación"
            description="Descubre tu verdadera vocación a través de nuestro programa Pro-Vocación. Te ayudamos a identificar tus fortalezas y a explorar las mejores opciones educativas y profesionales. ¡Da el primer paso hacia tu futuro hoy!"
            buttonText=" LO QUIERO "
          />
          <ServiceCard
            className=""
            link=""
            
            imageAlt="Asesoría Sociopedagógica"
            title="Asesoría Sociopedagógica"
            description="Recibe orientación personalizada para superar los desafíos educativos. Nuestra asesoría sociopedagógica te ofrece herramientas y estrategias para mejorar tu rendimiento académico y bienestar personal."
            buttonText=" LO QUIERO "
            imageSrc="./public/img/imagen2.png"
          />
          <ServiceCard
            className=""
            link=""
            imageSrc="public/img/imagen3.png"
            imageAlt="Test Sociovocacional"
            title="Test Sociovocacional"
            description="¿No estás seguro de cuál es la mejor carrera para ti? Nuestro Test Sociovocacional te guiará en la elección de una carrera basada en tus intereses, habilidades y valores personales. ¡Descubre tu camino ideal!"
            buttonText=" LO QUIERO "
          />

        </div>
      </div>
    </section>
  )
}
