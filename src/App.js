import Album from './main';
import dataset from './data';

const cards = dataset.map(data=>{
  return data
})
function App() {
  return (
   <>
   <Album cards={cards}/>
   </>
  );
}

export default App;
