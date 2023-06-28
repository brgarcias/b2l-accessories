import { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react';

type SelectProps = {
  value: any;
  name: string;
  required: boolean;
  disabled: boolean;
  error?: boolean;
  helperText?: string;
  onChangeHandler: ChangeEventHandler<HTMLSelectElement>;
  onFocusHandler: FocusEventHandler;
  onBlurHandler: FocusEventHandler<HTMLSelectElement>;
  children: ReactNode;
};

export default function SelectControl({
  value,
  name,
  required,
  onChangeHandler,
  disabled,
  onFocusHandler,
  onBlurHandler,
  error,
  helperText,
  children,
}: SelectProps) {
  return (
    <div>
      <select
        value={value}
        name={name}
        disabled={disabled}
        required={required}
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      >
        {children}
      </select>
      <HelperText error={error} helperText={helperText} />
    </div>
  );
}

SelectControl.defaultProps = {
  error: false,
  helperText: null,
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
