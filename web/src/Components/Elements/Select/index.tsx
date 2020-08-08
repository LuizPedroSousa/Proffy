import React, { SelectHTMLAttributes } from 'react';

import './style.css';

interface selectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    padrao: string;
    options: Array<{
        value: string,
        label: string,
    }>;
}

const Select: React.FunctionComponent<selectProps> = ({ name, label, options, padrao, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest}  >

                <option value="" disabled  hidden >{padrao}</option>

                {options.map(options => {
                    return <option key={options.value} value={options.value}>{options.label}</option>
                })}
            </ select>
        </div>
    );
}

export default Select;