import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Icon from '@mdi/react'
import { mdiLinkedin, mdiGithub } from '@mdi/js'
import '../../assets/styles/components/Footer.scss'

export default function Footer() {
  return (
    <AppBar className="appbar-footer" position="static">
      <Container maxWidth="md">
        <Toolbar className="footer">
          <Typography variant="body1" color="inherit">
            By Javier Ponte © 2021 
          </Typography>

            <a className="link" href="https://www.linkedin.com/in/javier-ponte-gonz%C3%A1lez-67a6a7147/" >
            
              <Icon path={mdiLinkedin}
                title="User Profile"
                size={1}
                color="white"
              />
            </a>
        
            <a className="link" href="https://github.com/jeponteg" >
           
              <Icon path={mdiGithub}
                title="User Profile"
                size={1}
                color="white"
              />
            </a>
          </Toolbar>
        </Container>
      </AppBar>
  )
}



