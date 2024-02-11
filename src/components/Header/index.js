import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.css";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import { Button } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  console.log(search, "kkkkk");
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    color: "#696e79",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f5f5f6",
    "&:hover": {
      backgroundColor: "#f5f5f6",
    },
    // marginRight: theme.spacing(2),s
    marginLeft: "40px",
    width: "200px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "40px",
      width: "200px",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuList = [
    "MEN",
    "WOMEN",
    "KIDS",
    "HOME & LIVING",
    "BEAUTY",
    "STUDIO",
  ];

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      className={styles.profile_drop}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div>
        <Typography className={styles.profile_dropdown_welcome}>
          Welcome
        </Typography>
        <Typography className={styles.profile_dropdown_tagline}>
          To access account and manage orders
        </Typography>
        <Button
          onClick={() => router.push(`/login`)}
          className={styles.login_btn}
        >
          Login/Signup
        </Button>
        <div className={styles.prof_drop_menu_item}>
          <MenuItem className={styles.profile_item} onClick={handleMenuClose}>
            Order
          </MenuItem>
          <MenuItem className={styles.profile_item} onClick={handleMenuClose}>
            Wishlist
          </MenuItem>
          <MenuItem className={styles.profile_item} onClick={handleMenuClose}>
            Gift Cards
          </MenuItem>
          <MenuItem className={styles.profile_item} onClick={handleMenuClose}>
            Contact Us
          </MenuItem>
          <MenuItem className={styles.profile_item} onClick={handleMenuClose}>
            Myntra Insiders
          </MenuItem>
        </div>
      </div>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={styles.main_container}>
      <AppBar position="static" classes={{ paper: styles.customs }}>
        <Toolbar>
          <div>
            <img
              src="https://i.pinimg.com/564x/50/f2/d1/50f2d1c76647d1a057947e03a503f8d3.jpg"
              className={styles.logo}
            />
          </div>
          <div className={styles.menu_wrapper}>
            {menuList.map((item, index) => {
              return (
                <p className={styles.menu_item} key={index}>
                  {item}
                </p>
              );
            })}
          </div>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for products and more"
              inputProps={{ "aria-label": "search" }}
              style={{ width: "200px" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} /> */}

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for products, brands and more"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              className="flex flex-col"
              aria-label="primary-search-account-menu"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              {/* <Badge badgeContent={4} color="error"> */}
              <PersonOutlineRoundedIcon />
              <p className={styles.right_item}>Profile</p>

              {/* </Badge> */}
            </IconButton>
            <IconButton
              size="large"
              className="flex flex-col"
              aria-label="wishlist"
              aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
            >
              {/* <Badge badgeContent={17} color="error"> */}
              <FavoriteBorderRoundedIcon />
              <p className={styles.right_item}>Wishlist</p>

              {/* </Badge> */}
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="cart-items"
              aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              className="flex flex-col"
            >
              <WorkOutlineRoundedIcon />
              <p className={styles.right_item}>Bag</p>
            </IconButton>
          </Box>
        </Toolbar>
        {renderMenu}
      </AppBar>
    </div>
  );
}
