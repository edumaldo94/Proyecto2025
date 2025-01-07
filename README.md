 ###Clean Architecture###

├── frontend/
    ├── .expo/
    |    ├── setting.json
    |    └── README      
    ├── myapp/
    |   ├── .expo/
    |   |    ├── web/
    |   |    ├── devices.json
    |   |    └── README 
    |   ├── assets/                      # Imágenes, íconos, fuentes
    |   ├── node_modules/
    |   ├── src/                         # Carpeta principal para lógica de negocio
    |   │   ├── domain/                  # Lógica de negocio pura
    |   │   │   ├── models/              # Modelos de datos (entidades)
    |   │   │   ├── usecases/            # Casos de uso (interacciones de negocio)
    |   │   │   └── interfaces/          # Interfaces de repositorios
    |   │   ├── data/                    # Implementaciones específicas de datos
    |   │   │   ├── repositories/        # Repositorios (implementaciones concretas)
    |   │   │   └── sources/             # Fuentes de datos (APIs, bases de datos, etc.)
    |   │   ├── presentation/            # UI y lógica relacionada con la presentación
    |   │   │   ├── screens/             # Pantallas principales
    |   │   │   ├── components/          # Componentes reutilizables
    |   │   │   ├── navigation/          # Configuración de navegación (si necesitas algo más complejo)
    |   │   │   └── viewmodels/          # Manejo de estado (hooks, contextos, etc.)
    |   │   └── shared/                  # Recursos y utilidades compartidas
    |   │       ├── styles/              # Estilos globales
    |   │       ├── config/              # Configuraciones generales (API base URL, etc.)
    |   │       └── utils/               # Funciones utilitarias (formateadores, validadores, etc.)
    |   ├── App.js                       # Inicio de la aplicación.
    |   ├── app.json                     # Configuración de Expo.
    |   ├── index.js                     # punto de entrada de la aplicación.
    |   ├── package.json                 # Dependencias del proyecto
    |   └── package-lock.json.json       #
    ├── .gitignore
    └── README

2. Detalles por Carpeta
domain/
Propósito: Contiene la lógica de negocio pura e independiente de la infraestructura.
models/:
Define las entidades centrales del dominio, como User, Recipe, etc.

usecases/:
Contiene la lógica de interacción del negocio (como "Crear receta" o "Autenticar usuario").
Cada archivo debe centrarse en una única acción de negocio.

interfaces/:
Define contratos o interfaces que los repositorios deben implementar.

data/
Propósito: Implementa cómo se obtienen y guardan los datos.
repositories/:
Implementaciones concretas de los repositorios definidos en domain/interfaces.

sources/:
Maneja las interacciones directas con fuentes externas, como APIs o bases de datos.

presentation/
Propósito: Contiene toda la lógica relacionada con la interacción con el usuario.

screens/:
Componentes principales de las vistas (pantallas).
Ejemplo: LoginScreen.js, RecipeListScreen.js.

components/:
Componentes reutilizables, como botones, tarjetas, etc.

navigation/:
Configuración y lógica de navegación (React Navigation).

viewmodels/:
Manejo del estado, con hooks o contextos que conectan usecases con las vistas.

shared/
Propósito: Contiene elementos globales o compartidos entre diferentes partes del proyecto.

styles/:
Estilos globales o constantes CSS-in-JS.

config/:
Variables de configuración, como API_BASE_URL.

utils/:
Funciones reutilizables como validadores, formateadores, etc.

3. Archivos Principales
App.js:
Actúa como el componente raíz, donde se configura el proveedor de navegación, temas globales, y otros contextos.

index.js:
Punto de entrada de la aplicación que registra el componente raíz usando registerRootComponent.

package.json:
Lista las dependencias necesarias para el proyecto y scripts útiles.

4. Sugerencias Para Mejoras:
Pruebas Unitarias:
Considera añadir una carpeta tests/ o incluir archivos de prueba cerca de cada módulo.
