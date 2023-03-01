import audioIcon from '../../assets/images/icon-play.svg';

interface WordDisplayProps {
  wordData: WordInformation;
}

const WordDisplay = ({ wordData }: WordDisplayProps) => {
  console.log(wordData.meanings);
  return (
    <article
      id="word-information"
      aria-label="section displaying information about the word"
    >
      <header>
        <div>
          <h1>{wordData.word}</h1>
          <p>{wordData.phonetic}</p>
        </div>

        {/* display disabled button without audio if no aduio */}
        {wordData.audio ? (
          <button aria-label="button to play the audio phonetic of the word">
            <img src={audioIcon} alt="play audio icon" />
            <audio src={wordData.audio}>
              <track kind="captions"></track>
            </audio>
          </button>
        ) : (
          <button disabled>
            <img src={audioIcon} alt="play audio icon" />
          </button>
        )}
      </header>

      {wordData.meanings.map((meaning) => (
        <section key={meaning.partOfSpeech}>
          <h2>{meaning.partOfSpeech}</h2>
          <div>
            <h3>meaning</h3>
            <ul>
              {meaning.definitions.map((info) => (
                <li key={info.definition}>
                  <p>{info.definition}</p>
                  {info.example ? <p>{info.example}</p> : null}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <footer>
        <p>Source</p>
      </footer>
    </article>
  );
};

export default WordDisplay;
