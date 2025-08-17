import { Button } from './components/Button';
import StarIcon from './components/StarIcon';

function App() {
  return (
    <main className="flex flex-col justify-center items-center min-h-dvh gap-8 p-6">
      <section>
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
          />
        </div>
      </section>

      <section>
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
          />
        </div>
      </section>

      <section>
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
          />
        </div>
      </section>

      <section>
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
          />
        </div>
      </section>

      <section>
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
          />
        </div>
      </section>

      <section>
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
          />
        </div>
      </section>
    </main>
  );
}

export default App;
