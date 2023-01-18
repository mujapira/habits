import './styles/global.css';
import { Habit } from "./components/Habit";

export function App() {
  return (
    <>
      <div>
        <p>oi</p>
        <Habit completed={3} />
        <Habit completed={3} />
        <Habit completed={3} />
        <Habit completed={3} />
      </div>
    </>
  );
}
