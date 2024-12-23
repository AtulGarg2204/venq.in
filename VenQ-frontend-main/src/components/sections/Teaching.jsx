import { Box, Grid, Typography, styled } from '@mui/material'
import React from 'react'


const Container = styled(Box)`
  height: 80vh;
  background-color: #B6EBFB70;
`

const Heading = styled(Typography)`
  font-family: Bebas Neue;
  font-size: 64px;
  font-weight: 400;
  line-height: 77px;
  letter-spacing: 0.05em;
  text-align: center;
  padding-top: 3%;
`

const SubHeading = styled(Typography)`
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
`

const Content = styled(Typography)`
  border-radius: 50px;
  border: 2px solid black;
  width: max-content;
  padding: 7px 15px;
  `

const GridContainer = styled(Box)`
  margin: 50px 30px 30px 30px;
  display: flex;
`

const Item = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Teaching = () => {
  return (
    <Container>
      <Heading>How to make money?</Heading>
      <SubHeading>It is one of the most important asset classes to own and to build long term </SubHeading>

      <GridContainer sx={{ flexGrow: 1 }}>
        <Grid container style={{ justifyContent: 'space-around' }}>
          <Item item xs={3}>
            <Content>1</Content>
          </Item>
          <Item item xs={3}>
            <Content>2</Content>
          </Item>
          <Item item xs={3}>
            <Content>3</Content>
          </Item>
        </Grid>
      </GridContainer>


    </Container>

    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={1}>
    //     <Grid container item spacing={3}>
    //       <FormRow />
    //     </Grid>
    //     <Grid container item spacing={3}>
    //       <FormRow />
    //     </Grid>
    //     <Grid container item spacing={3}>
    //       <FormRow />
    //     </Grid>
    //   </Grid>
    // </Box>
  )
}

export default Teaching