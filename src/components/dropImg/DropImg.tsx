import React, { useCallback, useState} from 'react'
import { Card } from 'react-bootstrap';
import {useDropzone} from 'react-dropzone'
import { CardUploadImg } from './dropImg.styles';

export const DropImg = () => {
const [imgExists, setImgExists] = useState<string>('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    if (acceptedFiles[0]) {
        const currentImg = URL.createObjectURL(acceptedFiles[0]);
        setImgExists(currentImg);
    }
  }, [])
  const {getRootProps, getInputProps } = useDropzone({onDrop})

  return (
    <div>
        <CardUploadImg
          {...getRootProps()}
        >
        <input {...getInputProps()} />
        {imgExists && <Card.Img variant="top" src={imgExists} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
        </CardUploadImg>
    </div>
  )
}