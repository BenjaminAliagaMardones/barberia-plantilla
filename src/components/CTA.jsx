export default function CTA({
  titulo = '¿Listo para comenzar?',
  descripcion = 'Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos',
  botonPrimarioTexto = 'Contactar Ahora',
  botonPrimarioHref = '#contacto',
  botonSecundarioTexto = 'Saber Más',
  botonSecundarioHref = '#servicios',
  mostrarBotonSecundario = true,
  variante = 'degradado', // 'degradado' | 'solido' | 'imagen'
}) {
  // Variante con degradado (por defecto)
  if (variante === 'degradado') {
    return (
      <section className="relative py-20 px-4 bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden" id="contacto">
        {/* Decoración de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            {titulo}
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            {descripcion}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={botonPrimarioHref}
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              {botonPrimarioTexto}
            </a>
            {mostrarBotonSecundario && (
              <a
                href={botonSecundarioHref}
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
              >
                {botonSecundarioTexto}
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Variante sólida
  if (variante === 'solido') {
    return (
      <section className="py-20 px-4 bg-primary-600 text-white" id="contacto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            {titulo}
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-10">
            {descripcion}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={botonPrimarioHref}
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all duration-200 shadow-xl"
            >
              {botonPrimarioTexto}
            </a>
            {mostrarBotonSecundario && (
              <a
                href={botonSecundarioHref}
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
              >
                {botonSecundarioTexto}
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Variante con imagen de fondo
  if (variante === 'imagen') {
    return (
      <section className="relative py-24 px-4 overflow-hidden" id="contacto">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0 bg-neutral-900">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-600/90"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            {titulo}
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            {descripcion}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={botonPrimarioHref}
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              {botonPrimarioTexto}
            </a>
            {mostrarBotonSecundario && (
              <a
                href={botonSecundarioHref}
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
              >
                {botonSecundarioTexto}
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }

  return null;
}
