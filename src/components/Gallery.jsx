export default function Gallery({
  titulo = 'Nuestro Trabajo',
  subtitulo = 'Una muestra de nuestros proyectos más recientes',
  imagenes = [],
}) {
  // Imágenes por defecto si no se proporcionan
  const defaultImagenes = [
    {
      url: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=800',
      alt: 'Proyecto 1',
      titulo: 'Proyecto Destacado 1',
    },
    {
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      alt: 'Proyecto 2',
      titulo: 'Proyecto Destacado 2',
    },
    {
      url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
      alt: 'Proyecto 3',
      titulo: 'Proyecto Destacado 3',
    },
    {
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
      alt: 'Proyecto 4',
      titulo: 'Proyecto Destacado 4',
    },
    {
      url: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800',
      alt: 'Proyecto 5',
      titulo: 'Proyecto Destacado 5',
    },
    {
      url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
      alt: 'Proyecto 6',
      titulo: 'Proyecto Destacado 6',
    },
  ];

  const galeria = imagenes.length > 0 ? imagenes : defaultImagenes;

  return (
    <section className="py-20 px-4 bg-neutral-50" id="galeria">
      <div className="max-w-7xl mx-auto">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-4">
            {titulo}
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            {subtitulo}
          </p>
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galeria.map((imagen, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
            >
              {/* Imagen */}
              <img
                src={imagen.url}
                alt={imagen.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay con título */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{imagen.titulo}</h3>
                  {imagen.descripcion && (
                    <p className="text-sm text-neutral-200">{imagen.descripcion}</p>
                  )}
                </div>
              </div>

              {/* Icono de zoom */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="h-5 w-5 text-primary-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para ver más (opcional) */}
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Ver Más Proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
