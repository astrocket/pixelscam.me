import App, { Container } from 'next/app'
import React from 'react'
import {
  AppProvider, AppConsumer, appContext
} from '../src/contexts/AppContext'
import {
  SampleProvider, SampleConsumer, sampleContext
} from '../src/contexts/SampleContext'
import '../static/styles/application.less'

const ProviderWrapper = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement(context, { children: prev }),
  children
);

export default class WeportIO extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ProviderWrapper contexts={[AppProvider, SampleProvider]}>
          <Component {...pageProps} />
        </ProviderWrapper>
      </Container>
    )
  }
}
