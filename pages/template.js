import React, { Component } from 'react'
import Link from 'next/link'
import Layout from '../src/components/layout'
import { appContext } from '../src/contexts/AppContext'
import { sampleContext } from '../src/contexts/SampleContext'
import Cookies from 'js-cookie'
import { authenticateUser } from '../config/utils'
import {

} from "antd"

class Template extends Component {

  static async getInitialProps(ctx) {
    authenticateUser(ctx)

    return {
      auth: 'authenticated!'
    }
  }
  componentDidMount() {
    console.log(this.props.appState)
    console.log(this.props.sampleState)
    console.log(this.props.auth)
  }

  render() {
    return (
      <Layout title="template">
        <p>login.js</p>
      </Layout>
    )
  }
}

export default sampleContext(appContext(Template))
