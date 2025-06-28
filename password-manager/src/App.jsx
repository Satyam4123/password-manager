import Header from './components/Header'
import Input from './components/Input'
import SavedEntries from './components/SavedEntries'
function App() {

  return (
    <main className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen w-full">
      <Header />
      <Input />
      <SavedEntries />
    </main>
  )
}

export default App
