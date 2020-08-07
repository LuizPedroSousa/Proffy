import React, {SelectHTMLAttributes} from 'react';

interface selectProps extends SelectHTMLAttributes<HTMLSelectElement>{

}

const Select: React.FunctionComponent<selectProps> = (props, ...rest) => {
    return (
        <div></div>
    );
}

export default Select;