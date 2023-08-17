import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { darkColors, lightColors } from '@fuel-ui/css';

export interface CompileButtonProps {
  onClick: () => void;
  text: string;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  tooltip?: string;
  style?: React.CSSProperties;
}
function CompileButton({
  onClick,
  text,
  endIcon,
  disabled,
  tooltip,
  style,
}: CompileButtonProps) {
  return (
    <Tooltip title={tooltip}>
      <span>
        <Button
          sx={{
            ...style,
            height: '40px',
            background: lightColors.green7,
            borderColor: darkColors.gray6,
            color: darkColors.gray6,
            ':hover': {
              color: darkColors.gray6,
              background: lightColors.green10,
              borderColor: darkColors.gray6,
            },
            ':disabled': {
              background: lightColors.green4,
            },
          }}
          variant='outlined'
          onClick={onClick}
          disabled={disabled}
          endIcon={endIcon}>
          {text}
        </Button>
      </span>
    </Tooltip>
  );
}

export default CompileButton;
