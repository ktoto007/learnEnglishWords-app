import React from 'react';
import TextField from '@mui/material/TextField';
import {Table, Th, Td, Head, Wrapper } from './WordsList.styled';

export default function WordsList({ words, deleteWord, onFilterChange }) {
  return (
    <Wrapper>
      <TextField
        onChange={onFilterChange}
        name="enWord"
        label="Search words"
        variant="standard"
      />
      <Table>
        <Head>
          <tr>
            <Th>
              <input type="checkbox"></input> All
            </Th>
            <Th>Number</Th>
            <Th>English words</Th>
            <Th>Ukrainian translate</Th>
            <Th>Actions</Th>
          </tr>
        </Head>
        <tbody>
          {words.map(({ id, uaWord, enWord }, index) => 
            (<tr key={id}>
              <Td>
                <input type="checkbox"></input>
              </Td>
              <Td>{index+1}</Td>
              <Td>{enWord}</Td>
              <Td>{uaWord}</Td>
              <Td>
                <button
                  onClick={deleteWord}
                  id={id}
                  type="button"
                  variant="contained"
                >
                  Delete
                </button>
              </Td>
            </tr>)
          )}
        </tbody>
      </Table>
    </Wrapper>
  );
}
