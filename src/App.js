import { NestedDropdown } from './component/NestedDropdown';
import { hogwardList } from './data/hogwardList';
import './index.css';

function App() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h3 className='p-2 underline underline-offset-2'>🧙‍♂️ N level Drop Down using Recursion 🪄 </h3>
      <br/>
      <div className='w-80'>
      <NestedDropdown items={hogwardList}/>
      </div>
  </div>
  );
}

export default App;
