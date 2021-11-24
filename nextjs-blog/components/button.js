export default function Button (props) {

    const handleButtonClick = () => {
        if(props.onClick) {
            props.onClick()
        }
    }

    return (
        <button style={{padding: '1rem'}} onClick={handleButtonClick}>
            {props.children || 'Button'}
        </button>
    )
}