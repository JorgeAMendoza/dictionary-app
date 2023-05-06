import { expect } from 'vitest';
import fetchWord from '../lib/fetch-word';

// File to test the fetch word function.
describe('fetch-word', () => {
  test('successfull search for word "gamer"', async () => {
    const wordData = await fetchWord('gamer');
    expect(wordData.word).toBe('gamer');
    expect(wordData.phonetic).toBe('/ˈɡeɪmɚ/');
    expect(wordData.audio).toBe(null);

    expect(wordData.meanings).toHaveLength(2);
    expect(wordData.sources).toBe('https://en.wiktionary.org/wiki/gamer');
  });

  test('successfull search for "keyboard"', async () => {
    const wordData = await fetchWord('keyboard');
    expect(wordData.word).toBe('keyboard');
    expect(wordData.phonetic).toBe('/ˈkiːbɔːd/');
    expect(wordData.audio).toBe(
      'https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3'
    );

    expect(wordData.meanings).toHaveLength(2);
    expect(wordData.sources).toBe('https://en.wiktionary.org/wiki/keyboard');
  });
});
