import Tour from "./Tour";


const Tours = ({tours, removeTour}) => {
    return (
        <section>
            <div className="title">
                <h2>Ours Tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map(( (element) => (
                    <Tour key={element.id} {...element} removeTour={removeTour} />
                )))}
            </div>
            
        </section>
    )
}

export default Tours
