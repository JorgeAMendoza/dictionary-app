import axios from 'axios';

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
    const wordInformation = {
      word: data[0].word,
      phonetic: data[0].phonetic,
      meanings: data[0].meanings,
      audio: grabAudio(data[0].phonetics),
      source: data[0].sourceUrls[0] || '',
    };

    if (data.length === 1) return wordInformation;

    const extraWords = data.slice(1);

    const currentMeanings = [...wordInformation.meanings];

    const extraMeanings: Meanings[] = [];

    for (let i = 0; i < extraWords.length; i++) {
      const currentMeaning = extraWords[i].meanings;
      for (let j = 0; j < currentMeaning.length; j++)
        extraMeanings.push(currentMeaning[j]);
    }

    for (const meaning of extraMeanings) {
      if (
        !currentMeanings.find(
          (word) => meaning.partOfSpeech !== word.partOfSpeech
        )
      ) {
        wordInformation.meanings.push(meaning);
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
