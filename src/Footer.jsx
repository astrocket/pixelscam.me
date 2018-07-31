import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div style={styles.footerContainer}>
                <span>Created by Scammers</span>
            </div>
        )
    }
}

const styles = {
    footerContainer: {
        width: '100vw',
        minHeight: '100px',
        borderTop: '1px solid #ebebeb',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default Footer