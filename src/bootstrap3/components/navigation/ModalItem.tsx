import * as React from 'react';
import { Button, MenuItem, Modal, NavItem } from 'react-bootstrap';
import { ILink } from './';
import './ModalItem.css';

interface IProps {
  def: ILink;
  eventKey?: string;
  where: string;
}

interface IState {
  show: boolean;
}

export const MENU = 'modalMenuItem';
export const NAV = 'modalNavItem';

export default class ModalItem extends React.Component<IProps, IState> {

  public constructor(props: any, context: any) {
    super(props, context);

    this.state = {
      show: false
    }

    this.Item = this.Item.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.ifModalTitle = this.ifModalTitle.bind(this);
    this.ifModalFooter = this.ifModalFooter.bind(this);
    this.ifCloseButton = this.ifCloseButton.bind(this);
  }

  public handleClose() {
    this.setState({ show: false });
  }

  public handleShow() {
    this.setState({ show: true });
  }

  public render() {
    const { children, def, where } = this.props;
    const { modalDef } = def;
    return [
      <this.Item key={0} where={where}>
        { children }
      </this.Item>,
      <Modal
        key={1}
        show={this.state.show}
        onHide={this.handleClose}
      >
        <Modal.Header closeButton={true}>
          <this.ifModalTitle def={modalDef} />
        </Modal.Header>
        <Modal.Body>
          { modalDef && <modalDef.getContent /> }
        </Modal.Body>
        <this.ifModalFooter def={modalDef} />
      </Modal>
    ];
  } // render() END

  /**
   * References the right component, depending on where the link is to be inserted.
   *
   * @param props 
   */
  private Item(props: any) {
    const { children, where, eventKey } = props;
    switch (where) {

    case NAV:
      return (
        <NavItem key={0} onClick={this.handleShow} className="click-effect">
          { children }
        </NavItem>
      );

    case MENU:
      return (
        <MenuItem key={0} eventKey={eventKey} onClick={this.handleShow}>
          { children }
        </MenuItem>
      );

    default:
        return ( null );
    }

  }

  private ifModalTitle(props: any) {
    const { def, ...other } = props;
    if (!def || !def.title) {
      return ( null );
    }
    return <Modal.Title {...other}>{def.title}</Modal.Title>;
  } // ifModalTitle() END

  private ifModalFooter(props: any) {
    const { def } = props;
    if ((!def || !def.callback || !def.showCloseButton)) {
      return ( null );
    }
    return (
      <Modal.Footer>
        <Button onClick={def.callback} bsStyle={def.closeButtonColor || 'primary'}>
          { def.submitButtonValue || 'Save changes' }
        </Button>
        <this.ifCloseButton def={def} />
      </Modal.Footer>
    );
  } // ifModalFooter() END

  private ifCloseButton(props: any) {
    const { def } = props;
    if (!def || !def.showCloseButton) {
      return ( null );
    }
    return (
      <Button onClick={this.handleClose}>Close</Button>
    );
  } // ifCloseButton() END

} // class END