import { useState } from "react";
import { useData } from "./Context";


const Input = () => {
    const data = useData();
    const [text, setText] = useState('');

    const uploadTask = async () => {
        
        const response = await fetch('http://localhost:8000', {
            'method': 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify({
                text: text
            })
        })
        const json = await response.json();

        setText('');

        data.setReload(data.reload += 1);
    }
    return (
        <>
            <li className="list-group-item d-flex align-items-center">
                <input className="form-control" type="text" placeholder="New Task" aria-label="New Task" style={{'marginRight': '10px'}} onChange={i => setText(i.target.value) } value={text} />
                <a onClick={ uploadTask } className="btn btn-info text-white"><i class="fa-solid fa-add"></i></a>
            </li>
        </>
    )
}
export default Input;