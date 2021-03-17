import Head from "next/head";
import { Container } from "../components/container/Container.jsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Griffin EnerG Consulting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Container */}
      <Container>
        {/* Hero */}
        <div className="h-screen"></div>
        <div className="_row-2">
          <div className="title">Clients</div>
        </div>
        <div className="_row-3">
          <div className="title">About Me</div>
        </div>
        <div className="_row-3">
          <div className="title">Testimonials</div>
        </div>
        <div className="_row-4">
          <div className="title">My Projects</div>
        </div>
        <div className="_row-5">
          <div className="title">News</div>
        </div>
        <div className="_row-6">
          <div className="_row-6--row-1">Learn More</div>
          <iframe
            src="https://indd.adobe.com/view/c5c10c18-1305-44bc-8478-51c606f23b69"
            className="_row-6--row-2"
          ></iframe>
          <iframe
            src="https://indd.adobe.com/view/c01cd1a7-379e-4bce-8a53-b3c7bfed306e"
            className="_row-6--row-3"
          ></iframe>
        </div>
        <div className="_row-7">
          <div className="title">Contact Me</div>
        </div>
        <div className="_row-8">Footer</div>
      </Container>
    </div>
  );
}
