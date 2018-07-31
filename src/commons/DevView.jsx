import React from 'react'

const JsonView = ({ jkey, object }) => {
    return (
        <div className="jsonview-container">
            <h4>{`props.${jkey}`}</h4>
            {typeof object !== 'undefined' ?
                <pre style={styles.tagContainer}>
                    {JSON.stringify(object, null, '  ')}
                </pre> : 'undefined'
            }
        </div>
    )
}

const DevView = ({ props }) => {
    const { data, header } = props;

    return (
        <div style={styles.container}>
            {Object.keys(props).map((key) => {
                return <JsonView key={key} jkey={key} object={props[key]} />;
            })}
        </div>
    )
}

const styles = {
    container: {
        position: 'fixed',
        background: '#fafafa',
        opacity: '0.9',
        bottom: '0px',
        left: '0px',
        borderTop: '1px solid #ebebeb',
        borderRight: '1px solid #ebebeb',
        padding: '20px',
        width: '100vw',
        height: '20vh',
        maxHeight: '20vh',
        overflowY: 'scroll'
    },
    tagContainer: {
        border: '1px solid #ebebeb',
        background: '#FFFFFF',
        padding: '20px'
    }
}

export { DevView }