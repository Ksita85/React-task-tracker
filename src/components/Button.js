import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <button onClick={onClick}  className='ms-auto btn btn-primary m-2 rounded-circle'>{text} </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.object,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button