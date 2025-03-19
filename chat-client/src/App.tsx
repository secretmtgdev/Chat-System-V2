import './App.css';
import MessageInput from './components/message-input/MessageInput';

function App() {
  return (
    <div>
      <MessageInput onClickHandler={() => console.log('Prop drilling way too deep')} />
    </div>
  );
}

export default App;
