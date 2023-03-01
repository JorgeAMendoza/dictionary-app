// creater API respons and one that you want back
type Definition = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
};

type Meanings = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
};

type Phonetic = {
  text: string;
  audio: string;
};

interface WordResponse {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meanings[];
  sourceUrls: string[];
}

interface ErrorResponse {
  title: string;
  message: string;
  resolution: string;
}

interface WordInformation {
  word: string;
  phonetic: string;
  audio: string | null;
  meanings: Meanings[];
  source: string;
}

type APIResponse = WordResponse[];
