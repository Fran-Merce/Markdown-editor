import { createContext } from "react"
import { EditorContext } from "../models/EditorContext"

const defaultEditorContext: EditorContext = {
  markdownText: '',
  setMarkdownText: () => {},
  placeHolder: '',
}

export default createContext(defaultEditorContext)