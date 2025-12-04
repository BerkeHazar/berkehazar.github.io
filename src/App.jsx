import Header from './components/Header';
import Hero from './components/Hero';
import RepoGrid from './components/RepoGrid';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #4c1d95, #1e3a8a, #0c4a6e)' }}>
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <Header />
        <Hero />
        <RepoGrid username="Berke" />
      </div>
    </div>
  );
}

export default App;
