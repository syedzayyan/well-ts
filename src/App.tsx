import DimensionChanger from './components/DimensionChanger';
import Navbar from './components/Navbar';
import Wells from './components/Wells';
import DimProvider from "./context/DimensionContext"
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { useEffect, useState } from 'react';

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const [color, setColor] = useColor("hex", "#d99191");
  if (width < 1200) {
    return (
      <div>
        <h1>Screensize incompatible with app</h1>
        <p>Please use a desktop or a laptop. If you are on a laptop/desktop go full-screen and refresh.
          If it does not work make sure to to do a <a href="https://github.com/syedzayyan/well-ts">Pull Request HERE</a> or email me.
        </p>
      </div>
    )
  }
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <DimProvider>
          <DimensionChanger />
          <div className='well-and-color-pick'>
            <Wells curr_color={color.hex} />
            &nbsp;&nbsp;
            <div className='container'>
              <ColorPicker width={270} height={150} color={color} onChange={setColor} hideHSV dark />
            </div>
          </div>

        </DimProvider>
      </div>
    </div>
  );
}

export default App;
