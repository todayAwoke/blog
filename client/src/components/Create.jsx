import React, { useState } from 'react';
import './Create.css';
import axios from 'axios';
const Create = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');
    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('file', file)
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/create',
            formData)
            .then(res => navigate('/login'))
            .catch(err => console.error(err))
    }

    return (
        <div className="container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="text-input" placeholder="Title" />
                    <textarea
                        name="desc"
                        id="desc"
                        cols={30}
                        rows={8}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="textarea-input"
                        placeholder="Description"
                    ></textarea>
                    <div className="file-input-container">
                        <label htmlFor="file-input" className="file-input-label">
                            Upload File
                        </label>
                        <input type="file"
                            value={file}
                            onChange={e => setFile(e.target.files[0])}
                            id="file-input" className="file-input" />
                    </div>
                    <button type='submit'>post</button>
                    {/* <button className="submit-button" type='submit'>Post</button> */}
                </form>
            </div>
        </div>
    );
};

export default Create;