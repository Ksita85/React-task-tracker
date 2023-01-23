import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

  return (
      <div>
        <header className='header m-4 d-flex text-light p-2'>
          <h1>{title}</h1>
        <Button color='#52b3f3' text={<span>{showAdd ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-plus"></i>}</span>} onClick={onAdd}/>
          </header>
      </div>
  )
}

Header.defaultProps = {
  title:'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
