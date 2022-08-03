import { useData } from "./Context";

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
    const data = useData();

    const checkItem = async (id) => {
        const response = await fetch('http://localhost:8000/'+id);
        const json = await response.json();
        data.setReload(data.reload += 1);
    }

    return (
    <li className="list-group-item d-flex align-items-center">
        <a onClick={ () => checkItem(props.id) } className="text-center" style={styles.checked}><i className="fa-solid fa-check"></i></a> <span>{props.text}</span>
    </li>
    )
}

export default Item;