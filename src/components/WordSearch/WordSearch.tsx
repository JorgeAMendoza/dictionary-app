import { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import playIcon from '../../assets/images/icon-play.svg';
import sourceIcon from '../../assets/images/icon-new-window.svg';
import useSWR from 'swr';
import fetchWord from '../../lib/fetch-word';

const WordSearch = () => {
  const [word, setWord] = useState('keyboard');
  const { data, error, isLoading } = useSWR<WordInformation, Error>(
    word,
    fetchWord
  );
  return (
    <main>
      <SearchBar setWord={setWord} />

      <section>
        <div>
          <h1>Word</h1>
          <p>word pronuc</p>
        </div>

        <div>
          <button aria-label="button to play audio pronuction of the word">
            <img src={playIcon} alt="play icon" />
          </button>
          <audio hidden src="source">
            <track kind="captions"></track>
          </audio>
        </div>
      </section>

      <section>
        <h2>noun</h2>
        <p>meaning</p>

        <ul>
          <li>meaning of word</li>
        </ul>

        <div>
          <p>synonums</p>
          <ul>
            <li>word</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>verb</h2>
        <p>meaning</p>
        <ul>
          <li>
            <p>meaning word</p>
            <p>exmaple</p>
          </li>
        </ul>
      </section>

      <section>
        <p>
          source:{' '}
          <a
            href="targetlink"
            target="_blank"
            aria-label="open wikipedia link to word page"
          >
            source link
          </a>
          <span>
            <img src={sourceIcon} alt="new window icon" />
          </span>
        </p>
      </section>
    </main>
  );
};

export default WordSearch;
