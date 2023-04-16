import React from 'react'
import { render } from 'react-dom'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/theme-pastel_on_dark'
import 'ace-builds/src-noconflict/ext-language_tools'

// function onChange(newValue) {
//   console.log("change", newValue);
// }

 const Editor = ({value}: {value: string}) => {
  return (
    <AceEditor
      height='200px'
      mode="json"
      theme="pastel_on_dark"
      value={value}
      wrapEnabled={true}
      readOnly={true}
      editorProps={{ $blockScrolling: true, useWorker: false  }}
    />
  )
}

export default Editor