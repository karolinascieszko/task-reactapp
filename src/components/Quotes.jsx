
import React from "react";
import styles from"./Quotes.module.css";


const Quotes = ({ quotes,  randomNumber }) => {
    return (
    
    <div>
      {quotes[randomNumber-1] === undefined ? (
                <p className={styles.lackOfQuotes}> Brak cytatów do wyświetlenia! </p>
      ) : (
        <div>
                        <p className={styles.quote}>{quotes[randomNumber].quote}</p>
                        <p className={styles.author}>{quotes[randomNumber].author}</p>
        </div>
      )}
    </div>
  );
};

export default Quotes;