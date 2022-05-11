import React from "react";
import withHoc from './HOC';

const states  = ['delhi', 'haryana', 'up', 'west bengal', 'bihar', 'mp', 'tamilnadu'];

const HOC2 = (props) => {
        return(
            <>
                <h4>Data from Filter HOC2</h4>
                 {/* { 
                    states && states.map((item) => (
                        <div>{item}</div>
                    ))
                }  */}

                {
                    props.dataRet && props.dataRet.map((item) =>(
                        <div>{item}</div>
                    ))
                }
            </>
        )
    }

export default withHoc(HOC2, states);
