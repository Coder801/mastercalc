// TODO: separate and refactor this module
// ========================================

import React from "react";
import PropTypes from "prop-types";
import { compose } from "lodash/fp";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Modal,
  Backdrop,
  Fade,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  makeStyles
} from "@material-ui/core";

import { toggleModal } from "../../actions";

import productImg0 from "@/assets/img/products/product-0.png";
import productImg1 from "@/assets/img/products/product-1.png";
import productImg2 from "@/assets/img/products/product-2.png";
import providerImg0 from "@/assets/img/providers/provider-0.png";
import providerImg1 from "@/assets/img/providers/provider-1.png";
import providerImg2 from "@/assets/img/providers/provider-2.png";

const useClasses = makeStyles(({ palette, spacing, breakpoints }) => {
  const size = {
    sm: 3,
    xs: 2
  };

  return {
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    title: {
      padding: `0 ${spacing(size.sm)}px`,
      paddingTop: spacing(size.sm)
    },
    caption: {
      paddingLeft: spacing(size.sm),
      paddingRight: spacing(size.sm),
      paddingTop: spacing(1),
      paddingBottom: spacing(size.sm)
    },
    content: {
      width: 780,
      outline: "none",
      backgroundColor: palette.common.white,
      borderRadius: 5
    },
    provider: {
      padding: spacing(size.sm),
      [breakpoints.down("xs")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: spacing(size.xs),
        paddingBottom: 0
      }
    },
    tableRow: {
      "& > *": {
        padding: spacing(2)
      },
      "& > *:first-child": {
        paddingLeft: spacing(size.sm),
        color: palette.grey[600]
      },
      "& > *:last-child": {
        paddingRight: spacing(size.sm)
      }
    },
    button: {
      marginBottom: spacing(2)
    }
  };
});

const OffersModal = ({ title, caption, open, toggleModal }) => {
  const classes = useClasses();

  const handleClose = () => {
    toggleModal("details", false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <Box className={classes.content}>
          <Grid container>
            <Grid item xs={12}>
              <Typography className={classes.title} variant="h4">
                {title}
              </Typography>
              <Typography className={classes.caption} variant="subtitle1">
                {caption}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow className={classes.tableRow}>
                    <TableCell></TableCell>
                    <TableCell align="center">
                      <img src={productImg0} alt="" />
                    </TableCell>
                    <TableCell align="center">
                      <img src={productImg1} alt="" />
                    </TableCell>
                    <TableCell align="center">
                      <img src={productImg2} alt="" />
                    </TableCell>
                    <TableCell align="center">
                      <img src={productImg0} alt="" />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={classes.tableRow}>
                    <TableCell align="right">Поставщик</TableCell>
                    <TableCell align="center">
                      <img src={providerImg0} alt="" />
                    </TableCell>
                    <TableCell align="center">
                      <img src={providerImg1} alt="" />
                    </TableCell>
                    <TableCell align="center">
                      <img src={providerImg2} alt="" />
                    </TableCell>
                    <TableCell align="center">
                      <img src={providerImg0} alt="" />
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.tableRow}>
                    <TableCell align="right">К-во</TableCell>
                    <TableCell align="center">20 л</TableCell>
                    <TableCell align="center">20 л</TableCell>
                    <TableCell align="center">20 л</TableCell>
                    <TableCell align="center">20 л</TableCell>
                  </TableRow>
                  <TableRow className={classes.tableRow}>
                    <TableCell align="right">Стоимость</TableCell>
                    <TableCell align="center">12 500.00 грн</TableCell>
                    <TableCell align="center">12 500.00 грн</TableCell>
                    <TableCell align="center">12 500.00 грн</TableCell>
                    <TableCell align="center">12 500.00 грн</TableCell>
                  </TableRow>
                  <TableRow className={classes.tableRow}>
                    <TableCell></TableCell>
                    <TableCell align="center">
                      <Button className={classes.button} variant="outlined">
                        Подробнее
                      </Button>
                      <Button className={classes.button} variant="contained" color="primary">
                        Заказать
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button className={classes.button} variant="outlined">
                        Подробнее
                      </Button>
                      <Button className={classes.button} variant="contained" color="primary">
                        Заказать
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button className={classes.button} variant="outlined">
                        Подробнее
                      </Button>
                      <Button className={classes.button} variant="contained" color="primary">
                        Заказать
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button className={classes.button} variant="outlined">
                        Подробнее
                      </Button>
                      <Button className={classes.button} variant="contained" color="primary">
                        Заказать
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
};

OffersModal.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string
};

OffersModal.defaultProps = {
  title: "Другие предложения",
  caption: "Грунтовка глубокого проникновения: 15 л"
};

const mapStateToProps = ({ modals }) => ({
  open: modals.offers.isOpen
});

const mapDispatchToProps = dispatch => ({
  toggleModal: toggleModal(dispatch)
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(OffersModal);
