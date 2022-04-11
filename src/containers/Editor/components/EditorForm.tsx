import { Editor } from "@toast-ui/react-editor";
import React, { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

const MyComponent = () => {
  const editRef = useRef();

  return (
    <Editor
      placeholder="내용을 입력해주세요"
      previewStyle="vertical"
      height="800px"
      initialEditType="markdown"
      useCommandShortcut={true}
      // ref={editRef}
    />
  );
};
export default MyComponent;