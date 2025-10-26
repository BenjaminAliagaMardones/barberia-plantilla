export default function Features({
  titulo = 'Nuestros Servicios',
  subtitulo = 'Todo lo que necesitas en un solo lugar',
  features = [],
}) {
  // Features por defecto si no se proporcionan
  const defaultFeatures = [
    {
      icono: 'rocket',
      titulo: 'Rápido y Eficiente',
      descripcion: 'Resultados de calidad en tiempo récord sin comprometer la excelencia.',
    },
    {
      icono: 'shield',
      titulo: 'Confiable y Seguro',
      descripcion: 'Garantizamos la seguridad y confidencialidad de tu información.',
    },
    {
      icono: 'star',
      titulo: 'Calidad Premium',
      descripcion: 'Los mejores materiales y técnicas para resultados superiores.',
    },
    {
      icono: 'heart',
      titulo: 'Atención Personalizada',
      descripcion: 'Cada cliente es único y merece un servicio adaptado a sus necesidades.',
    },
    {
      icono: 'clock',
      titulo: 'Disponibilidad 24/7',
      descripcion: 'Siempre estamos aquí cuando nos necesitas, cualquier día y hora.',
    },
    {
      icono: 'users',
      titulo: 'Equipo Profesional',
      descripcion: 'Profesionales certificados con años de experiencia en el sector.',
    },
  ];

  const featuresList = features.length > 0 ? features : defaultFeatures;

  const getIcon = (iconName) => {
    const icons = {
      rocket: (
        <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      shield: (
        <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      star: (
        <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      heart: (
        <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      clock: (
        <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      users: (
        <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      briefcase: (
        <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      check: (
        <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    };
    return icons[iconName] || icons.star;
  };

  return (
    <section className="py-20 px-4 bg-white" id="servicios">
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

        {/* Grid de Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icono */}
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                {getIcon(feature.icono)}
              </div>

              {/* Título */}
              <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">
                {feature.titulo}
              </h3>

              {/* Descripción */}
              <p className="text-neutral-600 leading-relaxed">
                {feature.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
