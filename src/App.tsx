import { Button } from './components/Button';
import StarIcon from './components/StarIcon';

const PlusIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
    <path
      fillRule="evenodd"
      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
    />
  </svg>
);

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Great Component Library</h1>
      <p>Button Component Examples</p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          marginTop: '32px',
        }}
      >
        <section>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" size="sm">
              Button CTA
            </Button>
            <Button
              leftIcon={<StarIcon size="16" />}
              variant="primary"
              size="md"
            >
              Button CTA
            </Button>
            <Button
              rightIcon={<StarIcon size="16" />}
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
              leftIcon={<StarIcon size="20" />}
            />
          </div>
        </section>

        <section>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="secondary" size="sm">
              Button CTA
            </Button>
            <Button
              leftIcon={<StarIcon size="16" />}
              variant="secondary"
              size="md"
            >
              Button CTA
            </Button>
            <Button
              rightIcon={<StarIcon size="16" />}
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
              leftIcon={<StarIcon size="20" />}
            />
          </div>
        </section>

        <section>
          <h3>Button Variants</h3>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="link-color">Link Color</Button>
            <Button variant="link-gray">Link Gray</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </section>

        <section>
          <h3>Button Sizes</h3>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </section>

        <section>
          <h3>Buttons with Icons</h3>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Button leftIcon={<PlusIcon />}>Add Item</Button>
            <Button rightIcon={<DownloadIcon />} variant="secondary">
              Download
            </Button>
            <Button
              leftIcon={<TrashIcon />}
              rightIcon={<DownloadIcon />}
              variant="tertiary"
            >
              Both Icons
            </Button>
          </div>
        </section>

        <section>
          <h3>Icon Only Buttons</h3>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button iconOnly leftIcon={<PlusIcon />} size="sm" />
            <Button iconOnly leftIcon={<DownloadIcon />} variant="secondary" />
            <Button
              iconOnly
              leftIcon={<TrashIcon />}
              variant="destructive"
              size="lg"
            />
          </div>
        </section>

        <section>
          <h3>Custom Colors</h3>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button backgroundColor="#8B5CF6" color="white">
              Custom Purple
            </Button>
            <Button backgroundColor="#10B981" color="white">
              Custom Green
            </Button>
            <Button variant="secondary" color="#DC2626">
              Custom Text Color
            </Button>
          </div>
        </section>

        <section>
          <h3>Disabled State</h3>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button disabled>Disabled Primary</Button>
            <Button variant="secondary" disabled>
              Disabled Secondary
            </Button>
            <Button iconOnly leftIcon={<PlusIcon />} disabled />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
