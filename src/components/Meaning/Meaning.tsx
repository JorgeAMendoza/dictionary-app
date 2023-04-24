import Styled from './Meaning.styled';

type MeaningProps = Meanings;

const Meaning = ({
  partOfSpeech,
  definitions,
  synonyms,
  antonyms,
}: MeaningProps) => {
  return (
    <Styled.Meaning data-cy={`${partOfSpeech}Meanings`}>
      <h2>{partOfSpeech}</h2>

      <div>
        <h3>Meaning</h3>
        <Styled.DefinitionList data-cy="meanings" role="list">
          {definitions.map((def) => (
            <li key={def.definition}>
              <div>
                <p>{def.definition}</p>
                {def.example ? <p>&ldquo;{def.example}&rdquo;</p> : null}
              </div>
            </li>
          ))}
        </Styled.DefinitionList>
      </div>

      {synonyms.length > 0 ? (
        <Styled.Call>
          <h3>Synonyms</h3>

          <Styled.CallList data-cy="synonymList" role="list">
            {synonyms.map((synonym) => (
              <li key={synonym.id}>
                <p>{synonym.word}</p>
              </li>
            ))}
          </Styled.CallList>
        </Styled.Call>
      ) : null}

      {antonyms.length > 0 ? (
        <Styled.Call>
          <h3>Antonyms</h3>

          <Styled.CallList data-cy="antonymList" role="list">
            {antonyms.map((antonym) => (
              <li key={antonym.id}>
                <p>{antonym.word}</p>
              </li>
            ))}
          </Styled.CallList>
        </Styled.Call>
      ) : null}
    </Styled.Meaning>
  );
};

export default Meaning;
