import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';
import Copyable from './Copyable';
import { lightColors } from '@fuel-ui/css';

export const StyledBorder = styled.div`
  border: 4px solid lightgrey;
  border-radius: 5px;
`;

export const ButtonSpinner = () => (
  <CircularProgress
    style={{
      margin: '2px',
      height: '14px',
      width: '14px',
      color: lightColors.green10,
    }}
  />
);

export const CopyableHex = ({ hex }: { hex: string }) => {
  const formattedHex = hex.slice(0, 6) + '...' + hex.slice(-4, hex.length);
  return <Copyable value={hex} label={formattedHex} />;
};
