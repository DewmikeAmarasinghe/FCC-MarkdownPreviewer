import { useState } from 'react'
import './App.scss'
import ReactMarkdown from "react-markdown"
import '@fortawesome/fontawesome-free/css/all.css';
import Header from "./components/Header/header.tsx"
import defaultMarkdown from './components/Markdown/defaultMarkdown.ts';

interface EditorProps {
  str: string,
  isExpanded: boolean;
  toggleExpand: () => void;
  markdown: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
interface PreviewerProps {
  str: string,
  isExpanded: boolean;
  toggleExpand: () => void;
  markdown: string;
}

const Editor = ({ str, isExpanded, toggleExpand, markdown, handleChange }: EditorProps) => {
  return (
    <div className="Editor">
      <Header str={str} isExpanded={isExpanded} toggleExpand={toggleExpand}/>
      <textarea id='editor' onChange={handleChange} value={markdown}></textarea>
    </div>
  )
}

const Previewer = ({ str, isExpanded, toggleExpand, markdown }: PreviewerProps) => {
  return (
    <div className="Previewer">
      <Header str={str} isExpanded={isExpanded} toggleExpand={toggleExpand}/>
      <div id="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  )
}

function App() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [markdown, setMarkdown] = useState<string>(defaultMarkdown)

  const toggleExpand = () => {
    setIsExpanded((prevState) => !prevState)
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value)
  }

  return (
    <div className='container'>
      <Editor 
        str='Editor' 
        isExpanded={isExpanded} 
        toggleExpand={toggleExpand} 
        markdown={markdown}
        handleChange={handleChange}
      />
      <Previewer 
        str='Previewer' 
        isExpanded={isExpanded} 
        toggleExpand={toggleExpand}
        markdown={markdown}
      />
    </div>
  )
}

export default App