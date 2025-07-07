import React from "react";
import BannerComing from "../components/banner/BannerComing";
import Breadcrumbs from "../components/breadcrumb/Breadcrumd";
import StickyNav from "../components/shared/StickyNav";
import Coming_Content_Top from "../components/section/Coming_Content_Top";
import ComingTextImage from "../components/section/ComingTextImage";
import ComingTwoText from "../components/section/ComingTwoText";
import ComingTextLargeImage from "../components/section/ComingTextLargeImage";
import CenteredTextSection from "../components/section/CenteredTextSection";
const breadcrumbItems = [
  { label: "Home", href: "https://travel.destinationcanada.com/en-us" },
  { label: "Single Places To Go" },
];
const CommingTo = () => {
  const stickyNavItems = [
    { label: "Passports", targetId: "passports" },
    { label: "Customs & Duty", targetId: "customs-duty" },
    { label: "Money", targetId: "moneys" },
    { label: "Measurement", targetId: "measurements" },
    { label: "Discover Canada", targetId: "about-canada" },
    { label: "Getting around", targetId: "getting-around" }, // cần thêm id cho section này
  ];

  return (
    <div>
      <BannerComing />
      <Breadcrumbs items={breadcrumbItems} />
      <div id="sticky-sentinel"></div>
      <StickyNav sections={stickyNavItems} />
      <Coming_Content_Top />
      <ComingTextImage
        id="passports"
        title="Passports"
        subTitle="No matter how you are arriving in Canada, carry valid travel papers."
        content="To enter Canada, you will need a passport or an equivalent travel document. Make sure your documents are up to date."
        image="images/dola.jpg"
      />
      <ComingTwoText
        id="customs-duty"
        title="Customs & Duty"
        subTitle="Like any country, we have rules about what you can bring in or out of Canada. But don’t worry, they aren’t that complicated."
        contentLeft="<ul><li>You can bring limited alcohol and tobacco.</li><li>There are rules for food, plants, and animals.</li></ul>"
        contentRight="<ul><li>After 48 hours you can bring back $800 duty free.</li><li>Short stays have lower exemptions.</li></ul>"
      />

      <ComingTextImage
        id="moneys"
        title="Money"
        subTitle="No matter how you are arriving in Canada, carry valid travel papers."
        content="To enter Canada, you will need a passport or an equivalent travel document. Make sure your documents are up to date."
        image="images/dola.jpg"
      />
      <ComingTextImage
        id="measurements"
        title="Measurement"
        subTitle="No matter how you are arriving in Canada, carry valid travel papers."
        content="To enter Canada, you will need a passport or an equivalent travel document. Make sure your documents are up to date."
        image="images/dola.jpg"
      />

      <ComingTextLargeImage
        id="about-canada"
        section={{
          slug: "about-canada",
          title: "Discover Canada",
          sub_title: "A beautiful land of nature and diversity.",
          image: { url: "/images/dola.jpg" },
          content: `<p>Canada is known for its natural beauty and multicultural population...</p>`,
        }}
      />

      <CenteredTextSection
        id="getting-around"
        section={{
          title: "Getting around",
          content: `<p>How far is a km? What are the regulations pertaining to customs and duty?</p>
          <p> Get all the info you need to prepare for Canada.</p>`,
          button: {
            title: "More Infomation",
            url: "/learn-more",
          },
        }}
      />
    </div>
  );
};

export default CommingTo;
