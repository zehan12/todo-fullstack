import { Fragment } from "react";
const Title = ( {text} ) => {

    
    return(
        <Fragment>         
        

            <h1 className="w-[100%] m-auto uppercase text-center text-[4rem] font-bold" >{text}</h1>

        </Fragment>
    )
}

export default Title;