import { FunctionComponent, ChangeEvent } from 'react';

import { Input } from '@nextui-org/react';

interface InputFieldProps {
    type: string;
    name: string;
    label: string;
    value?: string;
    error: string | undefined;
    formSubmitted: boolean;
    handleChange: {
        (e: ChangeEvent<any>): void;
        <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
            ? void
            : (e: string | ChangeEvent<any>) => void;
    };
    loading?: boolean;
    autocomplete?: string;
}

const InputField: FunctionComponent<InputFieldProps> =
    ({ type, name, label, value, error, formSubmitted, handleChange, loading, autocomplete }) => {
        return (
            <div>
                <Input
                    type={type}
                    name={name}
                    label={label}
                    value={value}
                    disabled={loading}
                    autoComplete={autocomplete}
                    variant='bordered'
                    onChange={handleChange}
                    errorMessage={formSubmitted && error}
                    color={!formSubmitted ? 'default' : (error ? 'danger' : 'success')}
                    data-invalid={error && 'invalid'}
                    size='sm'
                />
            </div>
        );
    }

export default InputField;
