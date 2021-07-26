import React, {useState, useEffect} from 'react'
import { Link } from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Image from "./image"
import { Button, List, ListItem, ListItemText, Drawer } from '@material-ui/core'
import { FaBars } from 'react-icons/fa'


const Header = () => {

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

   
    const anchor = 'left'  
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
    
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Image query="logo" />
                <ListItem button>
                    <ListItemText> 
                        <Link to="/">Home</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText > 
                        <Link to="/startup">Accelerator Program</Link>
                    </ListItemText>
                    </ListItem>
                <ListItem button>
                    <ListItemText> 
                        <Link to="/investor">Investor Academy</Link>
                    </ListItemText>
                </ListItem>
            </List>
        </div>
        );
      

    if(isMobile) {
        return (
            <header>
                <Button onClick={toggleDrawer(anchor, true)}><FaBars/></Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
                </Drawer>
            </header>
        )
    } else {

        
        return (
            <header>
                <div className="logo">
                    <Link to="/">
                        <Image query="logo" />
                    </Link>
                </div>
                <nav>
                    <Link className="link dia" to="/startup">Accelerator Program</Link>
                    <Link className="link dia" to="/investor">Investor Academy</Link>
                </nav>
                <OutboundLink className="cta-btn" href="https://cfbi.typeform.com/to/FrtXprm9">Accelerator Application</OutboundLink>
            </header>
        )
    }
}

export default Header