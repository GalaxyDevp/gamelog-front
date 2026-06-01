# 🎮 GameLog — Frontend
 
Aplicación web para registrar y gestionar tu colección de videojuegos. Lleva el control de los juegos que estás jugando, los que has completado y tu backlog, todo con una interfaz moderna con soporte para modo oscuro.
 
---
 
## ✨ Funcionalidades
 
- **Dashboard** — resumen rápido de tu actividad: juegos en curso, completados y en backlog, con los juegos jugados recientemente
- **Perfil** — vista detallada de tu colección con estadísticas y juego favorito
- **Catálogo de juegos** — exploración y búsqueda de juegos
- **Detalle de juego** — información ampliada de cada juego en un modal
- **Formulario para agregar juegos** — registro de nuevos títulos a tu colección
- **Tema claro/oscuro** — toggle de tema persistido con Zustand
---
 
## 🚀 Stack tecnológico
 
| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | ^19.2.4 | Librería UI principal |
| [TypeScript](https://www.typescriptlang.org/) | ~6.0.2 | Tipado estático |
| [Vite](https://vitejs.dev/) | ^8.0.4 | Bundler y servidor de desarrollo |
| [React Router](https://reactrouter.com/) | ^7.14.0 | Enrutamiento SPA |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.2.2 | Estilos utilitarios |
| [HeroUI](https://www.heroui.com/) | ^3.0.2 | Componentes UI |
| [Zustand](https://zustand-demo.pmnd.rs/) | ^5.0.12 | Gestión de estado global (tema) |
| [Lucide React](https://lucide.dev/) | ^1.7.0 | Iconografía |
 
---
 
## 📁 Estructura del proyecto
 
```
gamelog-front/
├── public/                   # Recursos estáticos (favicon, iconos SVG)
├── src/
│   ├── assets/               # Imágenes y recursos estáticos
│   │   └── images/           # Portadas de juegos
│   ├── components/           # Componentes reutilizables
│   │   ├── Card.tsx
│   │   ├── CardImg.tsx
│   │   ├── CardStatus.tsx
│   │   ├── Layout.tsx
│   │   ├── Modal.tsx
│   │   ├── Navbar.tsx
│   │   ├── Select.tsx
│   │   └── ThemeToggle.tsx
│   ├── interfaces/           # Tipos e interfaces TypeScript
│   ├── pages/                # Páginas de la aplicación
│   │   ├── dashboard.tsx
│   │   ├── formAddGame.tsx
│   │   ├── games/
│   │   │   ├── games.tsx
│   │   │   ├── gameDetail.tsx
│   │   │   └── SearchGames.tsx
│   │   └── profile/
│   │       ├── profile.tsx
│   │       ├── currentGames.tsx
│   │       ├── completedGames.tsx
│   │       ├── backlogGames.tsx
│   │       └── favoriteGame.tsx
│   ├── provider/             # Proveedores de contexto (tema)
│   ├── routes/               # Configuración de rutas
│   ├── store/                # Estado global con Zustand
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```
 
---
 
## 🗺️ Rutas
 
| Ruta | Página |
|---|---|
| `/` | Dashboard |
| `/profile` | Perfil del usuario |
| `/games` | Catálogo de juegos |
 
---
 
## ⚙️ Instalación y uso
 
### Prerrequisitos
 
- Node.js >= 18
- pnpm >= 9 — instálalo con `npm install -g pnpm`
### Clonar el repositorio
 
```bash
git clone https://github.com/GalaxyDevp/gamelog-front.git
cd gamelog-front
```
 
### Instalar dependencias
 
```bash
pnpm install
```
 
### Iniciar servidor de desarrollo
 
```bash
pnpm dev
```
 
Abre [http://localhost:5173](http://localhost:5173) en tu navegador.
 
### Construir para producción
 
```bash
pnpm build
```
 
### Previsualizar el build
 
```bash
pnpm preview
```
 
### Ejecutar linter
 
```bash
pnpm lint
```
