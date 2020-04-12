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
  Hidden,
  makeStyles
} from "@material-ui/core";

import TotalPrice from "@/components/TotalPrice/TotalPrice";
import ProviderInfo from "@/components/ProviderInfo/ProviderInfo";
import currencyFormatter from "@/helpers/currencyFormatter";

import { toggleModal } from "../../actions";

import productImg0 from "@/assets/img/products/product-0.png";
import providerImg0 from "@/assets/img/providers/provider-0.png";

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
      padding: spacing(size.sm)
    },
    content: {
      width: 600,
      outline: "none",
      backgroundColor: palette.common.white,
      borderRadius: 5
    },
    footer: {
      backgroundColor: palette.grey[100],
      borderRadius: "0 0 5px 5px"
    },
    table: {},
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
    price: {
      padding: spacing(size.sm),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      [breakpoints.down("xs")]: {
        padding: spacing(size.xs),
        paddingTop: 0
      }
    },
    buttons: {
      "& > *": {
        marginLeft: spacing(0.5),
        marginRight: spacing(0.5)
      }
    },
    image: {
      maxWidth: 50
    },
    tableRow: {
      "& > *": {
        padding: spacing(1)
      },
      "& > *:first-child": {
        paddingLeft: spacing(size.sm)
      },
      "& > *:last-child": {
        paddingRight: spacing(size.sm)
      }
    }
  };
});

const DetailsModal = ({ title, open, content, provider, total, toggleModal }) => {
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
            </Grid>
            <Grid item xs={12}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow className={classes.tableRow}>
                    <TableCell>№</TableCell>
                    <Hidden only={["xs"]}>
                      <TableCell>&nbsp;</TableCell>
                    </Hidden>
                    <TableCell align="center">Материалы</TableCell>
                    <TableCell align="center">К-во</TableCell>
                    <TableCell align="center">Цена</TableCell>
                    <TableCell align="center">Стоймость</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={classes.tableRow}>
                    <TableCell>1</TableCell>
                    <Hidden only={["xs"]}>
                      <TableCell>
                        <img className={classes.image} src={productImg0} alt="" />
                      </TableCell>
                    </Hidden>
                    <TableCell align="center">
                      <Typography color="textPrimary" variant="subtitle1">
                        Грунтовка
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body1">1 бан</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography color="textSecondary">{currencyFormatter(700)}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography color="error">{currencyFormatter(700)}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.tableRow}>
                    <TableCell>1</TableCell>
                    <Hidden only={["xs"]}>
                      <TableCell>
                        <img className={classes.image} src={productImg0} alt="" />
                      </TableCell>
                    </Hidden>
                    <TableCell align="center">
                      <Typography color="textPrimary" variant="subtitle1">
                        Грунтовка
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body1">1 бан</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography color="textSecondary">{currencyFormatter(700)}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography color="error">{currencyFormatter(700)}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.tableRow}>
                    <TableCell>1</TableCell>
                    <Hidden only={["xs"]}>
                      <TableCell>
                        <img className={classes.image} src={productImg0} alt="" />
                      </TableCell>
                    </Hidden>
                    <TableCell align="center">
                      <Typography color="textPrimary" variant="subtitle1">
                        Грунтовка
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body1">1 бан</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography color="textSecondary">{currencyFormatter(700)}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography color="error">{currencyFormatter(700)}</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          </Grid>
          <Grid container className={classes.footer}>
            <Grid item xs={12} sm={7}>
              <Box className={classes.provider}>
                <ProviderInfo image={providerImg0} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box className={classes.price}>
                <TotalPrice button={false} price={3100.0} />
                <Box className={classes.buttons}>
                  <Button variant="contained" color="secondary">
                    Отмена
                  </Button>
                  <Button variant="contained" color="primary">
                    Заказать
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
};

DetailsModal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
  provider: PropTypes.object,
  total: PropTypes.number
};

DetailsModal.defaultProps = {
  title: "Другие предложения"
};

const mapStateToProps = ({ modals }) => ({
  open: modals.details.isOpen
});

const mapDispatchToProps = dispatch => ({
  toggleModal: toggleModal(dispatch)
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(DetailsModal);
