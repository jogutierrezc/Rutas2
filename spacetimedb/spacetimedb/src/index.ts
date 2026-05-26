import { schema, table, t } from 'spacetimedb/server';

const DEFAULT_MAP_LOCATIONS = [
  {
    id: 'plaza-alfonso',
    routeId: 'patrimonial',
    categoryLabel: 'Patrimonial',
    name: 'Plaza Alfonso Lopez',
    subtitle: 'Corazon del Festival Vallenato.',
    description: 'Centro simbolico de Valledupar y punto de encuentro cultural para la ciudad.',
    address: 'Plaza Alfonso Lopez, Valledupar',
    costStatus: 'Acceso Libre',
    hours: 'Abierto 24h',
    audience: 'Familiar',
    image: 'https://images.unsplash.com/photo-1533601017-dc61895e03c0?auto=format&fit=crop&q=80&w=900',
    longitude: '-73.2435',
    latitude: '10.4631',
  },
  {
    id: 'catedral-rosario',
    routeId: 'patrimonial',
    categoryLabel: 'Patrimonial',
    name: 'Catedral Nuestra Senora del Rosario',
    subtitle: 'Templo historico del centro de Valledupar.',
    description: 'Uno de los referentes arquitectonicos y religiosos mas reconocidos de la ciudad.',
    address: 'Calle 15 con Carrera 7, Valledupar',
    costStatus: 'Acceso Libre',
    hours: '7:00 AM a 6:00 PM',
    audience: 'Religioso y fotografico',
    image: 'https://images.unsplash.com/photo-1548625361-ecacbd74cb86?auto=format&fit=crop&q=80&w=900',
    longitude: '-73.245',
    latitude: '10.465',
  },
  {
    id: 'casa-museo',
    routeId: 'patrimonial',
    categoryLabel: 'Patrimonial',
    name: 'Casa Museo del Vallenato',
    subtitle: 'Memoria musical y cultural de la region.',
    description: 'Espacio dedicado a la historia del vallenato y sus protagonistas.',
    address: 'Centro historico, Valledupar',
    costStatus: 'Consulta previa',
    hours: '8:00 AM a 5:00 PM',
    audience: 'Turistas y melomanos',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=900',
    longitude: '-73.2493',
    latitude: '10.4724',
  },
  {
    id: 'mercado-popular',
    routeId: 'gastronomica',
    categoryLabel: 'Gastronomica',
    name: 'Mercado Popular',
    subtitle: 'Parada clasica de cocina local.',
    description: 'Punto de sabores tradicionales para descubrir recetas y productos tipicos.',
    address: 'Sector centro, Valledupar',
    costStatus: 'Consumo variable',
    hours: '6:00 AM a 5:00 PM',
    audience: 'Familiar y gastronomico',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=900',
    longitude: '-73.2573',
    latitude: '10.4645',
  },
  {
    id: 'balcon-leyendas',
    routeId: 'mitos',
    categoryLabel: 'Mitos y Leyendas',
    name: 'Balcon de Leyendas',
    subtitle: 'Historias orales y relatos de la ciudad.',
    description: 'Escenario narrativo para la memoria oral y las historias populares del Cesar.',
    address: 'Zona centro, Valledupar',
    costStatus: 'Acceso Libre',
    hours: 'Nocturno',
    audience: 'Joven y familiar',
    image: 'https://images.unsplash.com/photo-1519764622345-23439dd774f5?auto=format&fit=crop&q=80&w=900',
    longitude: '-73.2389',
    latitude: '10.4589',
  },
];

const spacetimedb = schema({
  usuarios: table(
    { public: true },
    {
      nombre: t.string(),
      correo: t.string(),
      passwordHash: t.string(),
      rol: t.string(),
      activo: t.bool(),
      creadoEn: t.string(),
    }
  ),
  ubicacionesMapa: table(
    { public: true },
    {
      id: t.string(),
      routeId: t.string(),
      categoryLabel: t.string(),
      name: t.string(),
      subtitle: t.string(),
      description: t.string(),
      address: t.string(),
      costStatus: t.string(),
      hours: t.string(),
      audience: t.string(),
      image: t.string(),
      longitude: t.string(),
      latitude: t.string(),
      actualizadoEn: t.string(),
    }
  ),
});
export default spacetimedb;

