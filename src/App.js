import { ToastContainer } from 'react-toastify';
import Customer from './pages/customer/Customer';
import Layout from './components/layout/Layout';
import './App.css';


function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        draggable
      />
      <Layout>
        <Customer />
      </Layout>
    </>
  );
}

export default App;
