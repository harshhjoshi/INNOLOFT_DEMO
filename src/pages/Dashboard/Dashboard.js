/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems, secondaryListItems } from "./ListItems";
import UserCard from "./UserCard";
import "./dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    ></Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const products = useSelector((state) => state.user);

  console.log("User Data::", products.user);
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      </GoogleMap>
    ))
  );

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }} style={{ backgroundColor: "white" }}>
        <CssBaseline />
        <AppBar enableColorOnDark={true} position="fixed" open={open}>
          <Toolbar
            variant="regular"
            sx={{
              pr: "55px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <IconButton color="inherit">
              <img className="company_logo" src={products.user.company.logo} />
            </IconButton>
          </Toolbar>
          {/* <h6>{products.user.description}</h6> */}
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <Toolbar
            style={{ bottom: 10 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <IconButton style={{ marginBottom: 10 }} onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <div className="parent-container ">
                  <div className="parent-container ">
                    <img
                      className="product_image"
                      src={products.user.picture}
                    ></img>
                  </div>
                  <div>
                    <h2> {products.user.name}</h2>
                    <text
                      style={{
                        color: "white",
                        fontSize: 12,
                        backgroundColor: "orange",
                        fontWeight: 800,
                        padding: 7,
                        borderRadius: 40,
                      }}
                    >
                      {products.user.type.name}{" "}
                    </text>
                    <h6 style={{ marginTop: 10 }}>
                      Investment Effort : {products.user.trl.name}
                    </h6>
                    <h6>
                      Technology Readiness Levels :{" "}
                      {products.user.investmentEffort}
                    </h6>
                    <h3 style={{ marginTop: 20 }}>Product Categories</h3>
                    <div style={{ marginTop: 5 }}>
                      <text
                        style={{
                          color: "white",
                          fontSize: 12,
                          backgroundColor: "teal",
                          fontWeight: 800,
                          padding: 7,
                          borderRadius: 40,
                          marginTop: 5,
                        }}
                      >
                        {products.user.categories[0].name}
                      </text>{" "}
                      <text
                        style={{
                          color: "white",
                          fontSize: 12,
                          backgroundColor: "olive",
                          fontWeight: 800,
                          padding: 7,
                          borderRadius: 40,
                          marginTop: 5,
                        }}
                      >
                        {products.user.categories[1].name}
                      </text>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <UserCard userdata={products.user.user} />
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <div
                    style={{ justifyContent: "space-between" }}
                    className="tabs"
                  >
                    <Tabs>
                      <TabList>
                        <Tab>Description</Tab>
                        <Tab>Attributes</Tab>
                      </TabList>

                      <TabPanel>
                        <Paper
                          sx={{
                            p: 2,
                            marginTop: 3,
                            alightSelf: "center",
                          }}
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: products.user.description,
                            }}
                          />
                        </Paper>
                      </TabPanel>
                      <TabPanel>
                        <div>
                          <div
                            style={{
                              alignSelf: "center",
                              backgroundColor: "gray",
                              padding: 10,
                              borderRadius: 5,
                            }}
                          >
                            <text
                              style={{
                                alignSelf: "center",
                                color: "white",
                                fontWeight: 900,
                              }}
                            >
                              Categories
                            </text>
                          </div>
                          <div style={{ marginTop: 8 }}>
                            <text
                              style={{
                                color: "white",
                                fontSize: 12,
                                backgroundColor: "teal",
                                fontWeight: 800,
                                padding: 7,
                                borderRadius: 40,
                                marginTop: 5,
                              }}
                            >
                              {products.user.categories[0].name}
                            </text>{" "}
                            <text
                              style={{
                                color: "white",
                                fontSize: 12,
                                backgroundColor: "olive",
                                fontWeight: 800,
                                padding: 7,
                                borderRadius: 40,
                                marginTop: 5,
                              }}
                            >
                              {products.user.categories[1].name}
                            </text>
                          </div>
                          <div
                            style={{
                              alignSelf: "center",
                              backgroundColor: "gray",
                              padding: 10,
                              borderRadius: 5,
                              marginTop: 20,
                            }}
                          >
                            <text
                              style={{
                                alignSelf: "center",
                                color: "white",
                                fontWeight: 900,
                                marginTop: 20,
                              }}
                            >
                              Technology Readiness Levels
                            </text>
                          </div>
                          <div style={{ marginTop: 5 }}>
                            <text
                              style={{
                                color: "teal",
                                fontSize: 16,
                                // backgroundColor: "teal",
                                fontWeight: 800,
                                padding: 7,
                                borderRadius: 40,
                                marginTop: 5,
                              }}
                            >
                              {products.user.trl.name}
                            </text>{" "}
                          </div>
                          <div
                            style={{
                              alignSelf: "center",
                              backgroundColor: "gray",
                              padding: 10,
                              borderRadius: 5,
                              marginTop: 10,
                            }}
                          >
                            <text
                              style={{
                                alignSelf: "center",
                                color: "white",
                                fontWeight: 900,
                                marginTop: 20,
                              }}
                            >
                              Business Models
                            </text>
                          </div>
                          <div style={{ marginTop: 15 }}>
                            <text
                              style={{
                                color: "white",
                                fontSize: 16,
                                backgroundColor: "teal",
                                fontWeight: 800,
                                padding: 7,
                                borderRadius: 40,
                                marginTop: 5,
                              }}
                            >
                              {products.user.businessModels[0].name}
                            </text>{" "}
                            <text
                              style={{
                                color: "white",
                                fontSize: 16,
                                backgroundColor: "teal",
                                fontWeight: 800,
                                padding: 7,
                                borderRadius: 40,
                                marginTop: 5,
                              }}
                            >
                              {products.user.businessModels[1].name}
                            </text>{" "}
                            <text
                              style={{
                                color: "white",
                                fontSize: 16,
                                backgroundColor: "teal",
                                fontWeight: 800,
                                padding: 7,
                                borderRadius: 40,
                                marginTop: 5,
                              }}
                            >
                              {products.user.businessModels[2].name}
                            </text>{" "}
                            <text
                              style={{
                                color: "white",
                                fontSize: 16,
                                backgroundColor: "teal",
                                fontWeight: 800,
                                padding: 7,
                                borderRadius: 40,
                                marginTop: 5,
                              }}
                            >
                              {products.user.businessModels[3].name}
                            </text>
                          </div>
                        </div>
                      </TabPanel>
                    </Tabs>
                  </div>
                </Paper>
                <Paper
                  sx={{
                    p: 2,
                    marginTop: 2,
                    alightSelf: "center",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                    width="1050"
                    height="450"
                    frameborder="1"
                    style={{ border: 0, alignSelf: "center" }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
