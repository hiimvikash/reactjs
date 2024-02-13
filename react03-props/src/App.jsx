
import Card from './Card'
import './App.css'


function App() {

 const myArr = [1,2,3];

 let expiry = 2030;

 const laptopinfo = {
  modelname : "Honor Magic Book L0312", 
  mfc : 2018, 
  color : "steel grey"
 }

  return (
    <>
      <h1 className='bg-green-900 text-white p-4 rounded-xl mb-4'>Tailwind Test</h1>

      {/* Every Card will take diff info for itself so we will be using props */}
      <Card btnText="read-more"device="Honor Laptop" expiry= {expiry} arr={myArr} laptopinfo ={laptopinfo}/>
      <Card/>
    </>
  )
}

export default App;
