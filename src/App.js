import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Images from './Components/images';
import data from './Components/photos/data.json';
import Header from './Components/header';



class App extends Component {


  state = {
    name: "image",
    program: "clicky",
    data,
    score: 0,
    topScore: 0
  }

  resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
  };

  handleItemClick = id => {
    let correctGuess = false;
    const newData = this.state.data.map(item => {
      const newItem = {...this.state.data};
      // const newData = {...item }
      
        if (newItem.id === id){
          if (!newItem.clicked){
            console.log(newItem.clicked)
            newItem.clicked = true;
            correctGuess = true;          
          };        
        
      }
      return newItem;
    });
    correctGuess
    ? this.correctGuessHandler(newData)
    : this.incorrectGuessHandler(newData);
  }
// newData.forEach(image => { //line 24

shuffleData = data => {
  let i = data.length - 1;
  while (i > 0) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
    i--;
  }
  return data;
} 

componentDidMount() {
  this.setState({ data: this.shuffleData(this.state.data) });
}

handleCorrectGuess = newData => {
  const { topScore, score } = this.state;
  const newScore = score + 1;
  const newTopScore = newScore > topScore ? newScore : topScore;
  this.setState({
    data: this.shuffleData(newData),
    score: newScore,
    topScore: newTopScore
  });
};

handleIncorrectGuess = data => {
  this.setState({
    data: this.resetData(data),
    score: 0
  });
};


  render() {
    return (
      <div className="App">
      <Header logo={logo}/>
      <div className="container">

 
      {this.state.data.map((pics, index, item) => {
        return (
          <Images
            key={index}
            id={item.id}
            source={pics.image} 
            alt={index} 
            doClick={this.handleItemClick} />
        )
      })
      
    }
    </div>



      </div>
    );
  }
}

export default App;
