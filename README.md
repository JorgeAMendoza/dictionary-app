# Dictionary App

<div align="center"><img src="./showcase-desktop.gif" width=700 alt="gif of the application being used"></div>

Design, assets, and requirements provided by [FrontEndMentors](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL).

The requirement of the project is to create a single-page web application that allows users to search for words and recieve information such as:

- Definition
- Examples
- Synonyms/Antonyms
- Source of information

The [Free Dictionary API](https://dictionaryapi.dev/) was used to provide the data for the application.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Features](#features)
- [Conclusions](#conclusions)

## Technologies Used

This application was bootstrapped with [Vite](https://vitejs.dev/guide/) using the the React/Typescript template. This project is linted and formatted with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/).

Main technologies used:

- [React](https://reactjs.org/), library/framework for building user interfaces.
- [Typescript](https://www.typescriptlang.org/), a superset of Javascript that adds static typing.
- [Styled Components](https://styled-components.com/), a CSS-in-JS library for styling React components.
- [Cypress](https://www.cypress.io/), an end-to-end testing framework.
- [SWR](https://swr.vercel.app/), a React library for making fetch request and handling the state of the request.

Other libraries include [React Hook Form](https://react-hook-form.com/) for handling form state and validation and [Axios](https://axios-http.com/) for making HTTP requests.

## Installation

Please follow the instructions below to install and run the application locally:

1. Clone the repository to your machine.
2. `cd` into the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npm run dev` to start the development server.
5. Open `localhost:3000` in your browser to view the application.

To run intergration test, either run `npm run cypress:open` to open the Cypress UI, or `npm run cypress:run` to run the tests in the terminal.

## Features

This section will cover the features of the application and how they were implemented.

### Fetching from the API

The `wordFetch` is the function responsible for contacting the API and getting information with the help of the _axios_ library. In a way this is the heart of the application, simply grabbing the data provided by the API and returning to the SWR was not sufficient for the following reasons:

1. Some results returned multiple "word" properties, meaning that even though it was the same word, the result returned two different sets of data.
2. Some results returned multiple instances of the "synonym" and "antyonym", causing the react "key" errors.

The solution to this was to restructure the data in a way that that the react components can handle. The code-block below shows a part of the function which handles putting multiple instances of the "word" property into one dataset.

```typescript
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
```

The first section of the function will iterate over the first data result given to us, in this case _word_. An synonym and antonym array is created so we can apply a unique ID to each of those words to avoid the react _key_ error. If the part of speech (noun/verb/adjective) has already been stored, then the current `meaning` data is pushed and spread into the already existing `meanings` array. If the part of speech has not yet been stored, then the current data is pushed directly into the meanings array. The `foudnMeanings` array is used to keep track of the part of speech that has already been stored.

```typescript
const wordInformation = {
  word: data[0].word,
  phonetic: data[0].phonetic,
  audio: grabAudio(data[0].phonetics),
  sources: data[0].sourceUrls,
  meanings,
};

if (data.length === 1) return wordInformation;

const extraWords = data.slice(1);

// holding extra data
const extraMeanings: MeaningsAPI[] = [];
```

Next, the `wordInformation` object is created and returned if there is only one word/result in the data array. If there is more data to handle, then these extra words are sliced into the new array `extraWords` and the `extraMeanings` array is created to hold the extra data that is going to be structured like in the previous code-block.

```typescript
for (const meaning of extraMeanings) {
  const wordIndex = wordInformation.meanings.findIndex(
    (word) => meaning.partOfSpeech === word.partOfSpeech
  );
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
```

The code-block above works similarly to the inital word structure loop, here we first try to find the index where a part of speech already exists in the `wordInformation` array. If it does exist, then the data is pushed and spread into the already existing data. If it does not exist, the the data is pushed direclty into the `wordInformation` array in the `meanings` property.

At the end of the function we return the `wordInformation` object, and our SWR hook will return the data to the [WordDisplay](./src/components/WordDisplay/WordDisplay.styled.tsx) component.

### SWR & Display

```typescript
const WordSearch = () => {
  const [word, setWord] = useState('keyboard');
  const { data, error, isLoading } = useSWR<WordInformation, Error>(
    word,
    fetchWord,
    {
      revalidateOnReconnect: false,
      revalidateOnFocus: false,
      errorRetryCount: 0,
    }
  );

  return (
    <main>
      <SearchBar setWord={setWord} />

      {isLoading ? <Loading /> : null}
      {error ? (
        <ErrorMessage
          errorTitle={error.message}
          errorCause={error.cause as string}
        />
      ) : null}
      {data ? <WordDisplay wordData={data} /> : null}
    </main>
  );
};

export default memo(WordSearch);
```

The `WordSearch` component contains the `useSWR` hook to call the `wordFetch` function and give us the state values to handle instances of loading, errors, and successfull fetches. The [`SearchBar`](./src/components/SearchBar/SearchBar.tsx) component is used to update the `word` state value, it takes in the React.Dispatch function to change `word` and contains a simple form to call the React.Dispatch function on submission. A simple [`Loading`](./src/components/Loading/Loading.tsx) component is rendered while in a loading state, the `WordDisplay` component is rendered on a succesfull search, and the [`ErrorMessage`](./src/components/ErrorMessage/ErrorMessage.tsx) component is rendered on an error.

### Testing

Intergration testing is implemented using Cypress, mock data is used to test application fetch request instead of making a call to the API. One thing I wanted to start doing is to create helper methods in Cypress to making testing more efficient.

#### Cypress Helper Methods

```typescript
Cypress.Commands.add('searchWord', (word: string) => {
  if (!word) {
    cy.get('[data-cy="searchBar"]').clear();
    cy.get('[data-cy="searchWordButton"]').click();
    return;
  }
  cy.get('[data-cy="searchBar"]').clear().type(word);
  cy.get('[data-cy="searchWordButton"]').click();
});

export {};
```

In the example above, the `searchWord` helper method is created to input the argument into the search bar and submit the request. If no word is passed the search bar is cleared and request is submitted to simulate an "empty search" error.

#### Mock Data

```typescript
describe('searching for word', () => {
  beforeEach(() => {
    cy.intercept('https://api.dictionaryapi.dev/api/v2/entries/en/software', {
      statusCode: 200,
      fixture: 'software.json',
    });
    cy.intercept('https://api.dictionaryapi.dev/api/v2/entries/en/asdf', {
      statusCode: 400,
      fixture: 'asdf.json',
    });
    cy.intercept('https://api.dictionaryapi.dev/api/v2/entries/en/pussy', {
      statusCode: 200,
      fixture: 'word.json',
    });
```

In the block above in the [word search test file](./cypress/e2e/word-search.cy.ts), every test has an `cy.intercept` call to mock the fetch request to the API. Each fixture can be found in the [fixtures folder](./cypress/fixtures).

## Conclusions

Overall this project did not pose too much trouble and allowed me to brush up on my testing and use of Styled Components. One thing I would like to add/re-implmement in the future is component testing, though Intergration testing does usually cover most testing cases, I believe component testing is as important as well.

If you have any questions please or feedback please feel free to contact me at [jorgemendozadevii@gmail.com](mailto:jorgemendozadevii@gmail.com)
