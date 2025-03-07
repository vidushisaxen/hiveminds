
// import Hero from "@/components/Hero";
// import Layout from "@/components/Layout";
// import PortableTextComponent from "@/components/PortableTextComponent"; // ✅ Import PortableTextComponent
// import { getCaseStudies } from "@/lib/casestudies";
// import img from '../../public/assets/images/impact/our-impact-hero-img.png'

// export default function CaseStudies({ caseStudies }) {
//   console.log(caseStudies)
//   return (
//     <Layout>
//       <Hero title1={caseStudies[2].title} img={img} />
//       <div className="container mx-auto p-4">
//         <ul>
//           {caseStudies.map((study) => (
//             <li key={study.slug} className="mb-10">
//               {/* ✅ Pass Full caseStudyFields to PortableTextComponent */}
//               {/* <PortableTextComponent value={study.content} /> */}
//               <div className="container-lg" dangerouslySetInnerHTML={{__html:study.content}}/>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </Layout>
//   );
// }

// export async function getStaticProps() {
//   let { caseStudies } = await getCaseStudies();
//   return {
//     props: {
//       caseStudies,
//     },
//     revalidate: 500,
//   };
// }
import React from 'react'

const trial = () => {
  return (
    <div>trial</div>
  )
}

export default trial
