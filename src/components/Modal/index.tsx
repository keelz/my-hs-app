import * as React from 'react';
import * as classnames from 'classnames';
import Modal from '@material-ui/core/Modal';
import { IComponentProps } from '../../common/models/app.model';
import { composeClassname } from '../../common/utils';

interface ISimpleModalProps extends IComponentProps {
  open: boolean;
  onCloseCallback?: () => void;
  render?: () => JSX.Element;
}

const SimpleModal: React.SFC<ISimpleModalProps> = props =>
  <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    className="flex items-center justify-center"
    open={props.open}
    onClose={props.onCloseCallback}>
    <div
      className={composeClassname(classnames([
        'App-modal-container',
        'flex',
        'items-center']))(props.className)}>
      {props.render && props.render()}
    </div>
  </Modal>;

export default SimpleModal;
