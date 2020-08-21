import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './Cards';

const goodArr = [
  {
    goodsNm: 'good book',
    goodsNo: 1231,
    thumbnail: 'https://i.ytimg.com/vi/IWRym7cNLXY/maxresdefault.jpg'
  },
  {
    goodsNm: 'exquisite cheese',
    goodsNo: 1242,
    thumbnail: 'https://i.ytimg.com/vi/IWRym7cNLXY/maxresdefault.jpg'
  },
  {
    goodsNm: 'tropical fruits',
    goodsNo: 2232,
    thumbnail: 'https://i.ytimg.com/vi/IWRym7cNLXY/maxresdefault.jpg'
  }
]

function App() {
  return (
    <div>

           <Cards goodArr={goodArr}/>

    </div>
  );
}

export default App;
