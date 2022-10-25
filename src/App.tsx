import DimensionChanger from './components/DimensionChanger';
import Navbar from './components/Navbar';
import Wells from './components/Wells';
import DimProvider from "./context/DimensionContext"
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

function App() {
  const [color, setColor] = useColor("hex", "#d99191");
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
