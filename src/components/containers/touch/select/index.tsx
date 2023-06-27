import Select from '@mui/base/Select';
import Option from '@mui/base/Option';
import { FocusEventHandler } from 'react';

type SelectProps = {
  value: any;
  name: string;
  disabled: boolean;
  error?: boolean;
  helperText?: string;
  onChangeHandler: (value: any) => void;
  onFocusHandler: FocusEventHandler;
  onBlurHandler: FocusEventHandler<HTMLButtonElement>;
};

export default function SelectControl({
  value,
  name,
  disabled,
  error,
  helperText,
  onChangeHandler,
  onFocusHandler,
  onBlurHandler,
}: SelectProps) {
  return (
    <div>
      <Select
        name={name}
        value={value}
        disabled={disabled}
        onFocus={onFocusHandler}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      >
        <Option value="" defaultChecked disabled hidden>
          Selecione um Assunto
        </Option>
        <Option value="reembolso">Reembolso</Option>
        <Option value="prazos">Prazos</Option>
        <Option value="devolução">Devolução</Option>
        <Option value="outros">Outros</Option>
      </Select>
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
