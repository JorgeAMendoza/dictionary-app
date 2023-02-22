// creater API respons and one that you want back
type Definition = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
};

type Meanings = {
  partOfSeach: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
  example?: string;
};

type Phonetic = {
  text: string;
  audio: string;
};

interface WordInformation {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meanings[];
}

type APIResponse = WordInformation[];

type WordInformation = WordInformation;
