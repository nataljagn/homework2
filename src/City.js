const City = (props) =>(
    <div>
        <div><strong>{props.data.name}</strong></div>
        <img src={props.data.picture} width="200"/>
        <div className="App-smaller-text">{props.data.description}</div>  
    </div>
)

export default City;