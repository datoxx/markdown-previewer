import { useState } from 'react';
import { FaFreeCodeCamp } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import './App.css';




function App() {
  const [text, setText] = useState( `
  # Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code,  between 2 backticks.


You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-_g6ZmQN-QIGkI-TrTQFJSptKqK8OoUpKylBhcJce8xycEMHOBdgnD3S7Ta8LEe5bu0&usqp=CAU)
  `);



  return (
    <div className="App">
      <div className="wraper">
          <h1>Markdown Previewer</h1> 
        <div className="editor-div">
          <h4>Editor <FaFreeCodeCamp  style = { {color: "white", fontSize: "1.5em"} } /></h4> 
          <textarea id="editor"  value={text}  onChange={(e) => setText(e.target.value)} name="editor" /> 
        </div>
        <div className="preview-div">
             <h4>Preview <FaFreeCodeCamp style = { {color: "white", fontSize: "1.5em"} } /></h4> 
             <ReactMarkdown  children={text} id="preview" />
        </div>
      </div>
    </div>
  );
}

export default App;
