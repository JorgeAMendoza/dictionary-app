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

    const meanings: Meanings[] = data[0].meanings.map((meaning) => {
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

      return {
        partOfSpeech: meaning.partOfSpeech,
        definitions: meaning.definitions,
        synonyms,
        antonyms,
      };
    });

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
      if (
        !wordInformation.meanings.find(
          (word) => meaning.partOfSpeech === word.partOfSpeech
        )
      ) {
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
