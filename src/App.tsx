import { Button } from './components/Button';
import StarIcon from './components/StarIcon';

function App() {
  return (
    <main 
      className="flex flex-col justify-center items-center min-h-dvh gap-8 p-6"
      role="main"
      aria-label="Button Component Library Demo"
    >
      <header className="text-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Button Component Library</h1>
        <p className="text-lg text-gray-600">Accessible button components with various styles and sizes</p>
      </header>

      <section aria-labelledby="primary-buttons">
        <h2 id="primary-buttons" className="sr-only">Primary Button Variants</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" size="sm">
            Button CTA
          </Button>
          <Button leftIcon={<StarIcon size="20" />} variant="primary" size="md">
            Button CTA
          </Button>
          <Button
            rightIcon={<StarIcon size="20" />}
            variant="primary"
            size="lg"
          >
            Button CTA
          </Button>
          <Button variant="primary" size="xl">
            Button CTA
          </Button>
          <Button
            variant="primary"
            size="xl"
            iconOnly
            leftIcon={<StarIcon size="24" />}
            ariaLabel="Star action"
          />
        </div>
      </section>

      <section aria-labelledby="secondary-buttons">
        <h2 id="secondary-buttons" className="sr-only">Secondary Button Variants</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="secondary" size="sm">
            Button CTA
          </Button>
          <Button
            leftIcon={<StarIcon size="20" />}
            variant="secondary"
            size="md"
          >
            Button CTA
          </Button>
          <Button
            rightIcon={<StarIcon size="20" />}
            variant="secondary"
            size="lg"
          >
            Button CTA
          </Button>
          <Button variant="secondary" size="xl">
            Button CTA
          </Button>
          <Button
            variant="secondary"
            size="xl"
            iconOnly
            leftIcon={<StarIcon size="24" />}
            ariaLabel="Star action"
          />
        </div>
      </section>

      <section aria-labelledby="tertiary-buttons">
        <h2 id="tertiary-buttons" className="sr-only">Tertiary Button Variants</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="tertiary" size="sm">
            Button CTA
          </Button>
          <Button
            leftIcon={<StarIcon size="20" />}
            variant="tertiary"
            size="md"
          >
            Button CTA
          </Button>
          <Button
            rightIcon={<StarIcon size="20" />}
            variant="tertiary"
            size="lg"
          >
            Button CTA
          </Button>
          <Button variant="tertiary" size="xl">
            Button CTA
          </Button>
          <Button
            variant="tertiary"
            size="xl"
            iconOnly
            leftIcon={<StarIcon size="24" />}
            ariaLabel="Star action"
          />
        </div>
      </section>

      <section aria-labelledby="link-color-buttons">
        <h2 id="link-color-buttons" className="sr-only">Link Color Button Variants</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="link-color" size="sm">
            Button CTA
          </Button>
          <Button
            leftIcon={<StarIcon size="20" />}
            variant="link-color"
            size="md"
          >
            Button CTA
          </Button>
          <Button
            rightIcon={<StarIcon size="20" />}
            variant="link-color"
            size="lg"
          >
            Button CTA
          </Button>
          <Button variant="link-color" size="xl">
            Button CTA
          </Button>
          <Button
            variant="link-color"
            size="xl"
            iconOnly
            leftIcon={<StarIcon size="24" />}
            ariaLabel="Star action"
          />
        </div>
      </section>

      <section aria-labelledby="link-gray-buttons">
        <h2 id="link-gray-buttons" className="sr-only">Link Gray Button Variants</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="link-gray" size="sm">
            Button CTA
          </Button>
          <Button
            leftIcon={<StarIcon size="20" />}
            variant="link-gray"
            size="md"
          >
            Button CTA
          </Button>
          <Button
            rightIcon={<StarIcon size="20" />}
            variant="link-gray"
            size="lg"
          >
            Button CTA
          </Button>
          <Button variant="link-gray" size="xl">
            Button CTA
          </Button>
          <Button
            variant="link-gray"
            size="xl"
            iconOnly
            leftIcon={<StarIcon size="24" />}
            ariaLabel="Star action"
          />
        </div>
      </section>

      <section aria-labelledby="destructive-buttons">
        <h2 id="destructive-buttons" className="sr-only">Destructive Button Variants</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="destructive" size="sm">
            Button CTA
          </Button>
          <Button
            leftIcon={<StarIcon size="20" />}
            variant="destructive"
            size="md"
          >
            Button CTA
          </Button>
          <Button
            rightIcon={<StarIcon size="20" />}
            variant="destructive"
            size="lg"
          >
            Button CTA
          </Button>
          <Button variant="destructive" size="xl">
            Button CTA
          </Button>
          <Button
            variant="destructive"
            size="xl"
            iconOnly
            leftIcon={<StarIcon size="24" />}
            ariaLabel="Star action"
          />
        </div>
      </section>
    </main>
  );
}

export default App;
