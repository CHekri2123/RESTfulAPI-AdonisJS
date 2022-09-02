import Env from '@ioc:Adonis/Core/Env'
import { OrmConfig } from '@ioc:Adonis/Lucid/Orm'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig & { orm: Partial<OrmConfig> } = {
 
  connection: Env.get('DB_CONNECTION'),

  connections: {
   
    pg: {
      client: 'pg',
      connection: {
        host: Env.get('PG_HOST','localhost'),
        port: Env.get('PG_PORT', 5432),
        user: Env.get('PG_USER', 'postgres'),
        password: Env.get('PG_PASSWORD', 7979),
        database: Env.get('PG_DB_NAME', 'postgres'),
      },
      healthCheck: true,
			debug: false,
    },

  },

  
  orm: {
  },
}

export default databaseConfig
