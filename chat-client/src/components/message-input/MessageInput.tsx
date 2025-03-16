import { useState } from 'react';

export interface MessageInputProps {
    onClickHandler: () => void;
}

const MessageInput = ({ onClickHandler }: MessageInputProps) => {
    const [message, setMessage] = useState<string>('');
    const handleOnClick = () => {
        onClickHandler.call(this);
        setMessage('');
    };

    return (
        <div className='message-input'>
            <label htmlFor='message'>Type a message</label>
            <textarea 
                id='message'
                name='message'
                rows={5}
                cols={33}
                value={message}
                onChange={e => setMessage(e.target.value)}>
            </textarea>
            <button className='button' type='button' onClick={handleOnClick}>Send message</button>
        </div>
    )
};

export default MessageInput;