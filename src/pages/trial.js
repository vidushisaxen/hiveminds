// import Expanding from "@/components/CaseStudyDetail/Expanding";
// import Hero from "@/components/CaseStudyDetail/Hero";
// import Layout from "@/components/Layout";
// import { getCaseStudies } from "@/lib/casestudies";

// export default function CaseStudies({ caseStudies }) {

//     console.log(caseStudies)

//   return (
//     <div>
//       <ul>
//         {caseStudies.map((study) => (
//           <li key={study.slug}>
//             <h2>{study.title}</h2>
//             <p dangerouslySetInnerHTML={{ __html: study.excerpt }}></p>
//             {study.featuredImage?.node?.sourceUrl && (
//               <img
//                 src={study.featuredImage.node.sourceUrl}
//                 alt={study.featuredImage.node.altText}
//               />
//             )}
//            <div>
//   <p><strong>Intro:</strong> <span dangerouslySetInnerHTML={{ __html: study.caseStudyFields.intro }} /></p>
//   <p><strong>Problem Statement:</strong> <span dangerouslySetInnerHTML={{ __html: study.caseStudyFields.problemStatement }} /></p>
//   <p><strong>Approach:</strong> <span dangerouslySetInnerHTML={{ __html: study.caseStudyFields.approach }} /></p>
//   <p><strong>Impact:</strong> <span dangerouslySetInnerHTML={{ __html: study.caseStudyFields.impact }} /></p>
// </div>

//           </li>
          
//         ))}
//       </ul>
//     </div>
//   );
// }


// export async function getStaticProps({ params }) {
//     // const { slug } = params || {};
//     let { caseStudies } = await getCaseStudies({
//             //  query: GET_CASE_STUDIES,
//     });
//     return {
//         props: {
//            caseStudies
//         },
//         revalidate: 500,
//     };
// }
import PortableTextComponent from '@/components/PortableTextComponent';
import React from 'react'

const content = [
  {
    _type: "block",
    style: "h1",
    children: [{ _type: "span", text: "Hello World" }],
  },
  {
    _type: "block",
    style: "normal",
    children: [{ _type: "span", text: "This is a paragraph of text." }],
  },
  // {
  //   _type: "image",
  //   asset: {
  //     _ref: "image-1234", // Example image reference (Sanity image ID)
  //   },
  //   alt: "An example image",
  // },
];

const trial = () => {
  return (
    <div className="container mx-auto p-4">
      <PortableTextComponent value={content} />
    </div>
  )
}

export default trial