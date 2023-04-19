import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuotes } from '../lib/api';

const NewQuote = () => {
  const {sendRequest, status} = useHttp(addQuotes);
    const navigate = useNavigate();
    useEffect(() => {
        if (status === 'completed') {
            navigate('/quotes'); 
        }
    },[status, navigate]);


    const addQuoteHandler = (quoteInfo) => {
        console.log(quoteInfo);
        sendRequest(quoteInfo);

        navigate('/quotes');
    }
    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    )
}

export default NewQuote;