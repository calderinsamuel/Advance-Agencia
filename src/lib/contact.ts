export const contact = {
  phone: '573153466637',
  displayPhone: '+57 315 346 6637',
  email: 'johanhoyospublicidad@hotmail.com',
  address: 'Calle 15A #13-12, barrio La Julia',
  instagram: 'https://www.instagram.com/advance_agenciacreativa/',
};
export function whatsappUrl(message = 'Hola, Advance. Me gustaría recibir asesoría para mi proyecto.') {
  return `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;
}
