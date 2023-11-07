import { useState } from 'react';
import { Quote, fetchQuotes } from './application';

type TQuotesProps = {
    children: React.ReactNode,
    setQuotes: React.Dispatch<React.SetStateAction<Quote[]>>
}

const Quotes = ({ children, setQuotes }: TQuotesProps) => {
    const [count, setCount] = useState(10);

    return (
        <section className="flex flex-col gap-8">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    fetchQuotes(count).then(setQuotes);
                }}
            >
                <label htmlFor="number-of-quotes-to-load" className="block">
                    Number of Quotes to Load
                </label>
                <div className="flex">
                    <input
                        id="number-of-quotes-to-load"
                        className="w-full"
                        type="number"
                        min="0"
                        max="25"
                        value={count}
                        onChange={(e) => setCount(Number(e.currentTarget.value))}
                    />
                    <button type="submit">Load Quotes</button>
                </div>
            </form>
            <div className="grid grid-cols-2 gap-4">{children}</div>
        </section>
    );
};

export default Quotes;
