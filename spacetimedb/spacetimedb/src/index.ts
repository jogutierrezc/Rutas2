import { schema, table, t } from 'spacetimedb/server';

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
});
export default spacetimedb;

export const init = spacetimedb.init(_ctx => {
  // Called when the module is initially published
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
});
