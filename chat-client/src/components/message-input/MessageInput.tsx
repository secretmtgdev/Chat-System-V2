import { useRef, useState } from 'react';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';

import './MessageInput.css';
import IconWrapper from '../icon-wrapper/IconWrapper';

export interface MessageInputProps {
    onClickHandler: () => void;
}

const MessageInput = ({ onClickHandler }: MessageInputProps) => {
    const [message, setMessage] = useState<string>('');
    const messageRef = useRef<HTMLDivElement>(null);
    const sendMessage = () => {
        onClickHandler.call(this);
        setMessage('');
        if (messageRef.current) {
            messageRef.current.innerHTML = '';
        }
    };

    // This should be split into its own component
    // For now we'll just stub it out
    const pickEmoji = () => {}

    return (
        <div className='message-input'>
            <div className='message-input-text'>
                <div 
                    className='message-content'
                    aria-label='Message'
                    aria-placeholder='message'
                    contentEditable={true}
                    role='textbox'
                    spellCheck={true}
                    tabIndex={0}
                    data-lexical-editor={true}
                    ref={messageRef}
                >
                    <p dir={'ltr'}>
                        <span data-lexical-text={true}></span>
                    </p>
                </div>
                <IconWrapper icon={faFaceSmile} onClickHandler={pickEmoji} />
            </div>
            <button className='button' type='button' onClick={sendMessage}>Send message</button>
        </div>
    )
};

export default MessageInput;