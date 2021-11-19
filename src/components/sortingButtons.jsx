function SortingButton({text, rating, onClick}){
    return (
        <button onClick = { () => onClick(rating)}>
            {text}
        </button>
    )
}

export default SortingButton