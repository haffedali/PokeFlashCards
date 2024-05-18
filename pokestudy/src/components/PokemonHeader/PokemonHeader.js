import React from "react";
import { useStyles } from "./PokemonHeader.styles";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Paper,
  MenuList,
  Popper,
  Grow,
  ClickAwayListener
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import utils from "../../utils";

const PokemonHeader = ({region, setRegion}) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    console.log(event.target.textContent)
    setRegion(event.target.textContent)
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  
  return(   
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
      <Stack direction="row" spacing={2}>
      <div>
        <IconButton
          ref={anchorRef}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleToggle}
          sx={{ mr: 2 }}
        >
        <MenuIcon />
        </IconButton>
          {region}
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={(e)=>handleClose(e)}>Kanto</MenuItem>
                    <MenuItem onClick={(e)=>handleClose(e)}>Johto</MenuItem>
                    <MenuItem onClick={(e)=>handleClose(e)}>Hoenn</MenuItem>
                    <MenuItem onClick={(e)=>handleClose(e)}>Sinnoh</MenuItem>

                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
    </Toolbar>
    </AppBar>
  </Box>) ;
};

export default PokemonHeader;
