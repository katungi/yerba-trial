import React, { useCallback, useEffect } from 'react'
import useCodeMirror from '../hooks/use-codemirror';

interface Props {
  initialDoc: string,
  onChange: (doc: string) => void,
}

const Editor: React.FC<Props> = (props) => {
  const { onChange, initialDoc } = props;
  const handleChange = useCallback(
    state => onChange(state.doc.toString()),
    [onChange],
  )

  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange,
  })

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    }
  }, [editorView])
  return <div className='h-full grow-0 shrink-0 basis-2/4' ref={refContainer} />
}

export default Editor