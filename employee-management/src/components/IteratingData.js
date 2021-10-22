export function IteratingData(props) {

    var sortedArray = [...props.data].sort()

    alert(props.data);

    return (
        <div>
            {
                sortedArray.map((val) => {
                    return <div>Odd Data Value id {val}</div>
                })
            }
        </div>
    )
}