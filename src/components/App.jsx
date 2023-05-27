import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { Quiz } from 'pages/Quiz';

export const App = () => {
  const [words, setWords] = useLocalStorage('words', []);
  const [filter, setFilter] = useState('');

  const addWord = word => {
    setWords(prevState => [...prevState, word]);
  };
  const deleteWord = e => {
    const { id } = e.target;
    setWords(prevState => prevState.filter(word => word.id !== id));
  };

  const onFilterChange = e => {
    const { value } = e.target;
    console.log(value);
    setFilter(value);
  };

  const toggleChecked = id => {
    setWords(prevState =>
      prevState.map(word => {
        if (word.id === id) {
          return { ...word, checked: !word.checked };
        }
        return word;
      })
    );
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Home
                words={words}
                filter={filter}
                addWord={addWord}
                deleteWord={deleteWord}
                onFilterChange={onFilterChange}
                toggleChecked={toggleChecked}
              />
            }
          />
          <Route path="/quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </div>
  );
};
