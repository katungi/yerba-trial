import React from "react";
import { useState, useCallback } from "react";
import Editor from "../components/Editor";
import Preview from "../components/Preview";

export default function Web() {
  const [doc, setDoc] = useState<string>('# Hello, World! now\n')

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])

  return (
    <div className="flex flex-row h-screen bg-background">
      {/* <Sidebar/> */}
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Preview doc={doc} />
    </div>
  );
}
