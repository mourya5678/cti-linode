import { NodeBalancer } from '@linode/api-v4/lib/nodebalancers';
import { APIError } from '@linode/api-v4/lib/types';
import * as React from 'react';
import { compose } from 'recompose';
import EnhancedSelect, { Item } from 'src/components/EnhancedSelect/Select';
import RenderGuard, { RenderGuardProps } from 'src/components/RenderGuard';
import { Props as TextFieldProps } from 'src/components/TextField';
import withNodeBalancers from 'src/containers/withNodeBalancers.container';
import {
  WithNodeBalancerActions,
  withNodeBalancerActions,
} from 'src/store/nodeBalancer/nodeBalancer.containers';
import { getErrorStringOrDefault } from 'src/utilities/errorUtils';

interface WithNodeBalancersProps {
  nodeBalancersData: NodeBalancer[];
  nodeBalancersLoading: boolean;
  nodeBalancersError?: APIError[];
  nodeBalancersLastUpdated: number;
}

interface Props {
  generalError?: string;
  nodeBalancerError?: string;
  selectedNodeBalancer: number | null;
  disabled?: boolean;
  region?: string;
  handleChange: (nodeBalancer: NodeBalancer) => void;
  textFieldProps?: TextFieldProps;
}

type CombinedProps = Props & WithNodeBalancersProps & WithNodeBalancerActions;

const nodeBalancersToItems = (nodeBalancers: NodeBalancer[]): Item<number>[] =>
  nodeBalancers.map((thisNodeBalancer) => ({
    value: thisNodeBalancer.id,
    label: thisNodeBalancer.label,
    data: thisNodeBalancer,
  }));

const nodeBalancerFromItems = (
  nodeBalancers: Item<number>[],
  nodeBalancerId: number | null
) => {
  if (!nodeBalancerId) {
    return;
  }
  return nodeBalancers.find(
    (thisNodeBalancer) => thisNodeBalancer.value === nodeBalancerId
  );
};

const NodeBalancerSelect: React.FC<CombinedProps> = (props) => {
  const {
    disabled,
    generalError,
    handleChange,
    nodeBalancerError,
    nodeBalancersError,
    nodeBalancersLoading,
    nodeBalancersLastUpdated,
    nodeBalancersData,
    nodeBalancerActions,
    region,
    selectedNodeBalancer,
  } = props;

  React.useEffect(() => {
    // If NodeBalacers have not yet been requested when this component was mounted,
    // make the API call to get them.
    if (nodeBalancersLastUpdated === 0) {
      nodeBalancerActions.getAllNodeBalancers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nodeBalancer = region
    ? nodeBalancersData.filter(
        (thisNodeBalancer) => thisNodeBalancer.region === region
      )
    : nodeBalancersData;
  const options = nodeBalancersToItems(nodeBalancer);

  const noOptionsMessage =
    !nodeBalancerError && !nodeBalancersLoading && options.length === 0
      ? 'You have no NodeBalancers to choose from'
      : 'No Options';

  return (
    <EnhancedSelect
      label="NodeBalancer"
      placeholder="Select a NodeBalancer"
      value={nodeBalancerFromItems(options, selectedNodeBalancer)}
      options={options}
      disabled={disabled}
      isLoading={nodeBalancersLoading}
      onChange={(selected: Item<number>) => {
        return handleChange(selected.data);
      }}
      errorText={getErrorStringOrDefault(
        generalError || nodeBalancerError || nodeBalancersError || ''
      )}
      isClearable={false}
      textFieldProps={props.textFieldProps}
      noOptionsMessage={() => noOptionsMessage}
    />
  );
};

export default compose<CombinedProps, Props & RenderGuardProps>(
  RenderGuard,
  withNodeBalancerActions,
  withNodeBalancers()
)(NodeBalancerSelect);
