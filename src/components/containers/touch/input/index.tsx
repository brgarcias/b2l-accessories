import Input from '@mui/base/Input';
import { ChangeEventHandler, FocusEventHandler } from 'react';

type InputProps = {
  value: any;
  name: string;
  placeholder: string;
  required: boolean;
  type:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  disabled: boolean;
  error?: boolean;
  helperText?: string;
  multiline?: any;
  minRows?: any;
  maxRows?: any;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onFocusHandler: FocusEventHandler;
  onBlurHandler: FocusEventHandler<HTMLInputElement>;
};

export default function InputControl({
  value,
  name,
  placeholder,
  required,
  type,
  onChangeHandler,
  disabled,
  onFocusHandler,
  onBlurHandler,
  error,
  helperText,
  multiline,
  minRows,
  maxRows,
}: InputProps) {
  return (
    <div>
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        required={required}
        onChange={onChangeHandler}
        disabled={disabled}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        multiline={multiline}
        minRows={minRows}
        maxRows={maxRows}
        rows={minRows}
      />
      <HelperText error={error} helperText={helperText} />
    </div>
  );
}

InputControl.defaultProps = {
  error: false,
  helperText: null,
  multiline: false,
  minRows: 1,
  maxRows: 1,
};

type HelperTextProps = {
  error: boolean;
  helperText: string;
};

const HelperText = ({ error, helperText }: HelperTextProps) => {
  return error ? (
    <p
      style={{
        color: '#e69a93',
        fontSize: '0.8rem',
        paddingLeft: '10px',
        transition: 'opacity 1s ease-in',
        opacity: 1,
        textTransform: 'none',
      }}
    >
      {helperText}
    </p>
  ) : null;
};
