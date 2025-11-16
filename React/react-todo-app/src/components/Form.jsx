import { useTodo } from "../context/TodoContext";

export default function Form() {
    const { handleSubmit, value, setValue } = useTodo();

    const handleChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value)
    }

    return <div>
        <form style={{display: 'flex'}} onSubmit={handleSubmit}>
            <input 
                type='text'
                name='value'
                style={{flex: '10', padding: '5px'}}
                placeholder='할 일을 입력하시오.'
                value={value}
                onChange={handleChange}
            />

            <input
                type='submit'
                value='입력'
                className='btn'
                style={{flex: '10px'}}
            />
        </form>
    </div>;
}