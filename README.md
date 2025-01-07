# Proyecto MyApp

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu computadora:

- Node.js (versión LTS recomendada)
- Expo CLI (instalado globalmente)
- Un emulador (Android Studio/AVD para Android, Xcode para iOS) o la aplicación Expo Go instalada en tu teléfono.

Para instalar Expo CLI, ejecuta el siguiente comando:

```bash
npm install -g expo-cli
```

## Clonar el Repositorio
```bash
git https://github.com/edumaldo94/Proyecto2025
cd myapp
```


## Instalar Dependencias
- Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:
```bash
npm install
```
## Ejecutar la Aplicación
- Opción 1: Ejecutar en Expo Go (Recomendado para Desarrollo)
- Inicia el servidor de desarrollo:
```bash
npx expo start
```
- Escanea el código QR que aparece en la terminal o en la pestaña del navegador con la aplicación Expo Go.

## Opción 2: Ejecutar en un Emulador
- Asegúrate de que el emulador esté configurado y en ejecución (por ejemplo, un emulador de Android).

- Ejecuta el siguiente comando según tu plataforma:

- Para Android:
```bash
expo start --android
```
- Para iOS (requiere Mac y Xcode):
```bash
expo start --ios
```
## Solución de Problemas Comunes
- Si hay problemas al instalar dependencias, intenta limpiar la caché de npm:
```bash
npm cache clean --force
```
- Si ves errores relacionados con Expo, reinicia la instalación:
```bash
npm install -g expo-cli
```
- Actualizar Dependencias:
```bash
npm update
```
## Estructura del Proyecto

# **Estructura del Proyecto**

```plaintext
frontend/
├── .expo/
│   ├── settings.json
│   └── README.md
├── myapp/
│   ├── .expo/
│   │   ├── web/
│   │   ├── devices.json
│   │   └── README.md
│   ├── assets/                      # Imágenes, íconos, fuentes
│   ├── node_modules/
│   ├── src/                         # Carpeta principal para lógica de negocio
│   │   ├── domain/                  # Lógica de negocio pura
│   │   │   ├── models/              # Modelos de datos (entidades)
│   │   │   ├── usecases/            # Casos de uso (interacciones de negocio)
│   │   │   └── interfaces/          # Interfaces de repositorios
│   │   ├── data/                    # Implementaciones específicas de datos
│   │   │   ├── repositories/        # Repositorios (implementaciones concretas)
│   │   │   └── sources/             # Fuentes de datos (APIs, bases de datos, etc.)
│   │   ├── presentation/            # UI y lógica relacionada con la presentación
│   │   │   ├── screens/             # Pantallas principales
│   │   │   ├── components/          # Componentes reutilizables
│   │   │   ├── navigation/          # Configuración de navegación (si necesitas algo más complejo)
│   │   │   └── viewmodels/          # Manejo de estado (hooks, contextos, etc.)
│   │   └── shared/                  # Recursos y utilidades compartidas
│   │       ├── styles/              # Estilos globales
│   │       ├── config/              # Configuraciones generales (API base URL, etc.)
│   │       └── utils/               # Funciones utilitarias (formateadores, validadores, etc.)
│   ├── App.js                       # Inicio de la aplicación.
│   ├── app.json                     # Configuración de Expo.
│   ├── index.js                     # Punto de entrada de la aplicación.
│   ├── package.json                 # Dependencias del proyecto
│   └── package-lock.json            #
├── .gitignore
└── README.md

