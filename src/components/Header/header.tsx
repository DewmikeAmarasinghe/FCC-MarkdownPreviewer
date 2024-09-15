import './header.scss';

interface HeaderProps {
  str: string,
  isExpanded: boolean;
  toggleExpand: () => void;
}

const Header = ({ str,isExpanded,toggleExpand }: HeaderProps) => {
  return (
    <div className='toolbar'>
      <i className="fa-brands fa-free-code-camp symbol" />
        <span className="title">{ str }</span>
      <i 
        className={`arrow fa-solid ${isExpanded ? 'fa-compress' : 'fa-expand'}`}
        onClick={() => toggleExpand()}
      />
    </div>
  )
}

export default Header;