import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot} from '@material-ui/lab'


const useStyles = makeStyles(() => ({
    paper: {
      padding: '1em 2em',
      backgroundColor: "#EFF9FB",
      color: "#323131"
    },
    dot: {
      backgroundColor: "#0FB5BB",
    },
    line: {
      backgroundColor: "#0FB5BB",
    },
    title: {
        color: "#0FB5BB",
    }
}))

const data = [
    {
        "week": "Week 1",
        "name": "Securing your Business Model",
        "content": "Explore the basics of launching and scaling your startup. We’ll cover the fundamentals of business and explore business models being leveraged by startups across the globe."
    },
    {
        "week": "Week 2",
        "name": "Building a Boss Product/Service",
        "content": "Being in business is all about building products your users love! We’ll explore the basics of product development, design, customer feedback, and iteration."
    },
    {
        "week": "Week 3",
        "name": "Acquiring Customers",
        "content": "This week is all about refining your brand’s unique value proposition and creating strategies to marketing that idea to the world."
    },
    {
        "week": "Week 4",
        "name": "Business Ops 101",
        "content": "From hiring to project management. Managing your operations sets your business up for greater success. We’ll be talking about building teams, management and leveraging data in your business."
    },
    {
        "week": "Week 5",
        "name": "Crafting a Narrative",
        "content": "Win hearts, minds, and dollars with a compelling pitch and narrative for your venture. During this week entrepreneurs will learn how to craft their personal and startup narrative. "
    },
    {
        "week": "Week 6",
        "name": "Generating Financing Options",
        "content": "Accessing funding for your ideas will help lay the foundation for your success. We’ll cover due diligence, meeting investors, and negotiating equity."
    },
    {
        "week": "Week 7",
        "name": "Diving into your Industry",
        "content": "Advantages for our businesses lie in understanding the contours of the industries we operate within. We will provide resources and advisors to help guide you into deeper domain knowledge depending on your chosen industry."
    },
    {
        "week": "Week 8",
        "name": "Grow Week",
        "content": "We have put in a lot of work these last few weeks getting up to speed with every aspect of our business now it time to execute on your business and market strategy!"
    },
]

const Item = ({name, week, content}) => {

    const classes = useStyles()
    
    return (
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                    {week}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot className={classes.dot}>
                    {/* <FaDesktop /> */}
                </TimelineDot>
                <TimelineConnector className={classes.line} />
            </TimelineSeparator>
            <TimelineContent>
                <Paper elevation={0} className={classes.paper}>
                    <Typography className={classes.title} variant="h6" component="h1">
                        {name}
                    </Typography>
                    <Typography>{content}</Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
    )
}

const ItemMobile = ({name, week, content}) => {

    const classes = useStyles()
    
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot className={classes.dot}>
                </TimelineDot>
                <TimelineConnector className={classes.line} />
            </TimelineSeparator>
            <TimelineContent>
                <Paper elevation={0} className={classes.paper}>
                    <Typography variant="body2" color="textSecondary">
                        {week}
                    </Typography>
                    <Typography variant="h6" component="h1">
                        {name}
                    </Typography>
                    <Typography>{content}</Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
    )
}

const Program = () => {

    const [isDesktop, setIsDesktop] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (window.innerWidth > 769) {
          setIsDesktop(true);
          setIsMobile(false);
        } else {
          setIsMobile(true);
          setIsDesktop(false);
        }
          
    }, [])

    if (isDesktop) {
        return ( 
            <section className="program">
                <div className="program__copy">
                    <h2>Program Schedule</h2>
                    <p>Our program is broken into 8 weeks that focus on preparing you not only for VC funding but maximizing cusomter revenue so you can keep you make.</p>
                </div>
                <Timeline align="alternate">
                {
                    data.map((module) => {
                        return (
                            <Item
                                key={module.name} 
                                name={module.name}
                                week={module.week}
                                content={module.content}
                            />
                        ) 
                    })
                }     
                </Timeline>
            </section> 
         )
    } else {
        return (
            <section className="program">
                <div className="program__copy">
                    <h2>Program Schedule</h2>
                    <p>Our program is broken into 8 weeks that focus on preparing you not only for VC funding but maximizing cusomter revenue so you can keep everything that you make.</p>
                </div>
                <Timeline>
                {
                    data.map((module) => {
                        return (
                            <ItemMobile
                                key={module.name} 
                                name={module.name}
                                week={module.week}
                                content={module.content}
                            />
                        ) 
                    })
                }     
                </Timeline>
            </section>  
         )
    }

    
}

export default Program