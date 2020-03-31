import React from "react";
import PropTypes from "prop-types";
import { SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, Divider, makeStyles } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const useStyles = makeStyles(({ palette, mixins }) => ({
  drawer: {
    backgroundColor: palette.grey[900],
    borderRight: "1px solid rgba(255, 255, 255, .2)"
  },
  drawerHeader: {
    ...mixins.toolbar,
    ...{ justifyContent: "flex-end", display: "flex" }
  },
  closeButton: {
    color: palette.common.white
  },
  divider: {
    backgroundColor: "rgba(255, 255, 255, .2)"
  },
  listIcon: {
    minWidth: 30,
    justifyContent: "center"
  },
  listItem: {
    color: palette.common.white
  }
}));

const ListItemLink = props => {
  return <ListItem button component="a" {...props} />;
};

const MobileNavigation = ({ routes }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <nav>
      <div className={classes.openButton}>
        <IconButton className={classes.openButton} onClick={handleDrawerOpen} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </div>

      <SwipeableDrawer anchor="left" open={open} classes={{ paper: classes.drawer }} onClick={handleDrawerClose}>
        <div className={classes.drawerHeader}>
          <IconButton className={classes.closeButton} onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider className={classes.divider} />
        <List classes={classes.drawer}>
          {routes.map(({ label, link, icon }) => (
            <ListItem button key={label}>
              <ListItemIcon className={classes.listIcon}>
                <img src={icon} alt={label} />
              </ListItemIcon>
              <ListItemLink href={link}>
                <ListItemText className={classes.listItem} primary={label} />
              </ListItemLink>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </nav>
  );
};

MobileNavigation.propTypes = {
  routes: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired
};

export default MobileNavigation;
