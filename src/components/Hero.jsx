export default function Hero({
  titulo = 'Título Principal Impactante',
  subtitulo = 'Subtítulo descriptivo que explica el valor de tu servicio',
  botonTexto = 'Comenzar Ahora',
  botonHref = '#contacto',
  imagenUrl = null,
  variante = 'simple', // 'simple' | 'conImagen' | 'conVideo'
}) {
  // Variante Simple: Texto centrado con fondo degradado
  if (variante === 'simple') {
    return (
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            {titulo}
          </h1>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {subtitulo}
          </p>
          <a
            href={botonHref}
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            {botonTexto}
          </a>
        </div>
        
        {/* Decoración de ondas */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    );
  }

  // Variante Con Imagen: Texto a la izquierda, imagen a la derecha
  if (variante === 'conImagen') {
    return (
      <section className="pt-24 pb-12 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Columna Izquierda: Contenido */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral-900 leading-tight">
                {titulo}
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                {subtitulo}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={botonHref}
                  className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg text-center"
                >
                  {botonTexto}
                </a>
                <a
                  href="#servicios"
                  className="inline-block bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all duration-200 text-center"
                >
                  Saber Más
                </a>
              </div>
            </div>

            {/* Columna Derecha: Imagen */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {imagenUrl ? (
                  <img
                    src={imagenUrl}
                    alt="Hero"
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                ) : (
                  // Placeholder con gradiente si no hay imagen
                  <div className="w-full h-[400px] lg:h-[500px] bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <svg
                        className="w-24 h-24 mx-auto mb-4 opacity-50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-lg font-medium">Imagen del Hero</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Decoración de fondo */}
              <div className="absolute -z-10 top-8 -right-8 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-secondary-200 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variante Con Video: Fondo de video con overlay
  if (variante === 'conVideo') {
    return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        
        {/* Contenido */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            {titulo}
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-neutral-200">
            {subtitulo}
          </p>
          <a
            href={botonHref}
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-2xl"
          >
            {botonTexto}
          </a>
        </div>

        {/* Placeholder para video de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-700">
          {/* Aquí iría un elemento <video> en producción */}
        </div>
      </section>
    );
  }

  return null;
}
