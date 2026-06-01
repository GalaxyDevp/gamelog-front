# 🎮 GameLog — Frontend
 
Aplicación web para llevar el registro personal de tu colección de videojuegos. Permite organizar tus juegos por estado (jugando, completado, backlog), marcar favoritos, puntuar y reseñar títulos, todo con soporte de modo oscuro y diseño responsivo.
 
---
 
## ✨ Funcionalidades
 
- **Dashboard** — resumen de actividad con conteo dinámico por estado y los juegos añadidos más recientemente
- **Spotlight de búsqueda** — búsqueda rápida de juegos con atajo de teclado desde cualquier página
- **Detalle de juego** — información de géneros, plataformas, desarrolladores y estado en modal
- **Formulario para agregar juego** — selección de estado, plataforma, puntuación (0–10) y reseña, con validación
- **Perfil** — estadísticas de colección, juegos favoritos, y listas de juegos actuales, completados y backlog
- **Catálogo** — vista de todos los juegos de la colección
- **Modo oscuro/claro** — toggle persistido con Zustand entre sesiones
- **Menú móvil** — navegación adaptada con Drawer para pantallas pequeñas
---
 
## 🚀 Stack tecnológico
 
| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | ^19.2.4 | Librería UI principal |
| [TypeScript](https://www.typescriptlang.org/) | ~6.0.2 | Tipado estático |
| [Vite](https://vitejs.dev/) | ^8.0.4 | Bundler y servidor de desarrollo |
| [React Router](https://reactrouter.com/) | ^7.14.0 | Enrutamiento SPA |
| [Mantine](https://mantine.dev/) | ^9.0.2 | Componentes UI (Modal, Drawer, Select, Form, Spotlight, Notifications) |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.2.2 | Estilos utilitarios |
| [Zustand](https://zustand-demo.pmnd.rs/) | ^5.0.12 | Estado global persistido (tema) |
| [Lucide React](https://lucide.dev/) | ^1.7.0 | Iconografía |
 
---

 
## 📁 Estructura del proyecto
 
```
gamelog-front/
├── public/                     # Recursos estáticos (favicon, iconos SVG)
├── src/
│   ├── assets/
│   │   └── images/             # Portadas de juegos (webp/jpg)
│   ├── components/             # Componentes reutilizables
│   │   ├── Card.tsx
│   │   ├── CardImg.tsx
│   │   ├── CardStatus.tsx
│   │   ├── Layout.tsx          # Wrapper con Navbar + Outlet
│   │   ├── MobileMenu.tsx      # Menú de navegación móvil (Drawer)
│   │   ├── Navbar.tsx          # Navbar con Spotlight, modal de añadir juego y toggle de tema
│   │   └── ThemeToggle.tsx
│   ├── const/
│   │   └── games.tsx           # Dataset estático de juegos (fuente de datos actual)
│   ├── interfaces/             # Tipos e interfaces TypeScript
│   ├── pages/
│   │   ├── dashboard.tsx       # Resumen: contadores y juegos recientes
│   │   ├── formAddGame.tsx     # Formulario: estado, plataforma, puntuación y reseña
│   │   ├── games/
│   │   │   ├── games.tsx       # Catálogo de todos los juegos
│   │   │   └── gameDetail.tsx  # Detalle de juego en modal
│   │   └── profile/
│   │       ├── profile.tsx         # Perfil con estadísticas generales
│   │       ├── currentGames.tsx    # Juegos en curso
│   │       ├── completedGames.tsx  # Juegos completados
│   │       ├── backlogGames.tsx    # Backlog
│   │       └── favoriteGame.tsx    # Juegos marcados como favoritos
│   ├── provider/
│   │   └── themeProvider.tsx   # Aplica clase dark/light al DOM
│   ├── routes/
│   │   └── routes.tsx          # Configuración de rutas con React Router
│   ├── store/
│   │   └── themeStore.ts       # Store de Zustand para el tema
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.cjs          # Configuración de PostCSS para Mantine
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

## 📊 Estados de juego
 
| Estado | Descripción |
|---|---|
| `Playing` | Juegos en curso |
| `Completed` | Juegos terminados |
| `Backlog` | Pendientes de jugar |
| `On Hold` | En pausa |
| `Dropped` | Abandonados |
 
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
