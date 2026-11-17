import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad',
};

export default function PrivacidadPage() {
  return (
    <main className="legal">
      <Link 
        href="/" 
        className="inline-flex items-center text-base font-bold text-blue-600 hover:underline mb-8"
      >
        ← Volver al inicio
      </Link>

      <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Política de Privacidad</h1>

      <div className="space-y-6 text-base leading-relaxed text-slate-600">
        <p>
          En <strong>Advance Agencia Creativa</strong> nos tomamos muy en serio la protección de sus datos personales. El formulario prepara un mensaje en tu navegador. No guarda solicitudes en una base de datos del sitio ni las envía automáticamente. Al abrir WhatsApp y confirmar el envío, compartes los datos con Advance a través de ese servicio.
        </p>

        <h2 className="text-lg font-bold text-slate-900">1. Información que recopilamos</h2>
        <p>
          Al solicitar una cotización o ponerse en contacto con nosotros, recopilamos datos personales como su nombre, correo electrónico, empresa y los detalles específicos de su proyecto o solicitud de impresión/diseño.
        </p>

        <h2 className="text-lg font-bold text-slate-900">2. Uso de la información</h2>
        <p>
          La información recopilada se utiliza exclusivamente para:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Procesar solicitudes de cotización y responder consultas por WhatsApp o correo.</li>
          <li>Coordinar el diseño, producción y entrega de sus pedidos.</li>
          <li>Mejorar nuestros servicios y atención al cliente.</li>
        </ul>

        <h2 className="text-lg font-bold text-slate-900">3. Protección de datos</h2>
        <p>
          No vendemos, alquilamos ni compartimos sus datos personales con terceros para fines comerciales o publicitarios de ajenos.
        </p>

        <h2 className="text-lg font-bold text-slate-900">4. Contacto</h2>
        <p>
          Si tiene dudas o consultas sobre el tratamiento de sus datos personales, puede escribirnos a <strong>johanhoyospublicidad@hotmail.com</strong>.
        </p>
      </div>
    </main>
  );
}