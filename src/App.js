import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <Greeting name="Maksim"/>
    <MyButton label="Жми меня" onClick={()=> alert("Меня нажали")}/>
    <MyButton label="Не жми меня" onClick={()=> alert("Меня все-таки нажали")}/>
    <ItemList items = {['яблоко', 'банан', 'чурчхела', 'тыблоко']}/>
    <ItemSelector items = {['яблоко', 'банан', 'чурчхела']}
     onSelect={(elem) => alert(`Вы выбрали: ${elem}`)}
    />
    </>
  );
}

export default App;
