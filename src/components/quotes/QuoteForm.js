import { useRef } from 'react';
import { useState } from 'react';
import { Prompt } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
   const[isEntering,setIsEntering]=useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }
  const formFocusedhandler=()=>{
   setIsEntering(true);
  }
  const finishHandlingHandler=()=>{
    setIsEntering(false);
  }

  return (
    <Fragment>
    <Card>
      <Prompt when={isEntering} message={(location)=>'Are you sure you want to leave? All your Entered data will be lost'}/>
      <form onFocus={formFocusedhandler} className={classes.form} onSubmit={submitFormHandler}>
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
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={finishHandlingHandler}className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
    </Fragment>
  );
};

export default QuoteForm;
