const Header = ({count, setCount}) => {
    return <h2 onClick={() => setCount(count+1)}>Header Component: {count}</h2>
}

export default Header