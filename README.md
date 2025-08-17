# Great Component Library

A modern React component library built with TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **TypeScript Support** - Full TypeScript support with proper type definitions
- **Tailwind CSS** - Styled with Tailwind CSS for consistent design
- **Tree Shaking** - Optimized bundle size with tree shaking support
- **Accessible** - Built with accessibility in mind
- **Developer Experience** - Hot module replacement and fast development

## 📦 Installation

```bash
npm install great-component-library
# or
yarn add great-component-library
# or
pnpm add great-component-library
```

## 🛠️ Usage

```tsx
import { Button, StarIcon } from 'great-component-library';

function App() {
  return (
    <div>
      <Button variant="primary" size="md">
        Click me!
      </Button>
      
      <Button variant="secondary" leftIcon={<StarIcon size="16" />}>
        With Icon
      </Button>
    </div>
  );
}
```

## 🧩 Available Components

### Button

A flexible button component with multiple variants, sizes, and icon support.

**Features:**
- 6 variants: `primary`, `secondary`, `tertiary`, `link-color`, `link-gray`, `destructive`
- 4 sizes: `sm`, `md`, `lg`, `xl`
- Icon support (left, right, or icon-only)
- Custom colors and background colors
- Full accessibility support
- TypeScript definitions

**Example:**
```tsx
import { Button } from 'great-component-library';

// Basic usage
<Button variant="primary" size="md">
  Click me!
</Button>

// With icons
<Button variant="secondary" leftIcon={<StarIcon />}>
  Starred
</Button>

// Icon only
<Button variant="tertiary" iconOnly leftIcon={<StarIcon />} />

// Custom styling
<Button 
  variant="primary" 
  backgroundColor="#custom-color"
  className="custom-class"
>
  Custom Button
</Button>
```

### StarIcon

A simple star icon component with customizable size.

**Features:**
- 2 sizes: `16`, `20`
- Inherits current color
- Custom className support

**Example:**
```tsx
import { StarIcon } from 'great-component-library';

<StarIcon size="20" className="text-yellow-500" />
```

## 🏗️ Development

### Prerequisites

- Node.js 16+
- npm, yarn, or pnpm

### Setup

1. **Depoyu klonlayın:**

   ```bash
   git clone https://github.com/kadirbasyigit/great-component-library.git
   cd great-component-library
   ```

2. **Bağımlılıkları yükleyin:**

   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın:**

   ```bash
   npm run dev
   ```

### Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the library for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview the production build

## 🛠️ Built With

- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Class Variance Authority](https://cva.style/docs) - Variant-based component styling
- [clsx](https://github.com/lukeed/clsx) - Conditional className utility
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Tailwind CSS class merging

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
