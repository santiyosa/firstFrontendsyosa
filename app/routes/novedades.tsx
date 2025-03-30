import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { useState } from 'react';

export let loader: LoaderFunction = async () => {
    return { 
        images: [
            "/images/comfama.png",
            "/images/nodo.png",
        ],
        opportunities: [
            {
                title: "Alianza Empresarial - Comfama",
                image: "/images/comfama.png",
                description: "Se enfoca en promover el empleo de mujeres y jóvenes, facilitando su acceso a oportunidades laborales dignas. A través de programas de capacitación en habilidades digitales, liderazgo y emprendimiento ..."
            },
            {
                title: "Alianza Empresarial - Comfama",
                image: "/images/comfama.png",
                description: "Se enfoca en promover el empleo de mujeres y jóvenes, facilitando su acceso a oportunidades laborales dignas. A través de programas de capacitación en habilidades digitales, liderazgo y emprendimiento ..."
            }
        ]
    };
};

interface LoaderData {
    message: string;
    images: string[];
    opportunities: {
        title: string;
        image: string;
        description: string;
    }[];
}

const Novedades = () => {
    let data = useLoaderData<LoaderData>();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [expanded, setExpanded] = useState<boolean[]>(new Array(data.opportunities.length).fill(false));

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % data.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + data.images.length) % data.images.length);
    };

    const toggleExpand = (index: number) => {
        setExpanded(expanded.map((exp, i) => (i === index ? !exp : exp)));
    };

    return (
        <div className="flex flex-col items-center text-center bg-white text-black min-h-screen p-5">
            <h1 className="text-2xl mb-4">Novedades</h1>
            <p>{data.message}</p>
            <div className="relative w-full max-w-md overflow-hidden flex items-center justify-center">
                <button onClick={prevImage} className="absolute left-0 z-10">Previous</button>
                <img src={data.images[currentImageIndex]} alt="carousel" className="w-full rounded-lg" />
                <button onClick={nextImage} className="absolute right-0 z-10">Next</button>
            </div>
            <div className="mt-4 flex justify-center space-x-2">
                {data.images.map((_, index) => (
                    <span key={index} className={`h-2 w-2 rounded-full ${currentImageIndex === index ? 'bg-black' : 'bg-gray-300'}`}></span>
                ))}
            </div>
            <div className="mt-8 w-full max-w-3xl text-left bg-gray-100 p-5 rounded-lg shadow-md">
                <input type="text" placeholder="Busca tu próxima oportunidad" className="w-full bg-white p-2 rounded border border-gray-300 mb-4" />
                <div className="flex justify-between items-center mb-4">
                    <span>¡Filtra tu búsqueda!</span>
                    <input type="date" className="bg-white" />
                    <span>→</span>
                    <input type="date" className="bg-white" />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    <select className="p-2 rounded border bg-white">
                        <option>Ubicación</option>
                        <option>Medellín, Antioquia</option>
                    </select>
                    <select className="p-2 rounded border bg-white">
                        <option>Tipo de oportunidad</option>
                        <option>Educativa</option>
                    </select>
                    <select className="p-2 rounded border bg-white">
                        <option>Sector</option>
                        <option>Tecnología</option>
                    </select>
                </div>
                <div className="flex justify-between">
                    <button className="px-4 py-2 rounded bg-orange-500 text-white">Búsqueda</button>
                    <button className="px-4 py-2 rounded border border-gray-300 bg-white">Limpiar</button>
                </div>
            </div>
            <h5 className="mt-8 text-xl font-bold text-blue-900">¡Oportunidades para estudiar!</h5>
            <div className="flex flex-wrap justify-center gap-5 mt-8">
                {data.opportunities.map((opportunity, index) => (
                    <div key={index} className="w-[calc(50%-20px)] max-w-lg border border-gray-300 rounded-lg overflow-hidden text-left relative">
                        <img src={opportunity.image} alt={opportunity.title} className="w-full h-56 object-cover" />
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg mb-2">{opportunity.title}</h2>
                                <button className="px-3 py-1 rounded-full border border-gray-300 bg-white font-bold">GUARDAR</button>
                            </div>
                            <p>
                                {expanded[index] ? opportunity.description : `${opportunity.description.substring(0, 70)}...`}
                                {opportunity.description.length > 70 && (
                                    <button onClick={() => toggleExpand(index)} className="ml-2 text-blue-500">{expanded[index] ? 'ver menos' : 'ver más'}</button>
                                )}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Novedades;
