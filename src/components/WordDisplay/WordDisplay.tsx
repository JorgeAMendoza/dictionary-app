import audioIcon from '../../assets/images/icon-play.svg';
import { useRef } from 'react';

interface WordDisplayProps {
  wordData: WordInformation;
}

const WordDisplay = ({ wordData }: WordDisplayProps) => {
  const audioElement = useRef<HTMLAudioElement | null>(null);
  return (
    <article
      id="word-information"
      aria-label="section displaying information about the word"
    >
      <header>
        <div>
          <h1 data-cy="wordTitle">{wordData.word}</h1>
          <p data-cy="wordPronuc">{wordData.phonetic}</p>
        </div>

        {/* display disabled button without audio if no aduio */}
        {wordData.audio ? (
          <button
            data-cy="audioButton"
            aria-label={`button to play the audio phonetic of the word ${wordData.word}`}
            onClick={() => {
              if (audioElement) audioElement.current?.play();
            }}
          >
            <img src={audioIcon} alt="play audio icon" />
            <audio src={wordData.audio} ref={audioElement}>
              <track kind="captions"></track>
            </audio>
          </button>
        ) : (
          <button
            data-cy="audioButton"
            disabled
            aria-label={`no audio file for the word ${wordData.word}`}
          >
            <img src={audioIcon} alt="play audio icon" />
          </button>
        )}
      </header>

      {wordData.meanings.map((meaning) => (
        <article
          key={meaning.partOfSpeech}
          data-cy={`${meaning.partOfSpeech}Meanings`}
        >
          <h2>{meaning.partOfSpeech}</h2>
          <section>
            <h3>meaning</h3>
            <ul data-cy="meanings">
              {meaning.definitions.map((info) => (
                <li key={info.definition}>
                  <p>{info.definition}</p>
                  {info.example ? <p>{info.example}</p> : null}
                </li>
              ))}
            </ul>
            {meaning.synonyms.length > 0 ? (
              <div>
                <p>Synonyyms</p>
                <ul data-cy="synonymList">
                  {meaning.synonyms.map((synonym) => (
                    <li key={synonym.id}>{synonym.word}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {meaning.antonyms.length > 0 ? (
              <div>
                <p>Antonyms</p>
                <ul data-cy="antonymList">
                  {meaning.antonyms.map((antonym) => (
                    <li key={antonym.id}>{antonym.word}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>
        </article>
      ))}

      <footer>
        <p>Sources</p>
        <ul>
          {wordData.sources.map((source) => (
            <a key={source} href={source} target="_blank" rel="noreferrer">
              {source}
            </a>
          ))}
        </ul>
      </footer>
    </article>
  );
};

export default WordDisplay;
