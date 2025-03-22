
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import { FaBold, FaItalic, FaAlignLeft } from 'react-icons/fa';
import React from 'react'

export default function TipTapRedactor() {
    const editor = useEditor({
        extensions: [
          StarterKit,
          TextAlign.configure({
            types: ['heading', 'paragraph'],
          }),
        ],
        content: "<p>Начните редактирование...</p>",
      });
    
      if (!editor) return null;
  return (
        <div className="editor">
          <div className="toolbar">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "active" : ""}
            >
              <FaBold size={18} />
            </button>
    
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "active" : ""}
            >
              <FaItalic size={18} />
            </button>
    
            <button
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
              className={editor.isActive({ textAlign: "left" }) ? "active" : ""}
            >
              <FaAlignLeft size={18} />
            </button>
          </div>
          <EditorContent editor={editor} />
        </div>
  )
}
