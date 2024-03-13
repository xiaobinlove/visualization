import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
export const Tiptap = () => {
  const editorRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
    }
  }
  const onBlur = () => {
    console.log('onBlur')
  }
  const onFocus = () => {
    console.log('onFocus')
  }
  return (
    <>
      <Editor
        tinymceScriptSrc="/tinymce/tinymce.min.js"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        onBlur={onBlur}
        onFocus={onFocus}
        init={{
          height: 500,
          menubar: false,
          promotion: false,
          branding: false,
          language: 'zh-Hans',
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'preview'
            // 'help',
            // 'wordcount'
          ],
          inline: true,
          toolbar: 'blocks | ' + 'bold italic forecolor | alignleft aligncenter ' + 'alignright alignjustify' + 'removeformat | link image',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  )
}

export default Tiptap
