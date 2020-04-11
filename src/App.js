// @flow
import React from 'react';
import { hot } from 'react-hot-loader';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  main: { backgroundColor: 'wheat' },
});

const App = () => {
  return (
    <main className={css(styles.main)}>
      <h1>
        React Starter
        <span role="img" aria-label="rocket ship">
          🚀
        </span>
      </h1>
    </main>
  );
};

export default hot(module)(App);
