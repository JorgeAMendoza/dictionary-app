import axios from 'axios';

const fetchWord = async (word: string): Promise<WordInformation> => {
  try {
    const { data } = await axios.get<APIResponse>(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      const response = e.response?.data as ErrorResponse;
      throw new Error(response.title, {
        cause: `${response.message} ${response.resolution}`,
      });
    }
    throw new Error('Something went wrong', { cause: 'Please try again' });
  }

  // if data length is nothing, or the array is 0, then throw an error respone

  // normalizing state, putting the state in a way that makes sense for us.
  // grab the first word, and set it equal to an object with teh word Information type, or put it in a way

  // grab word
  // grab phonetic

  // iterate over phonetics and find audio containing "us.mp3"
  // if not there then set to null.

  // grab meanings and set them.

  // at this point we are done with the base.

  // next if the data length is more than one, then iterate over the rest of the aray (slice)

  // iterate/extract meaings,
  // if the current part of speech already exist, ignore,
  // else put it in the object.

  // Watch for meanings, since its optional it should be fine to just extract and replace, and type guard for it.
};

export default fetchWord;
