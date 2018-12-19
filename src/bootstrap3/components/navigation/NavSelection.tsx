import * as React from 'react';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { addClass, removeClass } from 'src/bootstrap3/common';
import Icon from '../Icon';
import { INavLink } from './';
import { MENU, NAV } from './ModalItem';
import ModalItem from './ModalItem';

interface IProps {
  links?: INavLink[],
  linksRight?: INavLink[]
}

export default class NavSelection extends React.Component<IProps> {

  public componentDidMount() {
    const collection = document.getElementsByClassName('click-effect');
    const links = [].slice.call(collection);
    for (const l of links) {
      l.onmousedown = function() {
        this.className = addClass(this.className, ['active']);
      }
      l.onmouseup = function() {
        this.className = removeClass(this.className, ['active']);
      }
    }

    // For 'taphold'
    // see: https://stackoverflow.com/questions/6139225/how-to-detect-a-long-touch-pressure-with-javascript-for-android-and-iphone

    /*navLink.mousedown(function() {
      // $('.nav-link').removeClass('active')
      $(this).addClass('active');
    }).mouseup(function() {
      $(this).removeClass('active');
    }).on('taphold', function() {
      $(this).addClass('active');
    })*/
  }

  public render() {
    const { links, linksRight } = this.props;
    const navRightKeyInc = 1000; // helps differentiate links items from linksRight items

    // if Both links and linksRight have items.
    if ((links && links.length > 0) && (linksRight && linksRight.length > 0)) {
      const navItems = getNavItemsJsx(links);
      const navItemsRight = getNavItemsJsx(linksRight, navRightKeyInc);
      return (
        <Navbar.Collapse>
          <Nav>
            { navItems }
          </Nav>
          <Nav pullRight={true}>
            { navItemsRight }
          </Nav>
        </Navbar.Collapse>
      );

      // If only links has items
    } else if ((links && links.length > 0) && (!linksRight || linksRight.length < 1)) {
      const navItems = getNavItemsJsx(links);
      return (
        <Navbar.Collapse>
          <Nav>
            { navItems }
          </Nav>
        </Navbar.Collapse>
      );

      // If only linksRight has items
    } else if ((!links || links.length < 1) && (linksRight && linksRight.length > 0)) {
      const navItemsRight = getNavItemsJsx(linksRight, navRightKeyInc);
      return (
        <Navbar.Collapse>
          <Nav pullRight={true}>
            { navItemsRight }
          </Nav>
        </Navbar.Collapse>
      );
    }

    return ( null );
  } // render() END

} // class NavSelection END

/**
 * Generates JSX.Element children for both links and linksRight.
 *
 * Based on the definition object found in the app state.
 *
 * @param links array of links definition
 * @param inc   increment for differentiating links links from linksRight
 *              links.
 *
 * @see initial-state.ts
 */
function getNavItemsJsx(links: INavLink[], inc = 0) {
  if (links.length < 1) {
    return ( null );
  }
  const linksJsx = [];
  for (let j = 0; j < links.length; j++) {
    const link = links[j];
    switch (link.role) {

    case 'link':
      linksJsx.push(
        <NavItem key={inc+j} eventKey={inc+j} className="click-effect">
          <Icon className={link.icon} />&nbsp;
          { link.text || '' }
        </NavItem>
      );
      break;

    case 'dropdown':
      if (!link.id) {
        throw new Error('Missing dropdown id.');
      }
      const title = dropdownTitleJsx(link, j, inc);
      const menuItems = getMenuItemsJsx(link, inc+j);
      linksJsx.push(
        <NavDropdown key={inc+j} title={title} id={link.id}>
          { menuItems }
        </NavDropdown>
      );
      break;

    case 'dialog':
      linksJsx.push(
        <ModalItem
          key={inc+j}
          eventKey={''+inc+j}
          def={link}
          where={NAV}
        >
          <Icon className={link.icon} />&nbsp;
          { link.text || '' }
        </ModalItem>
      );
      break;

    } // switch END
  
  } // for-loop END

  return linksJsx;
}

function dropdownTitleJsx(link: INavLink, j: number, key = 0) {
  if (link.icon && link.text && link.text.length > 0) {
    return [
      <Icon key={key+j} className={link.icon} />,
      ' ',
      link.text
    ];
  } else if (link.icon && !link.text) {
    return <Icon key={key+j} className={link.icon} />;
  }
  return link.text;
}

function getMenuItemsJsx(dropdown: INavLink, eventKey: number, key = 0) {
  const menuItems = dropdown.links;
  if (!menuItems) {
    throw new Error('Dropdown "'+dropdown.text+'" has no links.');
  }
  if (menuItems.length < 1) {
    return ( null );
  }
  const linksJsx = [];
  for (let j = 0; j < menuItems.length; j++) {
    const link = menuItems[j];
    switch (link.role) {

    case 'link':
      linksJsx.push(
        <MenuItem key={key+j} eventKey={`${eventKey}.${key+j}`}>
          <Icon className={link.icon} />&nbsp;
          { link.text || '' }
        </MenuItem>
      );
      break;

    case 'dialog':
      const eKey = getMenuItemEventKey(eventKey, j+1);
      linksJsx.push(
        <ModalItem
          key={key+j}
          eventKey={eKey}
          def={link}
          where={MENU}
        >
          <Icon className={link.icon} />&nbsp;
          { link.text }
        </ModalItem>
      );
      break;

    } // switch END

  } // for-loop END

  return linksJsx;
}

function getMenuItemEventKey(eventKey: number, key = 0) {
  if (key > 0) {
    return eventKey + '.' + key;
  }
  return ''+eventKey;
} // getEventKey() END