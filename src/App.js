import './App.css';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <>
    <Header />
    <div className="container">
      <Content />
    </div>
    <Footer />
    </>
  );
}

export default App;
