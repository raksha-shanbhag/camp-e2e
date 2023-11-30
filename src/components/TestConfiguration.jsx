import React from "react";
import JsonDisplay from "./JsonDisplay";


const TestConfiguration = (props) => {
    const {testConfiguration} = props
    return (
        <div className='app-test-configuration'>
            <JsonDisplay data={testConfiguration} />
        </div>
    )
}

export default TestConfiguration;