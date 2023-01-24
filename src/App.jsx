import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { marked } from 'marked'

const defaultMarkup=`
# Hello, World
      
## I am a sub-heading
      
This is HTML **_MARKUP_**

<blockquote>I am a blockquote</blockquote>

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!


Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

<a href="https://github.com/nathan-zucker/markdown-previewer" target="_blank">Check out my GitHub</a>

- thing

**more text!**

![Cat](https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg)

`

function App() {
  const [markup, setMarkup] = useState(defaultMarkup)

  function getMarkdown() {
    const markdown = marked.parse(markup);
    return { __html: markdown }
  }

  return (
    <div className="App">
      <body id="body">
        <div id="markup">
          <h2>HTML Markup</h2>
          <div>
            <textarea id="editor" value={markup} onChange={(event)=>setMarkup(event.target.value)}></textarea>
          </div>
        </div>
        <div id="previewContainer">
          <h2>Code Preview</h2>
          <div id='preview' dangerouslySetInnerHTML={getMarkdown()} />
        </div>
      </body>
    </div>
  )
}

export default App
