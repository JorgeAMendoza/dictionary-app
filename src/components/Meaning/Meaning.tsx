type MeaningProps = Meanings;

const Meaning = ({
  partOfSpeech,
  definitions,
  synonyms,
  antonyms,
}: MeaningProps) => {
  return (
    <section data-cy={`${partOfSpeech}Meanings`}>
      <h2>{partOfSpeech}</h2>

      <div>
        <h3>Meaning</h3>
        <ul data-cy="meanings">
          {definitions.map((def) => (
            <li key={def.definition}>
              <p>{def.definition}</p>
              <p>{def.example ? def.example : null}</p>
            </li>
          ))}
        </ul>
      </div>

      {synonyms.length > 0 ? (
        <div>
          <h3>Synonyms</h3>

          <ul data-cy="synonymList">
            {synonyms.map((synonym) => (
              <li key={synonym.id}>{synonym.word}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {antonyms.length > 0 ? (
        <div>
          <h3>Antonyms</h3>

          <ul data-cy="antonymList">
            {antonyms.map((antonym) => (
              <li key={antonym.id}>{antonym.word}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
};

export default Meaning;
