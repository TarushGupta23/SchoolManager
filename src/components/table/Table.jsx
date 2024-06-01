import "./table.css"

export default function Table(props) {
    return (
        <table className="time-table">
            <tbody>
            {
                props.table.map((row, index) => {
                    if (index === 0) {
                        return (<tr>
                            {row.map((col, index) => (<th>{col}</th>))}
                        </tr>)
                    }
                    return (<tr> {
                        row.map((col, index) => {
                            if (index === 0) {
                                return (<th>{col}</th>)
                            }
                            return (<td>{col}</td>)
                        })
                    } </tr>)

                })
            }
            </tbody>
        </table>
    )
}