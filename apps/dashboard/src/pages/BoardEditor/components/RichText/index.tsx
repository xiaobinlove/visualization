import { useRef, FC } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useStore, useSelector } from '@/store'
import { useDoubleClick } from '@/hooks'
import './index.less'
const prefix = 'hd-rich-text'
type Props = {
  widgetId: string
}
export const RichText: FC<Props> = ({ widgetId }) => {
  const { isDraggableInEdit, setDraggableInEdit, updateWidget, widgets } = useStore(
    useSelector(['isDraggableInEdit', 'setDraggableInEdit', 'updateWidget', 'widgets'])
  )
  const curWidget = widgets[widgetId]
  const editorRef = useRef(null)
  const contentRef = useRef(null)
  useDoubleClick({
    ref: contentRef,
    onDBClick() {
      setDraggableInEdit(false)
    }
  })
  const onBlur = () => {
    setDraggableInEdit(true)
    if (editorRef.current) {
      updateWidget(widgetId, { content: editorRef.current.getContent() })
    }
  }
  const onFocus = () => {
    setDraggableInEdit(false)
  }

  return (
    <div className={prefix} ref={contentRef}>
      {isDraggableInEdit && (
        <div className={`${prefix}__content-wrapper`}>
          {curWidget.content ? (
            <div className={`${prefix}__content`} dangerouslySetInnerHTML={{ __html: curWidget.content }}></div>
          ) : (
            <div className={`${prefix}__content--tip`}>双击编辑富文本</div>
          )}
        </div>
      )}

      {!isDraggableInEdit && (
        <Editor
          tinymceScriptSrc="/tinymce/tinymce.min.js"
          onInit={(evt, editor) => {
            editor.focus()
            editorRef.current = editor
          }}
          initialValue={curWidget.content}
          onBlur={onBlur}
          onFocus={onFocus}
          init={{
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
              // 'fullscreen',
              'insertdatetime'
              // 'media',
              // 'table',
              // 'preview'
              // 'help',
              // 'wordcount'
            ],
            inline: true,
            toolbar: 'styles ' + 'fontsize bold italic forecolor alignleft aligncenter ' + 'alignright alignjustify' + 'removeformat link image',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:12px }'
          }}
        />
      )}
    </div>
  )
}

export default RichText
