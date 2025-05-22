function Cat({example_text, my_color}){
    return(<div>
        <p style={
            {color:{my_color},
            padding:'10px',
            border:'2px solid black'
            }}>{example_text}</p>
    </div>)
}

export default Cat

export function Dog(args){
    return(<div>
        <p>{args.my_prop_text}</p>
        <h1>{args.my_prop_title}</h1>
    </div>)
}