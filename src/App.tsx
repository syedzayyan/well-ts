import './App.css';
import DimensionChanger from './components/DimensionChanger';
import Navbar from './components/Navbar';
import Wells from './components/Wells';
import DimProvider from "./context/DimensionContext"
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

function App() {
  const [color, setColor] = useColor("hex", "#121212");
  return (
    <div className="App">
      <Navbar />
      <DimProvider>
        <DimensionChanger />
        <Wells  curr_color={color.hex}/>
      </DimProvider>
      <ColorPicker width={270} height={150} color={color} onChange={setColor} hideHSV dark />
    </div>
  );
}

export default App;
