<p align="center">
  <a href="https://xpedition.utp.edu.pe/" target="blank"><img src="https://xpedition.utp.edu.pe/wp-content/themes/xpedition/img/logo.png" width="210" alt="Xpedition URT" /></a>
</p>

  <p align="center">Mentorix a progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Mentorix](https://www.npmjs.com/package/mentorix-js) meta-framework for NestJS with TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Hexagonal Architecture
```bash
src/
├── app/                                                    # Directorio principal de la aplicación
│   ├── config/                                             # Archivos de configuración
│   │   ├── app-config.module.ts                            # Módulo de configuración que registra ConfigService
│   │   ├── config.service.ts                               # Servicio para acceder a la configuración
│   │   └── env/                                            # Directorio para almacenar archivos de entorno
│   │       ├── .env.development                            # Variables de entorno para desarrollo
│   │       ├── .env.production                             # Variables de entorno para producción
│   │       └── .env.qa                                     # Variables de entorno para qa
│   ├── modules/                                            # Módulos agrupados por dominio de negocio
│   │   ├── greeting/                                       # Cada módulo es autónomo y representativo del dominio
│   │   │   ├── application/                                # Lógica de aplicación (casos de uso)
│   │   │   │   └── use-cases/                              # Casos de uso
│   │   │   │       └── GetGreeting.usecase.ts              # Caso de uso para obtener un saludo
│   │   │   ├── controllers/                                # Controladores NestJS para la capa HTTP
│   │   │   │   └── Greeting.controller.ts                  # Controlador para manejar solicitudes de saludo
│   │   │   ├── domain/                                     # Entidades del dominio y sus interfaces
│   │   │   │   ├── interfaces/                             # Interfaces y contratos de repositorios y servicios
│   │   │   │   │   └── IGreetingRepository.interface.ts    # Interfaz para el repositorio de saludo
│   │   │   │   └── models/                                 # Entidades de dominio (no dependen de NestJS)
│   │   │   │       └── Greeting.ts                         # Entidad de dominio para saludo
│   │   │   ├── dtos/                                       # Objetos de transferencia de datos (Request y Response)
│   │   │   │   └── Greeting.dto.ts                         # DTO para estructurar la respuesta de saludo
│   │   │   ├── infrastructure/                             # Adaptadores de infraestructura
│   │   │   │   ├── providers/                              # Proveedores externos (servicios, API, etc.)
│   │   │   │   │   ├── ApiProvider.ts                      # Proveedor para conectarse a API externa
│   │   │   │   │   └── StorageProvider.ts                  # Proveedor para interactuar con almacenamiento externo
│   │   │   │   └── repositories/                           # Implementación de repositorios para bases de datos, APIs externas, etc.
│   │   │   │       └── GreetingRepository.ts               # Implementación del repositorio para saludo
│   │   │   ├── test/                                       # Pruebas del módulo
│   │   │   │   ├── e2e/                                    # Pruebas end-to-end para el módulo
│   │   │   │   │   └── Example.e2e.spec.ts                 # Ejemplo de prueba e2e para saludo
│   │   │   │   ├── integration/                            # Pruebas de integración para el módulo
│   │   │   │   │   └── Example.integration.spec.ts         # Ejemplo de prueba de integración para saludo
│   │   │   │   └── unit/                                   # Pruebas unitarias para el módulo
│   │   │   │       └── Example.spec.ts                     # Ejemplo de prueba unitaria para saludo
│   │   │   └── greeting.module.ts                          # Archivo de configuración del módulo
│   │   └── {OtroModulo}/                                   # Otros módulos adicionales
├── shared/                                                 # Módulos y utilidades compartidas entre microservicios
│   ├── database/                                           # Conexión y configuración de la base de datos
│   │   ├── postgres.module.ts                              # Módulo de configuración para PostgreSQL
│   │   ├── postgres.provider.ts                            # Proveedor de conexión a PostgreSQL
│   │   └── postgres.service.ts                             # Servicio para consultas a PostgreSQL
│   ├── events/                                             # Eventos comunes (para comunicación entre microservicios)
│   │   ├── events.gateway.ts                               # Gateway para manejar eventos en tiempo real
│   │   ├── events.module.ts                                # Módulo de configuración para eventos
│   │   └── eventTypes.ts                                   # Tipos de eventos disponibles en la aplicación
│   ├── interceptors/                                       # Interceptores globales (p.ej., logging, manejo de errores)
│   │   ├── logging.interceptor.ts                          # Interceptor para registrar solicitudes
│   │   └── timeout.interceptor.ts                          # Interceptor para manejar tiempo de espera
│   ├── middlewares/                                        # Middlewares comunes
│   │   └── request-logger.middleware.ts                    # Middleware para registrar detalles de las solicitudes
│   ├── pipes/                                              # Pipes comunes para validación y transformación
│   │   └── validation.pipe.ts                              # Pipe para validar y transformar datos
│   └── services/                                           # Servicios generales que pueden ser compartidos
│       └── hash.service.ts                                 # Servicio para manejar el hash de contraseñas
├── app.module.ts                                           # Módulo principal de la aplicación
└── main.ts                                                 # Punto de entrada de la aplicación NestJS
```
