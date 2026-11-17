interface AutorCredito {
  nombre: string;
  url: string;
}

interface ImagenInfo {
  src: string;
  autor?: AutorCredito;
}

export interface CatalogoItem {
  id: number;
  categoria: string;
  titulo: string;
  imagenes: ImagenInfo[];
}


export const catalogoItems: CatalogoItem[] = [
    // Impresión Comercial y Papelería
    {
      id: 1,
      categoria: 'Impresión y Papelería',
      titulo: 'Volantes y Brochures',
      imagenes: [
        {
          src: '/catalogo/volantes2.jpg',
          autor: { nombre: 'pikisuperstar', url: 'https://www.magnific.com/es/autor/pikisuperstar' },
        },
        
      ],
    },
    {
      id: 2,
      categoria: 'Impresión y Papelería',
      titulo: 'Tarjetas de Presentación y Boletas',
      imagenes: [
        {
          src: '/catalogo/tarjetas.jpg',
          autor: { nombre: 'magnific', url: 'https://www.magnific.com/es/autor/magnific' },
        },
      ],
    },
    {
      id: 3,
      categoria: 'Impresión y Papelería',
      titulo: 'Calendarios, Agendas y Catálogos',
      imagenes: [
        {
          src: '/catalogo/calendarios2.jpg',
          autor: { nombre: 'ibrandify', url: 'https://www.magnific.com/author/ibrandify' },
        },
        ],
    },
    {
      id: 4,
      categoria: 'Impresión y Papelería',
      titulo: 'Talonarios y Diplomas',
      imagenes: [
        {
          src: '/catalogo/talonarios.jpg',
          autor: { nombre: 'wepik', url: 'https://www.magnific.com/es/autor/wepik' },
        },
           {
          src: '/catalogo/diplomas.jpg',
          autor: { nombre: 'BiZkettE1', url: 'https://www.magnific.com/author/BiZkettE1' },
        },
      ],
    },
    
    // Sublimación y Promocionales
    {
      id: 5,
      categoria: 'Sublimación y Promocionales',
      titulo: 'Camisetas y Gorras Personalizadas',
      imagenes: [
        {
          src: '/catalogo/camisetas.jpeg',
        },
        {
          src: '/catalogo/Gorritas.jpeg',
        },
      ],
    },
    {
      id: 6,
      categoria: 'Sublimación y Promocionales',
      titulo: 'Mugs, Termos y Llaveros',
      imagenes: [
        {
          src: '/catalogo/mugs.jpeg',
        },
        {
          src: '/catalogo/vasos.jpeg',
        },
         {
          src: '/catalogo/llaveros.jpeg',
        },


      ],
    },
    {
      id: 7,
      categoria: 'Sublimación y Promocionales',
      titulo: 'Carcasas, Popsockets y Pad Mouse',
      imagenes: [
        {
          src: '/catalogo/carcasas.jpg',
          autor: { nombre: 'GarryKillian', url: 'https://www.magnific.com/es/autor/garrykillian' },
        },
      ],
    },
    {
      id: 8,
      categoria: 'Sublimación y Promocionales',
      titulo: 'Bolígrafos y Bolsas de Cambrel',
      imagenes: [
        {
        src: '/catalogo/boligrafos.jpeg',
        },
        {
        src: '/catalogo/bolsas.jpeg',
        },
      ],
    },

    // Avisos Publicitarios y Decoración
    {
      id: 9,
      categoria: 'Avisos y Decoración',
      titulo: 'Avisos LED y Luminosos',
      imagenes: [
        {
          src: '/catalogo/avisos.jpeg',
        },
      ],
    },
    {
      id: 10,
      categoria: 'Avisos y Decoración',
      titulo: 'Avisos Rompetráfico (Tijeras)',
      imagenes: [
        {
          src: '/catalogo/tije.jpeg',
        },
      ],
    },
    {
      id: 11,
      categoria: 'Avisos y Decoración',
      titulo: 'Pasacalles y Pendones',
      imagenes: [
        {
          src: '/catalogo/pasacalles.jpeg',
        },
        {
          src: '/catalogo/pendo.jpeg',
        },
      ],
    },
    {
      id: 12,
      categoria: 'Avisos y Decoración',
      titulo: 'Cuadros en MDF y Vinilos de Pared',
      imagenes: [
       {
          src: '/catalogo/cuadros2.jpeg',
        },
      ],
    },

    // Vinilos, Adhesivos y Señalización
    {
      id: 13,
      categoria: 'Vinilos y Señalización',
      titulo: 'Stickers y Etiquetas Adhesivas',
      imagenes: [
       {
          src: '/catalogo/WhatsApp Image 2026-10-10 at 8.12.38 PM.jpeg',
        },
      ],
    },
    {
      id: 14,
      categoria: 'Vinilos y Señalización',
      titulo: 'Microperforados para Cristales',
      imagenes: [
        {
          src: '/catalogo/microperforado.jpeg',
        },
      ],
    },
    {
      id: 15,
      categoria: 'Vinilos y Señalización',
      titulo: 'Señalización Vial e Industrial',
      imagenes: [
        {
          src: '/catalogo/señalizacion.jpeg',
        },
         {
          src: '/catalogo/señalizacion2.jpeg',
        },
         {
          src: '/catalogo/señalizacion1.jpeg',
        },
      ],
    },
  ];
