import { useRef } from 'react';
import { Container } from '../../styles/utils/Container.styled';
import Styled from './WordDisplay.styled';
import PlayIcon from '../Icons/PlayIcon';
import Meaning from '../Meaning/Meaning';
import linkIcon from '../../assets/images/icon-new-window.svg';

interface WordDisplayProps {
  wordData: WordInformation;
}

const WordDisplay = ({ wordData }: WordDisplayProps) => {
  const audioElement = useRef<HTMLAudioElement | null>(null);
  return (
    <Container>
      <Styled.WordDisplay
        id="word-information"
        aria-label="section displaying information about the word"
      >
        <Styled.WordTitle>
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
              <PlayIcon />
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
              <PlayIcon />
            </button>
          )}
        </Styled.WordTitle>

        {wordData.meanings.map((meaning) => (
          <Meaning
            key={meaning.partOfSpeech}
            partOfSpeech={meaning.partOfSpeech}
            definitions={meaning.definitions}
            synonyms={meaning.synonyms}
            antonyms={meaning.antonyms}
          />
        ))}

        <Styled.Footer>
          <p>Source</p>
          <ul data-cy="wordSources">
            {wordData.sources.map((source) => (
              <li key={source}>
                <a
                  href={source}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`link to open up wikipeida page about ${wordData.word}`}
                >
                  {source}
                </a>
                <img src={linkIcon} alt="" />
              </li>
            ))}
          </ul>
        </Styled.Footer>
      </Styled.WordDisplay>
    </Container>
  );
};

export default WordDisplay;
