import Head from "next/head";
import styles from "../styles/Home.module.scss";

// Element
import Header from "../components/Elements/Header";

// Compont
import HomeSection from "../components/Pages/Home/HomeSection";
import { makeStyles } from "@material-ui/core";

const HomeBannerImg = require("../public/Image/Home/HomeBanner.png");

const useStyles = makeStyles({
   heroSection: {
      background: "linear-gradient(to bottom,#c7ecff 0,#f9efff 100%)",
      position: "relative",
      paddingTop: "100px",
      paddingBottom: "100px",
      height: "100vh",
      display:"flex",
      alignItems: "center",
      "&::before": {
         background: `url(${HomeBannerImg}) left 0 no-repeat`,
         position: "absolute",
         height: "100vh",
         right: "0",
         left: "0",
         top: "0",
         backgroundSize: "contain",
         content: '""',
         display: "block",
         zIndex:"1"
      },
   },
});

export default function Home() {
   const Style = useStyles();
   return (
      <div className={styles.container}>
         <Head>
            <title>Home Page</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className={styles.main}>
            <Header />
            <section className={Style.heroSection}>
               <HomeSection />
            </section>
         </main>
      </div>
   );
}
