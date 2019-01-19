




render (){

return(

<div>
    {
        this.state.editItem ?

        <button onClick={() => this.handleClick()} > Edit </button> :
        <div>
        <input />
            <button onClick={() => this.handleClick()}>submit</button>
        
        <input />
        </div>
        



    }

</div>




)

}