import React, { useEffect, useState, useRef } from "react";

// if you're using solution-1 then uncomment line 4-5
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Editor() {
  // if you're using solution-1 then comment line 8-9
  let editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // if you're using solution-1 then comment line 16-19
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };

    setLoaded(true);
  }, []); // run on mounting

  if (loaded) {
    return (
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          // do something when editor's content changed
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    );
  } else {
    return <h2> Editor is loading </h2>;
  }
}

export default Editor;
