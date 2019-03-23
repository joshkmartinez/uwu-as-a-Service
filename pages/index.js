import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import {
  Grommet,
  Box,
  Heading,
  Button,
  Text,
  Markdown,
  Paragraph
} from 'grommet'
const ReactJson = dynamic(import('react-json-view'), { ssr: false })
import 'isomorphic-fetch'
const theme = {
  global: {
    colors: {
      brand: '#C31D4A'
    },
    font: {
      family: 'Helvetica'
    }
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { pi: '' }
  }

  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>uwu</title>
        </Head>
        <Grommet theme={theme}>
          <Box
            animation="fadeIn"
            align="center"
            margin="large"
            alignContent="center"
          >
            <Heading margin="small" textAlign="center">
              UWU
            </Heading>

            <Box
              direction="row-responsive"
              pad="medium"
              align="center"
              alignContent="center"
              animation="zoomIn"
              basis="full"
            />
          </Box>
        </Grommet>
      </React.Fragment>
    )
  }
}

export default App
