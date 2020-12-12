import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot} from '@material-ui/lab'
//import {FaDesktop} from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '1em 2em',
    },
    dot: {
      backgroundColor: "#0FB5BB",
    //   height: "2em",
    //   width: "2em"
    },
    line: {
      backgroundColor: "#0FB5BB",
    },
}))

const data = [
    {
        "week": "Week 1",
        "name": "Business Model",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod elementum nisi quis eleifend. Porta nibh venenatis cras sed."
    },
    {
        "week": "Week 2",
        "name": "Narrative",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod elementum nisi quis eleifend. Porta nibh venenatis cras sed."
    },
    {
        "week": "Week 3",
        "name": "Product/Service",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod elementum nisi quis eleifend. Porta nibh venenatis cras sed."
    },
    {
        "week": "Week 4",
        "name": "Marketing/Growth",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod elementum nisi quis eleifend. Porta nibh venenatis cras sed."
    },
    {
        "week": "Week 5",
        "name": "Operations",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod elementum nisi quis eleifend. Porta nibh venenatis cras sed."
    },
    {
        "week": "Week 6",
        "name": "Financing",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod elementum nisi quis eleifend. Porta nibh venenatis cras sed."
    },
    {
        "week": "Week 7",
        "name": "Industry Unique",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod elementum nisi quis eleifend. Porta nibh venenatis cras sed."
    },
    {
        "week": "Week 8",
        "name": "Final",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod elementum nisi quis eleifend. Porta nibh venenatis cras sed."
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
                <Paper elevation={1} className={classes.paper}>
                    <Typography variant="h6" component="h1">
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
                <Paper elevation={1
                } className={classes.paper}>
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
                    <p>Our program is broken into 8 weeks that focus on preparing you not only for VC funding but maximizing cusomter revenue so you can keep everything that you make.</p>
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