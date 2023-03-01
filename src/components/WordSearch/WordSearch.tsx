import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import useSWRImmutable from 'swr';
import fetchWord from '../../lib/fetch-word';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import WordDisplay from '../WorDisplay/WordDisplay';

const WordSearch = () => {
  const [word, setWord] = useState('keyboard');
  const { data, error, isLoading } = useSWRImmutable<WordInformation, Error>(
    word,
    fetchWord
  );

  return (
    <main>
      <SearchBar setWord={setWord} />

      {isLoading ? <p>loading component here</p> : null}
      {error ? (
        <ErrorMessage
          errorTitle={error.message}
          errorCause={error.cause as string}
        />
      ) : null}
      {data ? <WordDisplay wordData={data} /> : null}
    </main>
  );
};

export default WordSearch;
