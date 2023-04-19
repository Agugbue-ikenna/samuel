import { Route, Routes } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';




function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/quotes' element={<AllQuotes />} />
        <Route path='/quotes/:quoteId' element={<QuoteDetails />} />
        <Route path='/new-quotes' element={<NewQuote />} />
        <Route path='*' element={<NotFound />} />
       
      </Routes>
    </Layout>


  );
}

export default App;
