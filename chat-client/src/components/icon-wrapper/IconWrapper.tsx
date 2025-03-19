import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './IconWrapper.css';

export interface IconWrapperProps {
    icon: IconDefinition;
    onClickHandler: () => void;
}

const IconWrapper = ({icon, onClickHandler}: IconWrapperProps) => {
    return (
        <div
            role='button'
            aria-label='Choose an emoji'
            className='icon-wrapper'
            onClick={onClickHandler}
        >
            <FontAwesomeIcon icon={icon} className='icon-blue' />
        </div>
    );
}

export default IconWrapper;