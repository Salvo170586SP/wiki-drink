const SingleDrink = ({img, nome, istruzioni, tipo, categoria}) => {
    return ( 
        <div className="card-detail ">
        <img
          className="rounded-2 shadow"
          width={450}
          src={img}
          alt={nome}
        />
        <div className="detail-text ps-5">
          <h1 className="mb-5">{nome}</h1>
          <p>
            Ricetta:{" "}
            <span className="text-muted">{istruzioni}</span>
          </p>
          <p>
            Categoria:{" "}
            <span className="text-muted">{categoria}</span>
          </p>
          <p>
            Tipo: <span className="text-muted">{tipo}</span>
          </p>
        </div>
      </div>

     );
}
 
export default SingleDrink;