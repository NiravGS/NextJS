import React from "react";
import { Container, Grid, makeStyles, Button } from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";

const useStyles = makeStyles({
   headerHeading: {
      zIndex: "9",
      "& h1": {
         fontSize: "60px",
         lineHeight: "72px",
         fontWeight: "700",
         marginBottom: "30px",
         ["@media (max-width: 1150px)"]: {
            fontWeight: "700",
            marginBottom: "30px",
            fontSize: "45px",
            lineHeight: "57px",
         },
         ["@media (max-width: 991px)"]: {
            fontWeight: "700",
            marginBottom: "30px",
            fontSize: "38px",
            lineHeight: "50px",
            textAlign: "center",
         },
      },
      "& p": {
         fontSize: "20px",
         lineHeight: "30px",
         marginBottom: "35px",
         ["@media (max-width: 991px)"]: {
            fontSize: "18px",
            lineHeight: "28px",
            marginBottom: "35px",
            textAlign: "center",
         },
      },
      ["@media (max-width: 959px)"]: {
         display: "grid",
         order:"2"
      },
   },
   Button: {
      background: "linear-gradient(to right,#ffbd84 0,#ff1f8e 100%)",
      WebkitBoxShadow: "0 10px 15px 0 rgba(233,30,99,.15)",
      boxShadow: "0 10px 15px 0 rgba(233,30,99,.15)",
      fontSize: "16px",
      fontWeight: "400",
      padding: "0 32px",
      lineHeight: "56px",
      outline: "0",
      backgroundColor: "#ff1f8e",
      border: "none",
      WebkitBorderRadius: "100px",
      borderRadius: "100px",
      display: "inline-block",
      position: "relative",
      color: "#fff",
      ["@media (max-width: 991px)"]: {
         width: "max-content",
         margin: "0 auto",
         display: "block",
      },
   },
   singleImg: {
      zIndex: "10",
      ["@media (max-width: 991px)"]: {
         margin: "30px auto 0",
         display: "block",
      }
   },
   orderMedia2: {
      ["@media (max-width: 959px)"]: {
         order: "2"
      }
   },
   orderMedia1: {
      ["@media (max-width: 959px)"]: {
         order: "1"
      }
   }
});

const HomeSection = () => {
   const Style = useStyles();
   return (
      <>
         <Container fixed>
            <Grid container spacing={1}>
               <Grid container item md={6} spacing={3} className={Style.orderMedia2}>
                  <div className={Style.headerHeading}>
                     <h1>Creative Web Development Company</h1>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse faucibus, risus sit amet auctor sodales,
                        justo erat tempor eros.
                     </p>
                     <Link href="/">
                        <Button className={Style.Button}>Contact Us</Button>
                     </Link>
                  </div>
               </Grid>
               <Grid container item md={6} spacing={3} className={Style.orderMedia1}>
                  <div className={Style.singleImg}>
                     <img src="/Image/Home/heroImage.png" />
                  </div>
               </Grid>
            </Grid>
         </Container>
      </>
   );
};

export default HomeSection;
