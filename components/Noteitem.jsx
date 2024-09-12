export default function Noteitem(props) {
    const { note } = props;
    return (
        <div className=" col-md-4 " >
            <div className="card my-4 " >
                <div className="card-body ">
                    <h5 className="card-title"> {note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash mx-2"></i>
                    <i className="fa-solid fa-pen-to-square mx-2"></i>

                </div>
            </div>
        </div>
    )
}