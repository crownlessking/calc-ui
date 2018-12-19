import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Nav.css';
import NavSelection from './NavSelection';

export interface IModal {
  closeButtonColor?: string;
  closeButtonValue?: string;
  getContent: any;
  showCloseButton?: boolean;
  callback?: ()=>void;
  submitButtonValue?: string;
  title?: string;
}

export interface ILink {
  callback?: ()=>void;
  href?: string;
  icon?: string | undefined;
  modalDef?: IModal;
  role: string;
  text?: string;
}

export interface INavLink extends ILink {
  id: string;
  links: ILink[]
}

interface IProps {
  appName: string;
  links: INavLink[],
  linksRight: INavLink[]
}

const mapStateToProps = (state: any) => ({
  appName: state.nav.appName,
  links: state.nav.links,
  linksRight: state.nav.linksRight
});

class Nav extends React.Component<IProps> {

  public render() {
    const { appName, links, linksRight } = this.props;
    return (
      <Navbar inverse={true} collapseOnSelect={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home"><strong>{ appName }</strong></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <NavSelection links={links} linksRight={linksRight} />
      </Navbar>
    );
  }

}

export default connect(mapStateToProps)(Nav);