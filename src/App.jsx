import { useState } from 'react';
import './App.css';
import Layout from './Layout';
import ServicesLayout from './ServicesLayout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Layout: full-width background */}
      <Layout />

      {/* ServicesLayout: content constrained to 1240px */}
      <div className="w-full">
        <div className="max-w-[1240px] mx-auto">
          <ServicesLayout />
        </div>
      </div>
    </>
  );
}

export default App;