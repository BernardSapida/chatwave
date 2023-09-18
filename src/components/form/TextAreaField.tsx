import { FunctionComponent, ChangeEvent } from 'react';

import { Textarea } from '@nextui-org/react';

import styles from '@/public/styles/contact/contactForm';

interface TextAreaFieldProps {
    name: string;
    label: string;
    value: string | undefined;
    error: string | undefined;
    isSubmitted: boolean;
    handleChange: {
        (e: ChangeEvent<any>): void;
        <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
            ? void
            : (e: string | ChangeEvent<any>) => void;
    };
    loading: boolean;
}

const TextAreaField: FunctionComponent<TextAreaFieldProps> =
    ({ name, label, value, error, isSubmitted, handleChange, loading }) => {

        return (
            <div className={styles.container}>
                <Textarea
                    name={name}
                    classNames={styles.textarea}
                    label={label}
                    value={value}
                    disabled={loading}
                    variant='bordered'
                    minRows={5}
                    onChange={handleChange}
                    errorMessage={isSubmitted && error}
                    color={!isSubmitted ? 'default' : (error ? 'danger' : 'success')}
                    data-invalid={error && 'invalid'}
                />
            </div>
        );
    }

export default TextAreaField;