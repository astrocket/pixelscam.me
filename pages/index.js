import React, { Component } from 'react'
import Pixel from '../src/classes/Pixel'
import Layout from '../src/components/layout'
import Loading from '../src/classes/Loading'
import dynamic from 'next/dynamic'
const DynamicGame = dynamic(
  import('../src/classes/Game'),
  { ssr: false }
)

class Index extends Component {

  static async getInitialProps({ req }) {
    const pixels = Array(1250).fill().map((e,i)=> {
      return {
        id: i + 1,
        owner: 'astro'
      }
    })

    return { pixels }
  }

  constructor() {
    super();
  }

  render() {
    return (
      <Layout title="Pixel Scam">
        <Pixel pixels={this.props.pixels} />
        <DynamicGame />
        <Loading />
      </Layout>
    )
  }
}

export default Index
