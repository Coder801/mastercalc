import React from "react";
import { compose } from "lodash/fp";
import { connect } from "react-redux";
import hexToRgba from "hex-to-rgba";
import clsx from "clsx";

import NotInterestedIcon from "@material-ui/icons/NotInterested";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import currencyFormatter from "@/helpers/currencyFormatter";

import productImg0 from "@/assets/img/products/product-0.png";
import productImg1 from "@/assets/img/products/product-1.png";
import productImg2 from "@/assets/img/products/product-2.png";
import providerImg0 from "@/assets/img/providers/provider-0.png";
import providerImg1 from "@/assets/img/providers/provider-1.png";
import providerImg2 from "@/assets/img/providers/provider-2.png";

import { toggleModal } from "../../actions";

import {
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Hidden,
  makeStyles
} from "@material-ui/core";

import DetailsModal from "../Modal/DetailsModal";

const useClasses = makeStyles(({ palette }) => ({
  status: {
    color: palette.grey[600],
    borderLeft: `1px solid ${palette.grey[300]}`
  },
  success: {
    backgroundColor: hexToRgba(palette.success.main, 0.2),
    color: palette.success.main
  },
  error: {
    backgroundColor: hexToRgba(palette.error.main, 0.2),
    color: palette.error.main
  }
}));

const createData = (image, provider, sum, status, statusText) => ({ image, provider, sum, status, statusText });

const rows = [
  createData(productImg0, providerImg0, 2500, "error"),
  createData(productImg1, providerImg1, 2500, "success"),
  createData(productImg2, providerImg2, 2500, "waiting")
];

const Status = ({ status }) => {
  const statuses = {
    error: {
      text: "Отменен",
      icon: <NotInterestedIcon />
    },
    success: {
      text: "Потвержден",
      icon: <CheckCircleOutlineIcon />
    },
    waiting: {
      text: "Ожидает",
      icon: <HourglassEmptyIcon />
    }
  };

  return (
    <Typography variant="body1">
      <Hidden smUp>{statuses[status].icon}</Hidden>
      <Hidden xsDown>{statuses[status].text}</Hidden>
    </Typography>
  );
};

const OrderTable = ({ toggleModal }) => {
  const classes = useClasses({
    status: "error"
  });

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <Hidden only={["xs", "sm"]}>
                <TableCell style={{ width: 100 }} align="center">
                  Материалы
                </TableCell>
              </Hidden>
              <TableCell>&nbsp;</TableCell>
              <TableCell align="center">Поставщик</TableCell>
              <Hidden only={["xs", "sm"]}>
                <TableCell>&nbsp;</TableCell>
              </Hidden>
              <TableCell align="center">Цена в грн</TableCell>
              <TableCell align="center">Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({ image, provider, sum, status }, key) => (
              <TableRow hover key={key}>
                <Hidden only={["xs", "sm"]}>
                  <TableCell component="th" scope="row">
                    <img style={{ maxWidth: "100%" }} src={image} alt="" />
                  </TableCell>
                </Hidden>
                <TableCell component="th" scope="row">
                  <Typography variant="body1">
                    Позиций: <strong>5</strong>
                  </Typography>
                  <br />
                  <Typography variant="body1">
                    Доставка: <strong>из Киева</strong>
                  </Typography>
                  <Typography variant="body1">
                    Оплата: <strong>Приват 24</strong>
                  </Typography>
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  <img style={{ maxWidth: "100%" }} src={provider} alt="" />
                </TableCell>
                <Hidden only={["xs", "sm"]}>
                  <TableCell align="center" component="th" scope="row">
                    <Button
                      variant="outlined"
                      onClick={() =>
                        toggleModal({
                          name: "details",
                          isOpen: true
                        })
                      }
                    >
                      Подробнее
                    </Button>
                  </TableCell>
                </Hidden>
                <TableCell align="center" component="th" scope="row">
                  <Typography variant="h5" color="error">
                    {currencyFormatter(sum)}
                  </Typography>
                  <br />
                  <Button variant="contained" color="primary">
                    Заказать
                  </Button>
                </TableCell>
                <TableCell className={clsx(classes.status, classes[status])} align="center" component="th" scope="row">
                  <Status status={status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DetailsModal />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleModal: toggleModal(dispatch)
});

export default compose(connect(null, mapDispatchToProps))(OrderTable);
