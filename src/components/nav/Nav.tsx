import './Nav.scss';

const Nav: React.FC = () => {
  const navItemsArr = ['Home', 'Collaborate', 'Services'];

  return (
    <nav className="nav">
      <ul className="nav__list">
        {navItemsArr.map((item, index) => (
          <li className="nav__item" key={item + index}>
            <a className='nav__link' href="#">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;