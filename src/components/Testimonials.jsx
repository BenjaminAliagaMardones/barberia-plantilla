export default function Testimonials({
  titulo = 'Lo Que Dicen Nuestros Clientes',
  subtitulo = 'Testimonios reales de clientes satisfechos',
  testimonios = [],
}) {
  // Testimonios por defecto si no se proporcionan
  const defaultTestimonios = [
    {
      nombre: 'María González',
      cargo: 'Emprendedora',
      foto: 'https://i.pravatar.cc/150?img=5',
      testimonio:
        'Excelente servicio, superaron todas mis expectativas. El equipo es muy profesional y atento a cada detalle. Totalmente recomendado.',
      rating: 5,
    },
    {
      nombre: 'Carlos Ramírez',
      cargo: 'Gerente de Marketing',
      foto: 'https://i.pravatar.cc/150?img=12',
      testimonio:
        'Increíble atención y resultados de primera calidad. La experiencia fue muy fluida desde el primer contacto. Sin duda volveré.',
      rating: 5,
    },
    {
      nombre: 'Ana Silva',
      cargo: 'Dueña de Negocio Local',
      foto: 'https://i.pravatar.cc/150?img=9',
      testimonio:
        'Los mejores del rubro, muy recomendables. Han transformado mi negocio con su profesionalismo y dedicación. Estoy encantada con los resultados.',
      rating: 5,
    },
  ];

  const testimoniosList = testimonios.length > 0 ? testimonios : defaultTestimonios;

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400' : 'text-neutral-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 px-4 bg-white" id="testimonios">
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

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimoniosList.map((testimonio, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Icono de comillas */}
              <div className="absolute top-6 right-6 text-primary-200">
                <svg
                  className="h-12 w-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              {renderStars(testimonio.rating)}

              {/* Testimonio */}
              <p className="text-neutral-700 mb-6 leading-relaxed italic">
                "{testimonio.testimonio}"
              </p>

              {/* Información del cliente */}
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-200">
                <img
                  src={testimonio.foto}
                  alt={testimonio.nombre}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-200"
                />
                <div>
                  <h4 className="font-bold text-neutral-900">
                    {testimonio.nombre}
                  </h4>
                  <p className="text-sm text-neutral-600">{testimonio.cargo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas (opcional) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              500+
            </div>
            <div className="text-neutral-600 font-medium">Clientes Felices</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              4.9/5
            </div>
            <div className="text-neutral-600 font-medium">Rating Promedio</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              98%
            </div>
            <div className="text-neutral-600 font-medium">Recomendaciones</div>
          </div>
        </div>
      </div>
    </section>
  );
}
