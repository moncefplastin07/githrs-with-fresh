

/** @jsx h */

import { Head } from "$fresh/src/runtime/head.ts";
import { Component, h } from "preact";
import Footer from "../components/Footer.tsx";

class Layout extends Component {
  constructor(props:any) {
    super(props);
    this.state = { displayTheme: "light" };
  }
  componentDidMount() {
    this.setState({
      displayTheme: window.localStorage.displayTheme || "light",
    });
  }
  toggleDisplayTheme() {
    console.log(this.state)
    const newDisplayTheme = this.state.displayTheme == "light"
      ? "dark"
      : "light";
    window.localStorage.setItem("displayTheme", newDisplayTheme);
    return newDisplayTheme;
  }
  render() {
    return (
      <div className={`${this.state.displayTheme}`}>
        <Head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='font-mono dark:bg-black dark:text-white '>
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}
export default Layout;
