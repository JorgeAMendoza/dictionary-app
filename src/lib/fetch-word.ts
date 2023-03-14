import axios from 'axios';
import { nanoid } from 'nanoid';

const grabAudio = (phonetics: WordResponse['phonetics']): string | null => {
  for (const phon of phonetics) {
    if (phon.audio !== '' && phon.audio.includes('us.mp3')) return phon.audio;
  }
  return null;
};

const fetchWord = async (word: string): Promise<WordInformation> => {
  try {
    const { data } = await axios.get<APIResponse>(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    const meanings: Meanings[] = [];
    const foundMeanings: {
      [k: string]: number;
    } = {};

    for (let i = 0; i < data[0].meanings.length; i++) {
      const meaning = data[0].meanings[i];
      const synonyms = [];
      const antonyms = [];

      for (const word of meaning.synonyms) {
        synonyms.push({
          id: nanoid(),
          word,
        });
      }

      for (const word of meaning.antonyms) {
        antonyms.push({
          id: nanoid(),
          word,
        });
      }

      if (meaning.partOfSpeech in foundMeanings) {
        const index = foundMeanings[meaning.partOfSpeech];
        meanings[index].definitions.push(...meaning.definitions);
        meanings[index].synonyms.push(...synonyms);
        meanings[index].antonyms.push(...antonyms);
        continue;
      }

      foundMeanings[meaning.partOfSpeech] = i;
      meanings.push({
        partOfSpeech: meaning.partOfSpeech,
        definitions: meaning.definitions,
        synonyms,
        antonyms,
      });
    }
    const wordInformation = {
      word: data[0].word,
      phonetic: data[0].phonetic,
      audio: grabAudio(data[0].phonetics),
      source: data[0].sourceUrls[0],
      meanings,
    };

    if (data.length === 1) return wordInformation;

    const extraWords = data.slice(1);

    const extraMeanings: MeaningsAPI[] = [];

    for (let i = 0; i < extraWords.length; i++) {
      const currentMeaning = extraWords[i].meanings;
      for (let j = 0; j < currentMeaning.length; j++)
        extraMeanings.push(currentMeaning[j]);
    }

    for (const meaning of extraMeanings) {
      const wordIndex = wordInformation.meanings.findIndex(
        (word) => meaning.partOfSpeech === word.partOfSpeech
      );
      // insert extra information to already existing meaning
      if (wordIndex !== -1) {
        const synonyms = [];
        const antonyms = [];

        for (const word of meaning.synonyms) {
          synonyms.push({
            id: nanoid(),
            word,
          });
        }

        for (const word of meaning.antonyms) {
          antonyms.push({
            id: nanoid(),
            word,
          });
        }

        wordInformation.meanings[wordIndex].synonyms.push(...synonyms);
        wordInformation.meanings[wordIndex].antonyms.push(...antonyms);
        wordInformation.meanings[wordIndex].definitions.push(
          ...meaning.definitions
        );
      } else {
        // need to create new word meaning
        const synonyms = [];
        const antonyms = [];

        for (const word of meaning.synonyms) {
          synonyms.push({
            id: nanoid(),
            word,
          });
        }

        for (const word of meaning.antonyms) {
          antonyms.push({
            id: nanoid(),
            word,
          });
        }

        wordInformation.meanings.push({
          partOfSpeech: meaning.partOfSpeech,
          definitions: meaning.definitions,
          synonyms,
          antonyms,
        });
      }
    }

    return wordInformation;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      const response = e.response?.data as ErrorResponse;
      throw new Error(response.title, {
        cause: `${response.message} ${response.resolution}`,
      });
    }
    throw new Error('Something went wrong', { cause: 'Please try again' });
  }
};

export default fetchWord;
