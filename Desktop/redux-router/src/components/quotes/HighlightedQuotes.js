import classes from './Highlighted.module.css';

const HighlightedQuotes = (props) => {
    return (
        <figure className={classes.quote}>
            <p>{props.text}</p>
            <figcaption>{props.author}</figcaption>
        </figure>
    )
}

export default HighlightedQuotes;