import { Outlet, Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import classNames from 'classnames';
import './navigation.styles.scss';
import chipPng from '../../assets/chip.png';
import slotMachinePng from '../../assets/slot-machine.png';

const Navigation = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(!isToggled);
  };

  const responsiveMenuClasses = classNames({
    bx: true,
    'bx-menu': true,
    'bx-x': isToggled,
  });
  const headerMainLinksClasses = classNames({
    'header-main-links': true,
    open: isToggled,
  });
  return (
    <Fragment>
      <header className="navbar-header">
        <Link to="/" className="header-brand">
          KanonGaming
        </Link>
        <ul className={headerMainLinksClasses}>
          <li>
            <img src={chipPng} alt="Chip" height={36} width={36} />

            <Link to="games">Games</Link>
          </li>
          <li>
            <img
              src={slotMachinePng}
              alt="Slot Machine"
              height={36}
              width={36}
            />

            <Link to="slots">Slots</Link>
          </li>
        </ul>

        <div className="header-user-links">
          <li>
            <Link to="login">Login</Link>
          </li>
          <div
            className={responsiveMenuClasses}
            id="hamburger-menu-icon"
            onClick={toggleMenu}
          ></div>
        </div>
      </header>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
