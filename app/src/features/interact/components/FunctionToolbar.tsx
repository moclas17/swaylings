import { CallButton } from './CallButton';
import FormGroup from '@mui/material/FormGroup';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import DryrunSwitch from './DryrunSwitch';
import { CallableParamValue } from './FunctionParameters';

interface FunctionToolbarProps {
  contractId: string;
  functionName: string;
  parameters: CallableParamValue[];
  setResponse: (response: string | Error) => void;
  updateLog: (entry: string) => void;
}

function FunctionToolbar({
  contractId,
  functionName,
  parameters,
  setResponse,
  updateLog,
}: FunctionToolbarProps) {
  const [dryrun, setDryrun] = React.useState(true);

  const title = parameters.length ? 'Parameters' : 'No Parameters';

  return (
    <Toolbar style={{ padding: '0 2px 0', justifyContent: 'space-between' }}>
      <div style={{ float: 'left' }}>{title}</div>
      <FormGroup
        style={{
          marginLeft: '15px',
          marginBottom: '5px',
          float: 'right',
          flexDirection: 'row',
        }}>
        <DryrunSwitch dryrun={dryrun} onChange={() => setDryrun(!dryrun)} />
        <div style={{ float: 'left' }}>
          <CallButton
            contractId={contractId}
            functionName={functionName}
            parameters={parameters}
            callType={dryrun ? 'dryrun' : 'call'}
            setResponse={setResponse}
            updateLog={updateLog}
          />
        </div>
      </FormGroup>
    </Toolbar>
  );
}

export default FunctionToolbar;
