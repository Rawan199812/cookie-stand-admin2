// import { fetchCookie } from "../services/cookiesAPI";

// const CookieDetail = ({ cookie }) => (
//     <Layout>
//         <h2>{cookie && cookie.name}</h2>
//         <p>{cookie && cookie.description}</p>
//     </Layout>
// )
    
// export default CookieDetail;

// export async function getServerSideProps(context) {
//     const id = context.query.id;
//     const cookie = await fetchCookie(id);

//     return {
//         props: {
//             cookie,
//         }
//     }
// }