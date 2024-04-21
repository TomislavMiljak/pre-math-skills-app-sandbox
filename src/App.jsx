import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import SizeIntro from "./components/size/SizeIntro"
import SizeOne from "./components/size/SizeOne";
import SizeTwo from "./components/size/SizeTwo";
import SizeThree from "./components/size/SizeThree";
import SizeNav from './components/SizeNav';
import LengthOne from "./components/length/LengthOne";
import LengthTwo from "./components/length/LengthTwo";
import LengthThree from "./components/length/LengthThree";
import LengthFour from './components/length/LengthFour';
import LengthNav from './components/LengthNav';
import HeightOne from './components/height/HeightOne';
import HeightTwo from './components/height/HeightTwo';
import HeightThree from './components/height/HeightThree';
import HeightFour from './components/height/HeightFour';
import HeightNav from './components/HeightNav';
import QuantityNav from './components/QuantityNav';
import QuantityOne from './components/quantity/QuantityOne';
import QuantityTwo from './components/quantity/QuantityTwo';
import QuantityThree from './components/quantity/QuantityThree';
import QuantityFour from './components/quantity/QuantityFour';
import ShapeNav from "./components/ShapeNav";
import ShapeOne from "./components/shape/ShapeOne";
import ShapeTwo from "./components/shape/ShapeTwo";
import ShapeThree from './components/shape/ShapeThree';
import ShapeFour from './components/shape/ShapeFour';
import PositionNav from "./components/PositionNav";
import PositionOne from "./components/position/PositionOne";
import PositionTwo from "./components/position/PositionTwo";
import PositionThree from './components/position/PositionThree';
import PositionFour from './components/position/PositionFour';
import DifferenceNav from "./components/DifferenceNav";
import DifferenceOne from "./components/difference/DifferenceOne";
import DifferenceTwo from "./components/difference/DifferenceTwo";
import DifferenceThree from './components/difference/DifferenceThree';
import DifferenceFour from './components/difference/DifferenceFour';
import DetailsNav from "./components/DetailsNav";
import DetailsOne from './components/details/DetailsOne';
import DetailsTwo from './components/details/DetailsTwo';
import DetailsThree from "./components/details/DetailsThree";
import DetailsFour from "./components/details/DetailsFour";
import './App.css'
import "../src/styles/Home.css"
import "../src/styles/SizeIntro.css"
import "../src/styles/SizeOne.css"
import "../src/styles/SizeTwo.css"
import "../src/styles/SizeThree.css"
import "../src/styles/LengthOne.css"
import "../src/styles/LengthTwo.css"
import "../src/styles/LengthThree.css"
import "../src/styles/LengthFour.css"
import "../src/styles/Layout.css"
import "../src/styles/SizeNav.css"
import "../src/styles/LengthNav.css"
import "../src/styles/HeightOne.css"
import "../src/styles/HeightTwo.css"
import "../src/styles/HeightThree.css"
import "../src/styles/HeightFour.css"
import "../src/styles/HeightNav.css"
import "../src/styles/QuantityNav.css"
import "../src/styles/QuantityOne.css"
import "../src/styles/QuantityTwo.css"
import "../src/styles/QuantityThree.css"
import "../src/styles/QuantityFour.css"
import "../src/styles/ShapeNav.css"
import "../src/styles/ShapeOne.css"
import "../src/styles/ShapeTwo.css"
import "../src/styles/ShapeThree.css"
import "../src/styles/ShapeFour.css"
import "../src/styles/PositionNav.css"
import "../src/styles/PositionOne.css"
import "../src/styles/PositionTwo.css"
import "../src/styles/PositionThree.css"
import "../src/styles/PositionFour.css"
import "../src/styles/DifferenceNav.css"
import "../src/styles/DifferenceOne.css"
import "../src/styles/DifferenceTwo.css"
import "../src/styles/DifferenceThree.css"
import "../src/styles/DifferenceFour.css"
import "../src/styles/DetailsNav.css"
import "../src/styles/DetailsOne.css"
import "../src/styles/DetailsTwo.css"
import "../src/styles/DetailsThree.css"
import "../src/styles/DetailsFour.css"


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="SizeNav" element={<SizeNav />}/>
          <Route path="size/SizeIntro" element={<SizeIntro />}/>
          <Route path="size/SizeOne" element={<SizeOne />}/>
          <Route path="size/SizeTwo" element={<SizeTwo />}/>
          <Route path="size/SizeThree" element={<SizeThree />}/>
        
          <Route path="length/LengthOne" element={<LengthOne />} />
          <Route path="length/LengthTwo" element={<LengthTwo />} />
          <Route path="length/LengthThree" element={<LengthThree />}/>
          <Route path="length/LengthFour" element={<LengthFour />}/>
          <Route path="LengthNav" element={<LengthNav />} />

          <Route path="height/HeightOne" element={<HeightOne />} />
          <Route path="height/HeightTwo" element={<HeightTwo />} />
          <Route path="height/HeightThree" element={<HeightThree />}/>
          <Route path="height/HeightFour" element={<HeightFour />}/>
          <Route path="HeightNav" element={<HeightNav />} />

          <Route path="quantity/QuantityOne" element={<QuantityOne />} />
          <Route path="quantity/QuantityTwo" element={<QuantityTwo />} />
          <Route path="quantity/QuantityThree" element={<QuantityThree />} />
          <Route path="quantity/QuantityFour" element={<QuantityFour />} />
          <Route path="QuantityNav" element={<QuantityNav />} />

          <Route path="shape/ShapeOne" element={<ShapeOne />} />
          <Route path="shape/ShapeTwo" element={<ShapeTwo />} />
          <Route path="shape/ShapeThree" element={<ShapeThree />} />
          <Route path="shape/ShapeFour" element={<ShapeFour />} />
          <Route path="ShapeNav" element={<ShapeNav />} />

          <Route path="position/PositionOne" element={<PositionOne />} />
          <Route path="position/PositionTwo" element={<PositionTwo />} />
          <Route path="position/PositionThree" element={<PositionThree />} />
          <Route path="position/PositionFour" element={<PositionFour />} />
          <Route path="PositionNav" element={<PositionNav />} />

          <Route path="difference/DifferenceOne" element={<DifferenceOne />} />
          <Route path="difference/DifferenceTwo" element={<DifferenceTwo />} />
          <Route path="difference/DifferenceThree" element={<DifferenceThree />} />
          <Route path="difference/DifferenceFour" element={<DifferenceFour />} />
          <Route path="DifferenceNav" element={<DifferenceNav />} />

          <Route path="details/DetailsOne" element={<DetailsOne />} />
          <Route path="details/DetailsTwo" element={<DetailsTwo />} />
          <Route path="details/DetailsThree" element={<DetailsThree />} />
          <Route path="details/DetailsFour" element={<DetailsFour />} />
          <Route path="DetailsNav" element={<DetailsNav />} />
            
          
            
          
        </Route>
      </Routes>
      
    </>
  )
}

export default App
