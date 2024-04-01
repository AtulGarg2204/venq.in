import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'
import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const Date = styled(Typography)`
  font-family: 'Inter';
  font-size: 13px;
`
const Heading = styled(Typography)`
  font-family: 'Inter';
  font-size: 17px;
  font-weight: 600;
`
const Information = styled(Typography)`
  font-family: 'Inter';
  font-size: 14px;
  color: grey;
`
const Content = styled(Box)`
  display: flex;
`
const Container = styled(TimelineItem)`
  &:before{
    padding: 0;
    content: none;
  }
`

const Period = ({fundt}) => {
  return (
    <div>
      <Timeline style={{ padding: '20px 0' }}>
        {fundt.map((timelineobj)=>{
          <Container >

          <Content >

            <TimelineSeparator style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 10px' }}>
              <TimelineDot style={{ width: '20px', height: '20px' }} />
            </TimelineSeparator>

            <TimelineContent>
              <Date>{fundt.fundingtitle}</Date>
              <Heading>{fundt.fundingsubtitle}</Heading>
              <Information>{fundt.fundingdescription}</Information>
            </TimelineContent>

          </Content>

        </Container>
        })}
        {/* <Container style={{ position: 'left' }}>

          <Content >

            <TimelineSeparator style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: ' center', margin: '0 7px' }}>
              <TimelineDot variant='outlined' style={{ border: '5px solid #0170dc', width: '25px', height: '25px' }} />
              <TimelineConnector style={{ height: '50px' }} />
            </TimelineSeparator>

            <TimelineContent>
              <Date>August 1st, 2023</Date>
              <Heading>Expected closing date</Heading>
              <Information>This is a conservative estimate for the closing date of the property funding</Information>
            </TimelineContent>

          </Content>

        </Container>

        <Container >

          <Content >

            <TimelineSeparator style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: ' center', margin: '0 10px' }}>
              <TimelineDot style={{ width: '20px', height: '20px' }} />
              <TimelineConnector style={{ height: '70px' }} />
            </TimelineSeparator>

            <TimelineContent>
              <Date>August 22nd, 2023</Date>
              <Heading>SPV formation and title deed distribution</Heading>
              <Information>The SPV will be created and all investors will receive their title deeds within 2-3 weeks of the funding closing, to prove their ownership of the property</Information>
            </TimelineContent>

          </Content>

        </Container>

        <Container >

          <Content >

            <TimelineSeparator style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 10px' }}>
              <TimelineDot style={{ width: '20px', height: '20px' }} />
            </TimelineSeparator>

            <TimelineContent>
              <Date>September 28th, 2023</Date>
              <Heading>Expected first rental payment</Heading>
              <Information>The first rental payment for this property is projected to be paid to investors by September 28th, 2023</Information>
            </TimelineContent>

          </Content>

        </Container> */}


      </Timeline>
    </div>
  )
}

export default Period