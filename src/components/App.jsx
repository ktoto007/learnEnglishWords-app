import Header from "./Header/Header";
import { useState } from "react";
import WordForm from "./WordForm/WordForm";
import WordsList from "./WordsList/WordsList";

export const App = () => {
  const [words, setWords] = useState([]);
  const [filter, setFilter] = useState('');

  const addWord = word => {
    setWords(prevState => [...prevState, word])
  }
  const deleteWord = e => {
    const { id } = e.target;
    setWords(prevState => 
     prevState.filter(word => word.id !== id
      )
    )
  }

  const onFilterChange = e => {
    const { value } = e.target;
    console.log(value);
    setFilter(value)
}

    const handleFilterWords = () => {
      return words.filter(word => { return word.uaWord.toLowerCase().includes(filter.toLowerCase().trim()) || word.enWord.toLowerCase().includes(filter.toLowerCase().trim()) })
    }

  return (
    <div>
      <Header />
      <WordForm addWord={addWord} />
      <WordsList words={ handleFilterWords()} deleteWord={deleteWord} onFilterChange={onFilterChange} />
    </div>
  );
};
