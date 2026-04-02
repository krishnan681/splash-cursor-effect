import SplashCursor from './components/SplashCursor';
import './App.css';

function App() {
  return (
    <div>
      {/* Fluid Splash Cursor */}
      <SplashCursor 
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1440}
        CAPTURE_RESOLUTION={512}

      /* design Splash Cursor's style or colors....get it from react bits  */
        
      />

       
      <div className="content">
        {/* Hero Section */}
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 24px' }}>
          <h1 className="main-heading">
            Splash<span>Cursor</span>
          </h1>

          <p className="subtitle">
            A mesmerizing fluid ink splash effect that follows your mouse cursor in real-time.
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="btn btn-primary">
              Try the Effect
            </button>
            <button className="btn btn-outline">
              View on GitHub
            </button>
          </div>
        </div>

         
      </div>
    </div>
  );
}

export default App;