import Button from './Button'

const Header = ({ title }) => {

    return (
        <header>
            <h1>{title}</h1>
            <Button text='Add' />
        </header>
    )
}

Header.defaultProps = {
    title: 'Title Tracker',
}

export default Header