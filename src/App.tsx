import './App.css'
import { TelegramLoginButton } from './components/TgButton';

function App() {
  const botName = "dimruxbot";
  const handleBot = (user: any) => {
    console.log(user);
  };

  return (
    <>
     <TelegramLoginButton
        botName={botName}
        buttonSize="large" 
        cornerRadius={3} 
        usePic={false} 
        dataOnauth={handleBot}
      />
    </>
  )
}

export default App
