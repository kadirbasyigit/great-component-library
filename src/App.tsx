import { Button } from './components'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Great Component Library</h1>
        <p className="text-lg text-gray-600 mb-8">Welcome to our component library!</p>
        
        <div className="space-x-4">
          <Button variant="primary" size="sm">Small Primary</Button>
          <Button variant="primary" size="md">Medium Primary</Button>
          <Button variant="secondary" size="lg">Large Secondary</Button>
        </div>
      </div>
    </div>
  )
}

export default App