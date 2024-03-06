import { useState } from "react";
import Card from "./components/Card";
function App() {
  const [count, setCount] = useState(0);
  const myFriend = ["Diya", "Anshul", "Tushar", "Pratya"];
  return (
    <>
      <h1 class="bg-indigo-500">Hello Soumya</h1>
      {myFriend.map((friend) => (
        <Card name={friend} />
      ))}
    </>
  );
}

export default App;
