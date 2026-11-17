import Link from 'next/link';

export const metadata = {
  title: 'Términos y Condiciones',
};

export default function TerminosPage() {
  return (
    <main className="legal">
      <Link 
        href="/" 
        className="inline-flex items-center text-base font-bold text-blue-600 hover:underline mb-8"
      >
        ← Volver al inicio
      </Link>

      <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Términos y Condiciones</h1>

      <div className="space-y-6 text-base leading-relaxed text-slate-600">
        <p>
          Al utilizar los servicios de <strong>Advance Agencia Creativa</strong>, aceptas los siguientes términos y condiciones de servicio.
        </p>

        <h2 className="text-lg font-bold text-slate-900">1. Cotizaciones y Pagos</h2>
        <p>
          Todas las cotizaciones enviadas tienen una validez determinada. La producción de cualquier proyecto gráfico o de impresión inicia una vez confirmado el anticipo o pago acordado.
        </p>

        <h2 className="text-lg font-bold text-slate-900">2. Aprobación de Diseños</h2>
        <p>
          El cliente es responsable de revisar y aprobar los artes finales (ortografía, dimensiones, colores y contenidos) antes de pasar a impresión o fabricación.
        </p>

        <h2 className="text-lg font-bold text-slate-900">3. Tiempos de Entrega</h2>
        <p>
          Los tiempos de entrega son estimados y se acuerdan al momento de confirmar el pedido. Pueden variar según el volumen del trabajo y requerimientos de producción.
        </p>
      </div>
    </main>
  );
}