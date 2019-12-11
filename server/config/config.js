// ======================
// PUERTO
// ======================
process.env.PORT = process.env.PORT || 3000

// ======================
// ENTORNO
// ======================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// ======================
// Base de DATOS
// ======================
process.env.URLDB = (process.env.NODE_ENV === 'dev') ? 'mongodb://localhost/cafe' : process.env.MONGO_URI

process.env.DB_USER = process.env.DB_USER || 'lirium'
process.env.DB_HOST = process.env.DB_HOST || 'localhost'
process.env.DB_PASSWORD = process.env.DB_PASSWORD || 'Lirium123'
process.env.DB_PORT = process.env.DB_PORT || 5432
process.env.DB_DATABASE = process.env.DB_DATABASE || 'ninio_mensajero'