export const init = spacetimedb.init(_ctx => {
  crearAdminSiNoExiste(_ctx);
  sembrarUbicacionesSiNoExisten(_ctx);
});

export const onConnect = spacetimedb.clientConnected(_ctx => {
  // Called every time a new client connects
});

export const onDisconnect = spacetimedb.clientDisconnected(_ctx => {
  // Called every time a client disconnects
});

export const crearUsuario = spacetimedb.reducer(
  {
    nombre: t.string(),
    correo: t.string(),
    passwordHash: t.string(),
    rol: t.string(),
  },
  (ctx, args) => {
    let existe = false;
    for (const usuario of ctx.db.usuarios.iter()) {
      if (usuario.correo === args.correo) {
        existe = true;
        break;
      }
    }

    if (existe) {
      throw new Error('Ya existe un usuario con ese correo.');
    }

    ctx.db.usuarios.insert({
      nombre: args.nombre,
      correo: args.correo,
      passwordHash: args.passwordHash,
      rol: args.rol,
      activo: true,
      creadoEn: new Date().toISOString(),
    });
  }
);

export const crearAdminInicial = spacetimedb.reducer(ctx => {
  crearAdminSiNoExiste(ctx);
});

export const upsertUbicacionMapa = spacetimedb.reducer(
  {
    id: t.string(),
    routeId: t.string(),
    categoryLabel: t.string(),
    name: t.string(),
    subtitle: t.string(),
    description: t.string(),
    address: t.string(),
    costStatus: t.string(),
    hours: t.string(),
    audience: t.string(),
    image: t.string(),
    longitude: t.string(),
    latitude: t.string(),
  },
  (ctx, args) => {
    for (const ubicacion of ctx.db.ubicacionesMapa.iter()) {
      if (ubicacion.id === args.id) {
        ctx.db.ubicacionesMapa.delete(ubicacion);
        break;
      }
    }

    ctx.db.ubicacionesMapa.insert({
      ...args,
      actualizadoEn: new Date().toISOString(),
    });
  }
);

export const eliminarUbicacionMapa = spacetimedb.reducer(
  {
    id: t.string(),
  },
  (ctx, args) => {
    for (const ubicacion of ctx.db.ubicacionesMapa.iter()) {
      if (ubicacion.id === args.id) {
        ctx.db.ubicacionesMapa.delete(ubicacion);
        break;
      }
    }
  }
);

export const resetUbicacionesMapa = spacetimedb.reducer(ctx => {
  for (const ubicacion of ctx.db.ubicacionesMapa.iter()) {
    ctx.db.ubicacionesMapa.delete(ubicacion);
  }

  insertarUbicacionesPorDefecto(ctx);
});

function crearAdminSiNoExiste(ctx: Parameters<typeof crearAdminInicial>[0]) {
  let yaExisteAdmin = false;
  for (const usuario of ctx.db.usuarios.iter()) {
    if (usuario.rol === 'administrador') {
      yaExisteAdmin = true;
      break;
    }
  }

  if (yaExisteAdmin) {
    return;
  }

  ctx.db.usuarios.insert({
    nombre: 'Admin Principal',
    correo: 'admin@valledupar.gov.co',
    passwordHash: 'admin123',
    rol: 'administrador',
    activo: true,
    creadoEn: new Date().toISOString(),
  });
}

function sembrarUbicacionesSiNoExisten(ctx: Parameters<typeof resetUbicacionesMapa>[0]) {
  for (const _ubicacion of ctx.db.ubicacionesMapa.iter()) {
    return;
  }

  insertarUbicacionesPorDefecto(ctx);
}

function insertarUbicacionesPorDefecto(ctx: Parameters<typeof resetUbicacionesMapa>[0]) {
  const actualizadoEn = new Date().toISOString();

  for (const ubicacion of DEFAULT_MAP_LOCATIONS) {
    ctx.db.ubicacionesMapa.insert({
      ...ubicacion,
      actualizadoEn,
    });
  }
}
