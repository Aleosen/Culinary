
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder'
import Image from '@tiptap/extension-image'
import { FaBold, FaItalic, FaAlignLeft, FaAlignCenter, FaAlignRight } from 'react-icons/fa';
import './TipTapRedactor.css'
import React, { useState } from 'react'

export default function TipTapRedactor() {
  const [imgMenu, setImgMenu] = useState(false)
    const editor = useEditor({
        extensions: [
          StarterKit.configure({
            heading: {
              levels: [1, 2, 3],
            }
          }),
          TextAlign.configure({
            types: ['heading', 'paragraph'],
          }),
          Placeholder.configure({
            placeholder: 'Начните вводить текст...',
            emptyEditorClass: 'is-editor-empty',
          }),
          Image.configure({
            HTMLAttributes: {
              class: 'editor-image',
              loading: 'lazy',
              decoding: 'async'
            },
            allowBase64: true // Разрешить вставку base64
          }),
        ],
        content: "",
      });

      const addImage = () => {
        const url = window.prompt('Введите URL изображения');
        if (url) {
          editor.chain().focus()
            .setImage({ src: url })
            .run();
        }
      };

      const handleImageUpload = (e) => {
        const file = e.target.files[0];
        
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            editor.chain().focus()
              .setImage({ src: e.target.result })
              .run();
          };
          reader.readAsDataURL(file);
        }
      };

      if (!editor) return null;
  return (
        <div className="editor">
          <div className="toolbar flex items-center mb-2">
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

            <button
              onClick={() => editor.chain().focus().setTextAlign("center").run()}
              className={editor.isActive({ textAlign: "center" }) ? "active" : ""}
            >
              <FaAlignCenter size={18} />
            </button>

            <button
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
              className={editor.isActive({ textAlign: "right" }) ? "active" : ""}
            >
              <FaAlignRight size={18} />
            </button>

            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              className={editor?.isActive('heading', { level: 1 }) ? "active" : ""}
            >
              <span className='text-[18px]'>H1</span>
            </button>
            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={editor?.isActive('heading', { level: 2 }) ? "active" : ""}
            >
              <span className='text-[18px]'>H2</span>
            </button>
            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              className={editor?.isActive('heading', { level: 3 }) ? "active" : ""}
            >
              <span className='text-[18px]'>H3</span>
            </button>

            <button onClick={()=>setImgMenu(!imgMenu)}>📷</button>

            { imgMenu && <div className="">
            <button onClick={addImage}>
              <span className='text-[18px]'>URL</span>
            </button>

            <label className="upload-button">
              📁 Загрузить
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </label>
            </div>
          }
          </div>
          <EditorContent editor={editor} />
        </div>
  )
}
