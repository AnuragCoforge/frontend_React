export const GetUser=({user})=> {
    return (
        <div>
            <h1>UserDetails:</h1>
            <h4>id: {user.id}</h4>
            <h4>name: {user.name}</h4>
            <h4>city: {user.city}</h4>
        </div>
    )
}