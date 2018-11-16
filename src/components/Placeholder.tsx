import * as React from 'react';

// implementation props.
interface PlaceholderProps {
  text: string;
}

// redux props.
interface PlaceholderStateProps {}

// component props.
type Props = PlaceholderProps & PlaceholderStateProps;

const Placeholder: React.SFC<Props> = props =>
  <div>{props.text}</div>;

export default Placeholder;
