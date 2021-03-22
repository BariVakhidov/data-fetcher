import React from 'react';
import { render } from 'react-dom';
import styles from './styles.module.scss';

const App = () => <div className={styles.test}>Hello world</div>;

render(App(), document.getElementById('root'));
