import React, { useState } from 'react';
import Button from './Button.js'
import './UploadModal.css';

function UploadModal({ onClose }) {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles([...files, ...Array.from(event.target.files)]);
  };

  const handleUpload = () => {
    if (files.length > 0) {
      // ここにアップロード処理を追加
      console.log('Uploading:', files);
      // アップロード成功後、モーダルを閉じるなどの処理を追加
      onClose();
    }
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  }

  // ドラッグ＆ドロップのイベントをハンドルする関数
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  // ドラッグオーバー時のデフォルト動作を無効にする
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-icon" onClick={onClose} aria-label="Close">
        <img src='/icons/close-white-icon.png' alt='Close' />
      </button>
        <h3>議事録アップロード</h3>
        <div
          className="upload-area"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <input 
            type="file" 
            id="file-upload" 
            className="file-input" 
            onChange={handleFileChange}
            multiple
          />
          <label htmlFor="file-upload" className="file-label">
            <div className="upload-instructions">
              ファイルをドラッグ＆ドロップしてください
              <br />
              または
              <br />
              <Button
                onClick={() => document.getElementById('file-upload').click()}
                className="select-file-button"
                colorScheme='primary'
                variant='outline'
              >
                ファイルを選択
              </Button>
            </div>
          </label>
        </div>
        {files.length > 0 && (
          <div className='upload-file-list'>
            {files.map((file, index) => (
              <div key={index} className="upload-file-info" title={file.name}>
                <img src='/icons/minutes-black-icon.png' alt='ファイルアイコン' className='minutes-black-icon' />
                <span>{file.name}</span>
                <img
                  src='/icons/delete-black-icon.png'
                  alt='削除アイコン'
                  className='delete-black-icon'
                  onClick={() => handleRemoveFile(index)}
                />
              </div>
            ))}
          </div>
        )}
        <Button
          onClick={handleUpload}
          className="upload-modal-button"
          colorScheme="primary"
          disabled={files.length === 0}
        >
          アップロード
        </Button>
      </div>
    </div>
  );
}

export default UploadModal;
