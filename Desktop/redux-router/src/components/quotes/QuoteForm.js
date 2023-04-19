import { useRef, Fragment } from 'react';
import LoadingSpinner from '../ui/LoadingSpinner';
import Card from '../ui/Card';
import classes from './QuoteForm.module.css';


const QuotesForm = (props) => {


    const authorInputRef = useRef();
    const textInputRef = useRef();


    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAuthor = authorInputRef.current.value;
        const enteredText = textInputRef.current.value;


        props.onAddQuote({ author: enteredAuthor, text: enteredText });
    }
    return (
        <Fragment>
            <Card>
                <form className={classes.form} onSubmit={submitHandler}>
                    
                    {props.isLoading && (
                        <div className={classes.loading}>
                            <LoadingSpinner />
                        </div>
                    )}
                    <div className={classes.control}>
                        <label htmlFor='author'>Author</label>
                        <input type='text' id='author' ref={authorInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='text'>Text</label>
                        <textarea id='text' rows={5} ref={textInputRef}></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button>Add Quote</button>
                    </div>
                </form>
            </Card>
        </Fragment>

    )
}

export default QuotesForm;