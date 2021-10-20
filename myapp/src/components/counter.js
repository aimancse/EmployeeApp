import { Button } from '@material-ui/core'
import React from 'react'

const counter = () => {
    return (
        <div>
            <h1> {counterValue}</h1>
            <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={incCounterBtn}
            >+</Button>
        </div>
    )
}

export default counter
