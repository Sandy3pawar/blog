function Student (student) {
    console.log(student)
    // window.alert(student.name)
    return (
        <div style={{background:"skyblue"}}>
            <h1 >Student name is {student.name} </h1>
            {/* <h3>Address is {student.address.city} state is {student.address.state}</h3> */}
        </div>
    )
}
export default Student