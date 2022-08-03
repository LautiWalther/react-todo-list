const checkItem = () => {
    console.log('asd');
}

const styles = {
    checked: {
        border: '1px solid #000',
        width: '26px',
        height: '26px',
        borderRadius: '50%',
        backgroundColor: 'teal',
        color: '#fff',
        marginRight: '10px'
    }
}

const Item = (props) => {
    return (
    <li className="list-group-item d-flex align-items-center">
        <a onClick={ checkItem } className="text-center" style={styles.checked}><i className="fa-solid fa-check"></i></a> <span>{props.text}</span>
    </li>
    )
}

export default Item;