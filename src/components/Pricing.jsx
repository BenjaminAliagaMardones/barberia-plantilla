export default function Pricing({
  titulo = 'Nuestros Planes',
  subtitulo = 'Elige el plan perfecto para tus necesidades',
  planes = [],
}) {
  // Planes por defecto si no se proporcionan
  const defaultPlanes = [
    {
      nombre: 'Básico',
      precio: '$49.990',
      periodo: '/mes',
      descripcion: 'Ideal para emprendedores y pequeños negocios',
      caracteristicas: [
        'Hasta 10 servicios',
        'Soporte por email',
        'Actualizaciones básicas',
        'Panel de control',
        'Reportes mensuales',
      ],
      destacado: false,
      botonTexto: 'Comenzar',
      botonHref: '#contacto',
    },
    {
      nombre: 'Profesional',
      precio: '$99.990',
      periodo: '/mes',
      descripcion: 'Perfecto para negocios en crecimiento',
      caracteristicas: [
        'Servicios ilimitados',
        'Soporte prioritario 24/7',
        'Actualizaciones automáticas',
        'Panel avanzado',
        'Reportes semanales',
        'Consultoría incluida',
        'Integración con herramientas',
      ],
      destacado: true,
      botonTexto: 'Más Popular',
      botonHref: '#contacto',
    },
    {
      nombre: 'Empresarial',
      precio: '$199.990',
      periodo: '/mes',
      descripcion: 'Solución completa para grandes empresas',
      caracteristicas: [
        'Todo del plan Profesional',
        'Soporte dedicado',
        'Personalización completa',
        'Múltiples ubicaciones',
        'API access',
        'Capacitación del equipo',
        'SLA garantizado',
      ],
      destacado: false,
      botonTexto: 'Contactar',
      botonHref: '#contacto',
    },
  ];

  const planesList = planes.length > 0 ? planes : defaultPlanes;

  return (
    <section className="py-20 px-4 bg-neutral-50" id="precios">
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

        {/* Grid de Planes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {planesList.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.destacado
                  ? 'bg-primary-600 text-white shadow-2xl transform scale-105 lg:scale-110'
                  : 'bg-white text-neutral-900 shadow-lg'
              } transition-all duration-300 hover:shadow-2xl ${
                !plan.destacado && 'hover:-translate-y-2'
              }`}
            >
              {/* Badge de destacado */}
              {plan.destacado && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Recomendado
                  </span>
                </div>
              )}

              {/* Nombre del plan */}
              <h3 className="text-2xl font-heading font-bold mb-2">
                {plan.nombre}
              </h3>

              {/* Descripción */}
              <p
                className={`text-sm mb-6 ${
                  plan.destacado ? 'text-primary-100' : 'text-neutral-600'
                }`}
              >
                {plan.descripcion}
              </p>

              {/* Precio */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">{plan.precio}</span>
                  <span
                    className={`ml-2 ${
                      plan.destacado ? 'text-primary-200' : 'text-neutral-500'
                    }`}
                  >
                    {plan.periodo}
                  </span>
                </div>
              </div>

              {/* Botón */}
              <a
                href={plan.botonHref}
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold mb-8 transition-all duration-200 ${
                  plan.destacado
                    ? 'bg-white text-primary-600 hover:bg-neutral-100'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                {plan.botonTexto}
              </a>

              {/* Características */}
              <ul className="space-y-4">
                {plan.caracteristicas.map((caracteristica, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className={`h-6 w-6 mr-3 flex-shrink-0 ${
                        plan.destacado ? 'text-primary-200' : 'text-primary-600'
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span
                      className={`text-sm ${
                        plan.destacado ? 'text-primary-100' : 'text-neutral-600'
                      }`}
                    >
                      {caracteristica}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Nota adicional */}
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-4">
            ¿Necesitas un plan personalizado para tu empresa?
          </p>
          <a
            href="#contacto"
            className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Contáctanos para una cotización personalizada →
          </a>
        </div>
      </div>
    </section>
  );
}
