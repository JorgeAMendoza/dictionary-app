import { useState, memo } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import useSWR from 'swr';
import fetchWord from '../../lib/fetch-word';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import WordDisplay from '../WordDisplay/WordDisplay';
import Loading from '../Loading/Loading';

const WordSearch = () => {
  const [word, setWord] = useState('keyboard');
  const { data, error, isLoading } = useSWR<WordInformation, Error>(
    word,
    fetchWord,
    {
      revalidateOnReconnect: false,
      revalidateOnFocus: false,
      errorRetryCount: 0,
    }
  );

  return (
    <main>
      <SearchBar setWord={setWord} />

      {isLoading ? <Loading /> : null}
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

export default memo(WordSearch);
