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
  rows?: any;
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
  rows,
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
        rows={rows}
      />
      <HelperText error={error} helperText={helperText} />
    </div>
  );
}

InputControl.defaultProps = {
  error: false,
  helperText: null,
  multiline: false,
};

type HelperTextProps = {
  error: boolean;
  helperText: string;
};

const HelperText = ({ error, helperText }: HelperTextProps) => {
  return error ? (
    <span
      style={{
        color: '#e69a93',
        fontSize: '0.8rem',
        paddingLeft: '10px',
        transition: '.3s',
        textTransform: 'none',
      }}
    >
      {helperText}
    </span>
  ) : null;
};
