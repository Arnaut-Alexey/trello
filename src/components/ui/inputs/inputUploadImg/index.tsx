import React, { useEffect, useState } from 'react';

import { InputUploadImgProps } from '../interface';

import styles from './style.module.scss';

export const InputUploadImg: React.FC<InputUploadImgProps> = (props) => {
    const { value, setValue } = props;
    const [previewImg, setPreviewImg] = useState('')

    const uploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        setValue(e.target.files[0])
    }

    useEffect(() => {
        if (value !== undefined) {
            const reader = new FileReader(); 
            reader.readAsDataURL(value)

            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    setPreviewImg(reader.result);
                }
            }
        }
    }, [value])

    return (
        <div className={styles.field}>
            <input
                name='img'
                type="file"
                accept='image/*'
                id='img'
                onChange={(uploadImg)}
            />
            <label htmlFor="img">
                {previewImg ?
                    <div className={styles.field__img}>
                        <img src={previewImg} alt="" />
                    </div>
                    :
                    <div className={styles.field__img}></div>
                }
                <p>Загрузить фото</p>
            </label>
        </div>
    )
}
